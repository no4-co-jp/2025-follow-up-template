# 内定者用課題テンプレート

## 開発環境

 - フロントエンド：Next.js
 - バックエンド：Fastify
 - DB：MySQL

## 環境構築

### Docker Desktopのインストール
1. [こちら](https://www.docker.com/ja-jp/get-started/)より、使用パソコンに合ったDocker Desktopをインストールする。

### エディタのセットアップ
 1. [Visual Studio Code](https://code.visualstudio.com/download)(以下、VS Code)をインストールする。

 1. VS Codeを開き、以下の拡張機能をインストールする。<br>
[Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 開発環境のセットアップ
 1. 本リポジトリをクローンしたディレクトリをVS Codeで開く。

 1. Docker Desktopを起動した状態で右下に表示される「Reopen in Container(コンテナで再度開く)」ボタンを押す。<br>
 ※もしくは、画面左下の青い「><」マークを押して、「Reopen in Container(コンテナで再度開く)」を選択する。

 1. VS Codeのターミナルで以下のコマンドを実行する。<br>
 `npm run dev`

 1. ブラウザで<http://localhost:3000>、<http://localhost:3000/sample>にアクセスする。

 1. Hello,Next.jsやUser Listが表示されればセットアップ完了。
