# 第一章 确定项目运作流程

## 环境搭建
### webpack
**JSX**
由于babel支持，所以通过babel-loader就能够自动转化jsx为js

```
module: {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}
	]
}
```

**babel**
ES6的简写，支持ES6就是这个，安装：

```
"babel-core": "^6.3.15",
"babel-loader": "^6.2.0",
"babel-preset-es2015": "^6.3.13",
"babel-preset-react": "^6.3.13",
```
还需要在package.json中的依赖中加上

```
"babel": {
    "presets": [
      "es2015",
      "react"
    ]
  },
```  


**devServer以及react-hot**
安装`webpack-dev-server react-hot-loader`
配置：

```
entry: [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	'./src/index.jsx'
],
```
jsx的loader中

```
module: {
	loaders: [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}
	]
}
```
devServer, plugin

```
devServer: {
	contentBase: './dist',
	hot: true
},
plugins: [
	new webpack.HotModuleReplacementPlugin()
]
```

**resolve的文件类型**

```
resolve: {
	extensions: ['', '.js', '.jsx', '.scss']
},
```

## ~~react-toolbox~~ **需要重写**
**安装**

`npm install react-toolbox`

**使用**

```
import React from 'react';
import Button from 'react-toolbox/lib/button';

const CustomButton = () => (
	<Button label="Hello world" raised accent />
);

export default CustomButton;

```

**解决其style问题**

安装 `style-loader css-loader scss-loader url-loader`,其中 `url-loader`是用来给小图片处理用的

配置加入到webpack.module.loaders里面

```
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
```
还有需要在根目录建立一个文件 theme.scss.



