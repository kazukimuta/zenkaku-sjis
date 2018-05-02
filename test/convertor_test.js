const { expect } = require('chai');
const convertor = require('../convertor');

describe('convertor.js', () => {
  describe('hiraganaToKatakana', () => {
    it('convert 平仮名 to 全角カナ', () => {
      const hira50on = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよん';
      const kana50on = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨン';
      expect(convertor.hiraganaToKatakana(hira50on)).to.equal(kana50on);
    });
  });
  describe('hankakuNumToZenkakuNum', () => {
    it('convert 半角数字 to 全角数字', () => {
      const hanNumber = '1234567890';
      const zenNumber = '１２３４５６７８９０';
      expect(convertor.hankakuNumToZenkakuNum(hanNumber)).to.equal(zenNumber);
    });
  });
  describe('hankakuRomaToZenkakuRoma', () => {
    it('convert 半角ローマ字 to 全角ローマ字', () => {
      const hanRoma = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const zenRoma = 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ';
      expect(convertor.hankakuRomaToZenkakuRoma(hanRoma)).to.equal(zenRoma);
    });
  })
});
