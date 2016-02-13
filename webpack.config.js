var webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
module.exports = {
	context: __dirname,
	devtool: 'inline-source-map',
    postcss: [autoprefixer],
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				include: /src/,
				loaders: [
                    'react-hot',
                    'babel'
                ]
			},
            {
                test: /\.scss$/,
                loaders: [
                    "style",
                    "css?sourceMap",
                    "postcss",
                    "sass?sourceMap"
                    ]
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            },
			{
					test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)$/i,
					loader: 'url-loader?limit=8192'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot:true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
