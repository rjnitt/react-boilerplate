var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader',
                }, {
                  loader: 'sass-loader',
                }]
            }
          ]
        },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
