const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageinPlugin = require('imagemin-webpack-plugin').default;

let isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: path.join(__dirname, './src/index.js'),
	/*path: path.resolve(__dirname, "build"),
	filename: "js/bundle.js"*/
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname,'public/build'),
		publicPath: '../' // styles 'url()' function fix
	},
	devServer: {
		contentBase: "./public"
	},
	devtool: (isProduction) ? '' : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {sourceMap: true}
						},
						{
							loader: 'postcss-loader',
							options: {sourceMap: true}
						},
						{
							loader: 'sass-loader',
							options: {sourceMap: true}
						},
					],
					fallback: 'style-loader',
				})
			},/*
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},*/
			{
				test: /\.(png|gif|cur|jpe?g)$/i,
				loader: [
					{
						loader: 'file-loader',
						options: {
							name: "[path][name].[ext]",
						},
					},
					'img-loader',
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader',
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
				filename: 'css/index.css',
			disable: false,
			allChunks: true
			}
		),
		// new CleanWebackPlugin(['build']),
		new CopyWebpackPlugin(
			[
				{
					from: './img',
					to: 'img'
				}
			],
			{
				ignore: [
					{glob: 'svg/*'},
				]
			},
		)
	],
};
if (isProduction) {
	module.exports.plugins.push(
		new UglifyJSPlugin({
			sourceMap: true
		}),
	);
	module.exports.plugins.push(
		new ImageinPlugin({
			test: /\.(png|gif|svg|jpe?g)$/,
		}),
	);
	module.exports.plugins.push(
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
	);
}
