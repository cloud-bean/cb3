var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoPreFixer = require('autoprefixer');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        './src/index.jsx'
    ],
    postCss: [autoPreFixer],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
	module: {
        loaders: [{
            test: /\.js[x]?$/,
            include: /src/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postCss!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        },
            {
            test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
            loader: 'url?limit=81920'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            mangle: false
        }),
        new ExtractTextPlugin("bundle.css", {
            allChunks: true
        })
    ]
};
