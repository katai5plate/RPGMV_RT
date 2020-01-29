# RPGMV_RT

ツクール MV のスクリプトを極限までシンプルにしようプロジェクト

![image](https://user-images.githubusercontent.com/22496143/73382764-78496a80-430b-11ea-9b89-2c5f97ba1a17.png)

## これは何？

ツクール MV に必要な JavaScript ファイルの数を最小限かつ容量が軽くなるように圧縮したものです。

|                | 圧縮前  |     | 圧縮後 |     |     差分     |
| -------------: | :-----: | --- | :----: | --- | :----------: |
|     **サイズ** | 2290 KB | -   | 602 KB | =   | **-1688 KB** |
| **ファイル数** |   18    | -   |   4    | =   |   **-14**    |

`RPGツクール2000` の `RPG_RT.exe` のサイズ `729 KB` よりも軽い！

## ダウンロード

1. [ここからソースコードをダウンロード](https://github.com/katai5plate/RPGMV_RT/archive/master.zip)
2. zip を解凍し `dist` フォルダの中に入っているファイルを使ってください。

## 使い方

**念のためバックアップを忘れずに！**

1. 同梱の `index.html` をプロジェクトの同一ファイルに上書きします。

2. プロジェクトから以下のファイルを削除します。

- `fonts/gamefont.css`
- `js/main.js`
- `js/rpg_core.js`
- `js/rpg_managers.js`
- `js/rpg_objects.js`
- `js/rpg_scenes.js`
- `js/rpg_sprites.js`
- `js/rpg_windows.js`

3. 同梱の `js/plugins/Community_Basic.js` をプロジェクトの同一ファイルに上書きします。

問題なく動けば完了です！

## ビルド方法 (開発者向け)

- 必須:
  - Git
  - Node.js
  - Yarn

```
git clone https://github.com/katai5plate/RPGMV_RT
yarn && yarn i
yarn build
```
