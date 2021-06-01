const path = require('path');
const fs = require('fs');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const TerserPlugin = require('terser-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = function(webpackEnv) {
  const MODE = process.env.NODE_ENV;
  const isDev = MODE === 'development';
  const isProd = MODE === 'production';

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: { publicPath: '../../' }
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              postcssNormalize(),
            ],
          },
          sourceMap: isDev,
        },
      },
    ]
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isDev,
            root: path.resolve(fs.realpathSync(process.cwd()), 'src'),
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        }
      );
    }
    return loaders;
  };

  return {
    mode: MODE,
    bail: isProd,
    entry: [
      path.resolve(__dirname, 'src/index.tsx')
    ],
    devtool: isDev && 'source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:8].js',
      chunkFilename: 'chunk.[contenthash:8].js',
      globalObject: 'this'
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
            sourceMap: isDev,
          },
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: isDev  
              ? {
                inline: false,
                annotation: true,
              }
              : false
          },
          cssProcessorPluginOptions: {
            preset: ['default', { minifyFontValues: { removeQuotes: false } }],
          },
        })
      ],
      splitChunks: {
        chunks: 'all',
        name: false,
      },
    },
    resolve: {
      plugins: [
        PnpWebpackPlugin,
      ],
      extensions: ['.tsx', '.ts', '.js', 'jsx', '.mjs', '.json']
    },
    resolveLoader: {
      plugins: [
        PnpWebpackPlugin.moduleLoader(module),
        new ModuleScopePlugin(path.resolve(fs.realpathSync(process.cwd()), 'src')),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.(js|mjs|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                cache: true,
                formatter: require.resolve('react-dev-utils/eslintFormatter'),
                eslintPath: require.resolve('eslint'),
                resolvePluginsRelativeTo: __dirname,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 20000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: path.resolve(fs.realpathSync(process.cwd()), 'src'),
              loader: require.resolve('babel-loader'),
              options: {
                presets: [
                  [
                    require.resolve('babel-preset-react-app'),
                  ],
                ],
                babelrc: false,
                configFile: false,
                cacheDirectory: true,
                cacheCompression: false,
                compact: isProd,
                sourceMaps: isDev,
                inputSourceMap: isDev
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve('babel-preset-react-app/dependencies'),
                    { helpers: true },
                  ],
                ],
                cacheDirectory: true,
                cacheCompression: false,
                sourceMaps: isDev,
                inputSourceMap: isDev,
              },
            },
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isDev
              }),
              sideEffects: true,
            },
            {
              test: /\.module\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isDev,
                modules: {
                  getLocalIdent: getCSSModuleLocalIdent,
                },
              }),
            },
            {
              test: /\.s[ac]ss$/,
              exclude: /\.module\.s[ac]ss$/,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isDev
                },
                'sass-loader'
              ),
              sideEffects: true,
            },
            {
              test: /\.module\.s[ac]ss$/,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isDev,
                  modules: {
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'sass-loader'
              ),
            },
            //For other file types
            // {
            //   exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            //   use: [
            //     {
            //       loader: require.resolve('file-loader'),
                  
            //       options: {
            //          name: 'static/media/[name].[hash:8].[ext]',
            //       }
            //     }
            //   ]
            // },
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
	    	patterns: [
	        	{ 
              from: path.join(__dirname, 'assets'), 
              to: path.join(__dirname, 'dist'),
            }
	    	],
	    }),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(fs.realpathSync(process.cwd()), 'public/index.html')
          },
          isProd
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      //isDev && new webpack.HotModuleReplacementPlugin(),
      new ModuleNotFoundPlugin( path.resolve(fs.realpathSync(process.cwd()), '.')),
      new CleanWebpackPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
  }
};