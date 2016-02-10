var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: [
        './src/index.jsx'
    ],
    postcss: [autoprefixer],
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
            test: /(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url?limit=10000'
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
