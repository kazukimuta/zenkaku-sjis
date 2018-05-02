/**
 * 平仮名を全角カタカナに変換
 * @param {string} src 
 * @returns {string} 全角カナ変換文字
 */
function hiraganaToKatakana(src) {
  return src.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

/**
 * 半角数字を全角数字に変換
 * @param {string} src 
 * @returns {string} 全角数字変換文字
 */
function hankakuNumToZenkakuNum(src) {
  return src.replace(/[0-9]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

/**
 * 半角ローマ字を全角ローマ字に変換
 * @param {string} src 
 * @returns {string} 全角ローマ字変換文字
 */
function hankakuRomaToZenkakuRoma(src) {
  return src.replace(/[A-Za-z]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });
}

module.exports = {
  hiraganaToKatakana,
  hankakuNumToZenkakuNum,
  hankakuRomaToZenkakuRoma
}
