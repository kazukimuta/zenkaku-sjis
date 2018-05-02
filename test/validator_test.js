const { expect } = require('chai');
const validator = require('../validator');

describe('validator.js', () => {
  describe('isValidStr', () => {
    const validationArray = ['a', 'b', 'c'];
    it('should return true, if validation array contains target string', () => {
      expect(validator.isValidStr(validationArray, 'a')).to.equal(true);
      expect(validator.isValidStr(validationArray, 'd')).to.equal(false);
    });
    it('should accept String, as validation target', () => {
      expect(validator.isValidStr(validationArray, 'a')).to.equal(true);
      expect(validator.isValidStr(validationArray, new String('a'))).to.equal(true);
      expect(validator.isValidStr(validationArray, ['a'])).to.equal(false);
    });
  });
  describe('isZenkaku', () => {
    it('should be valid string for 平仮名, 全角カナ, 全角数字, 全角ローマ字, SJIS第一, 第二水準, SJIS1区,2区記号', () => {
      const shouldValid = (target) => {
        return expect(validator.isZenkaku(target)).to.equal(true);
      }
      const shouldInValid = (target) => {
        return expect(validator.isZenkaku(target)).to.equal(false);
      }
      shouldValid('おはよう');
      shouldValid('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ');
      shouldValid('ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ');
      shouldValid('１２３４５６７８９０');
      shouldValid('！”＃＄％＆’（）＝〜｜｛｀｝＊＋＿？＞＜ー＾￥「＠」：；＿・。、');
      shouldValid('亜唖娃湾碗腕'); // 第一水準
      shouldValid('弌丐丕瑤凜熙'); // 第二水準
      shouldInValid('ｱｲｳｴｵ');
      shouldInValid('123');
      shouldInValid('ABCabc');
      shouldInValid('丂丄丅僡僩㒒丂丏丒齰齵𪚲'); // 第三,第四水準
    });
  });
  describe('isZenkakuKana', () => {
    it('should be valid string for 全角カナ, 全角数字, 全角ローマ字, SJIS1区,2区記号', () => {
      const shouldValid = (target) => {
        return expect(validator.isZenkakuKana(target)).to.equal(true);
      }
      const shouldInValid = (target) => {
        return expect(validator.isZenkakuKana(target)).to.equal(false);
      }
      shouldValid('ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ');
      shouldValid('１２３４５６７８９０');
      shouldValid('！”＃＄％＆’（）＝〜｜｛｀｝＊＋＿？＞＜ー＾￥「＠」：；＿・。、');
      shouldInValid('おはよう');
      shouldInValid('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ');
      shouldInValid('亜唖娃湾碗腕'); // 第一水準
      shouldInValid('弌丐丕瑤凜熙'); // 第二水準
    });
  });
});
