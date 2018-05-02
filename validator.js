const ZENKAKU_MOJI = require('./ZENKAKU_MOJI');

/**
 * private 判定関数
 * @param {Array<string>} validatorArray
 * @param {string} targetStr
 * @returns {boolean} isValid 
 */
function isValidStr(validatorArray, targetStr) {
  if(typeof targetStr != 'string' && Object.prototype.toString.call(targetStr).slice(8, -1) != 'String') {
    return false;
  }
  const targetArray = targetStr.split('');
  let isValid = true;
  for (let i = 0; i < targetArray.length; i++) {
    if(validatorArray.indexOf(targetArray[i]) < 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

/**
 * private OR条件判定
 * @param {*} targetStr チェック対象文字列
 * @param {...Array<string>} validatorArray
 * @returns {boolean} isValid 
 */
function isValidOrCondition(targetStr, ...validators) {
  const checked = validators.reduce((acm, validatorArray) => {
    const isValid = isValidStr(validatorArray, targetStr);
    if(typeof acm != 'boolean') {
      return isValid;
    }
    return acm || isValid;
  }, null);
  return checked;
}

/**
 * SJIS第一,第二水準漢字、平仮名、カタカナ、数字、記号を含む全角文字判定
 * @param {String} target 
 * @returns {boolean} isValid
 */
function isZenkaku(target) {
  return isValidStr(ZENKAKU_MOJI.all, target);
}

/**
 * 全角カナ判定。全角カナ、記号、数字を許容
 * @param {*} target 
 */
function isZenkakuKana(target){
  return isValidOrCondition(target, ZENKAKU_MOJI.katakana, ZENKAKU_MOJI.kigo, ZENKAKU_MOJI.suji);
}

module.exports = {
  isZenkaku,
  isZenkakuKana,
  isValidStr,
  isValidOrCondition
};
  
