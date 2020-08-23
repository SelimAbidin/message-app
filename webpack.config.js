const {join} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: join(__dirname,'dist'),
        filename: 'main.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: ['babel-loader']},
            {test: /\.(scss)$/, use: ['style-loader', 'css-loader', 'sass-loader']},
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            inject: true
        })
    ]
}