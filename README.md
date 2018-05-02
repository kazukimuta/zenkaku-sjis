# zenkaku-sjis

StraightForward 全角 text validator and convertor, includes SJIS第一水準, 第二水準漢字 validation.

## What Is

- 半角カナ、英数字を全角文字に変換する
- 全角文字かどうかを判定する
- 文字列がSJIS第一水準、第二水準に含まれる文字列かどうかを判定する


## What Is NOT

- 文字コード変換機能はありません

## Exapmle

```
const {isZenkaku, hiraganaToKatakana, numberToZenkaku, romajiToZenkaku} = require('zenkaku-sjis');

const sjis_dai1suijyun = '亜唖娃';
const sjis_dai2suijyun = '弌丐丕';
const sjis_dai3suijyun = '俱𠀋㐂';

isZenkaku(sjis_dai1suijyun) => true
isZenkaku(sjis_dai2suijyun) => true
isZenkaku(sjis_dai3suijyun) => false

const hankaku_moji = '123abcABCｱｲｳ';
hiraganaToKatakana( numberToZenkaku( romajiToZenkaku(hankaku_moji) ) ) => '１２３ａｂｃＡＢＣアイウ'
```




