const path = require('path');
// HTML를 자동으로 만들어서 bundle들을 저장합니다.
// - title은 페이지 제목입니다. 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// (보기에)빌드 전 먼저 정해준 폴더를 다 지웁니다.
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 파일 에러가 어디서 오나 찾아줍니다.
    devtool: 'inline-source-map',
    // 
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HtmlWebpackPlugin({
            title: 'Developement!'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
}