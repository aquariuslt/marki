import * as webpack from 'webpack';

import pkg from '../../package.json';
import pathUtil from '../utils/path.util';

import baseConfig from './base.config';

let webpackProdConfig = {
  devtool: 'source-map',
  entry: {
    index: './src/main.js'
  },
  output: {
    path: pathUtil.resolve(baseConfig.dir.dist),
    library: pkg.name,
    libraryTarget: 'umd',
    filename: `${pkg.name}.min.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [pathUtil.resolve(baseConfig.dir.src)],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ],
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: false,
    chunksSort: 'name',
    children: false,
    modules: false,
    reasons: false,
    warnings: true,
    assets: false,
    version: false
  }
};

export default webpackProdConfig;
