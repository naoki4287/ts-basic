const path = require('path');

module.exports = {
  // エントリポイントとしてbundleという名前をつけて、そのエントリポイント用のファイルをvalueに書く
  // エントリポイントとは　webpackのモジュールのバンドルの起点となるファイル
  entry: {
    bundle: './src/index.ts'
  },
  // webpackでbundleして1つにまとめたファイルをどこに出力するか
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 名前解決の時にファイルの拡張子を書く必要があるかどうかをextensionsで決める。この場合だとimportする時にいちいち .ts .js と書かなくてよくなる。
  resolve: {
    extensions: ['.ts', '.js']
  },
  // webpack-dev-server（ローカルのサーバー）が参照するディレクトリ
  // open: true にしておくとローカルのウェブサーバーを立ち上げた時にブラウザを立ち上げてくれる設定
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}