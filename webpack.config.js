/* eslint-disable no-undef */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-eval-source-map',
    // default path
    // devServer: {
    //   contentBase: './'
    // }
    // config for plugins- apply optimizations on output
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ]
};  