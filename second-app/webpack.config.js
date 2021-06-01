const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpuckPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
            new OptimizeCssAssetsWebpuckPlugin(),
            new TerserWebpackPlugin()
		]
	}
	return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hrm: isDev,
            reloadAll: true
        }
    }, 'css-loader']

    if (extra) {
    	loaders.push(extra)
    }

    return loaders
}

const babelOptions = preset => {
	const opts = {
		presets: [
            '@babel/preset-env'
		],
		plugins: [
            '@babel/plugin-proposal-class-properties'
		]
	}

	if (preset) {
		opts.presets.push(preset)
	}

	return opts
}

const jsLoaders = () => {
	const loaders = [{
		loader: 'babel-loader',
		options: babelOptions()
	}]

	if (isDev) {
        loaders.push('eslint-loader');
	}

	return loaders
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'production',
	entry: {
		main: ['@babel/polyfill', './index.jsx']
	},
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'@models': path.resolve(__dirname, 'src/models'),
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: optimization(),
	devServer: {
        port: 4200
	},
	devtool: isDev ? 'source-map' : '',
	plugins: [
        new HTMLWebpackPlugin({
        	template: './index.html',
        	minify: {
        		collapseWhitespace: isProd
        	}
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './src/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
        }]),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, './src/images'),
            to: path.resolve(__dirname, 'dist/images')
        }]),
        new MiniCssExtractPlugin({
        	filename: filename('css')
        })
	],
	module: {
		rules: [
            {
            	test: /\.css$/,
            	use: cssLoaders()
            },
            {
            	test: /\.less$/,
            	use: cssLoaders('less-loader')
            },
            {
            	test: /\.s[ac]ss$/,
            	use: cssLoaders('sass-loader')
            },
            {
            	test: /\.(png|jpg|svg|gif)$/,
            	use: ['file-loader']
            },
            {
            	test: /\.(ttf|woff|woff2|eot)$/,
            	use: ['file-loader']
            },
            {
            	test: /\.xml$/,
            	use: ['xml-loader']
            },
            {
            	test: /\.csv$/,
            	use: ['csv-loader']
            },
            {
            	test: /\.js$/,
            	exclude: /node-modules/,
            	use: jsLoaders('@babel/preset-react')
            },
            {
            	test: /\.ts$/,
            	exclude: /node-modules/,
            	loader: {
            		loader: 'babel-loader',
            		options: babelOptions('@babel/preset-typescript')
            	}
            },
            {
            	test: /\.jsx$/,
            	exclude: /node-modules/,
            	loader: {
            		loader: 'babel-loader',
            		options: babelOptions('@babel/preset-react')
            	}
            }
		]
	}
}