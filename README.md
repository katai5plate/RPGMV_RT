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

## 対応環境

- RPG ツクール MV エディター: 1.6.2
- コアスクリプト: community-1.3b

## ダウンロード

1. [ここからソースコードをダウンロード](https://github.com/katai5plate/RPGMV_RT/archive/master.zip)
2. zip を解凍し `dist` フォルダの中に入っているファイルを使ってください。

## 使い方

**念のためバックアップを忘れずに！**

1. 同梱の `index.html` をプロジェクトの同一ファイルに上書きします。

2. プロジェクトから以下のファイルを削除します。

- `fonts/gamefont.css`
- `js/main.js`
- 全てのコアスクリプト
  - `js/rpg_core.js`
  - `js/rpg_managers.js`
  - `js/rpg_objects.js`
  - `js/rpg_scenes.js`
  - `js/rpg_sprites.js`
  - `js/rpg_windows.js`
- 全ての libs
  - `js/libs/fpsmeter.js`
  - `js/libs/iphone-inline-video.browser.js`
  - `js/libs/lz-string.js`
  - `js/libs/pixi.js`
  - `js/libs/pixi-picture.js`
  - `js/libs/pixi-tilemap.js`

3. 同梱の `js/plugins/Community_Basic.js` をプロジェクトの同一ファイルに上書きします。

問題なく動けば完了です！

## Q & A

### 「ファイル ～ を読み込めません」

- 消してはいけないファイルを消している可能性があります。
  - `使い方` の `2.` に記載されているファイル以外は削除してはいけません。
  - `plugins.js` を削除していませんか？

### CSS に変更を加えたい

1. 同梱の `indexWithCss.html` を `index.html` にリネームし、プロジェクトの `index.html` と上書きしてください
2. 同梱の `index.css` をプロジェクトの `index.html` と同じフォルダに置いてください。
3. `index.css` に変更を加えることができます。

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
