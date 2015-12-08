var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'react-hot!babel'
			},
			{
				test    : /(\.scss|\.css)$/,
				include : /(node_modules)\/react-toolbox/,
				loaders : [
					require.resolve('style-loader'),
					require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					require.resolve('sass-loader') + '?sourceMap',
					'toolbox'
				]
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
	},
	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
