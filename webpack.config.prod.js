/* eslint-disable no-undef */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        // contenthash - dynam elem keyword derived fr app.js, name updates file out
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-source-map',
    // devServer: {
    //   contentBase: './'
    // }
    plugins:[
        new CleanPlugin.CleanWebpackPlugin()
    ]
};