const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	mode: 'production',
	entry: {
		index: './main.js',
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					// 将 CSS 转化成 CommonJS 模块
					'css-loader',
					// 将 Sass 编译成 CSS
					'sass-loader',
				],
			},
		],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		clean: true,
	},
	devtool: 'inline-source-map',
	// devtool: 'source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, './public'),
			publicPath: '/public'
		},
		// Dev server client for web socket transport, hot and live reload logic
		hot: true,
		client: {
			webSocketTransport: 'ws',
		},
		webSocketServer: 'ws',
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: 'body'
		}),
		// Plugin for hot module replacement
		new webpack.HotModuleReplacementPlugin(),
		// new CopyPlugin({
		// 	patterns: [
		// 		{ from: "ui", to: "../dist/index.html" },
		// 	],
		// }),
		new MiniCssExtractPlugin(),
	],
};
