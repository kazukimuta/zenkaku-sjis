const validator = require('./validator');
const convertor = require('./convertor');

module.exports = {
  isZenkaku: validator.isZenkaku,
  isZenkakuKana: validator.isZenkakuKana,
  hiraganaToKatakana: convertor.hiraganaToKatakana,
  numberToZenkaku: convertor.hankakuNumToZenkakuNum,
  romajiToZenkaku: convertor.hankakuRomaToZenkakuRoma
}
