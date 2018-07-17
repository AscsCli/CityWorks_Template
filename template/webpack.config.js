const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './demo/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './demo/dist'),
        publicPath : './demo/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    "babel-loader"
                ]
            }
        ]
    }
};