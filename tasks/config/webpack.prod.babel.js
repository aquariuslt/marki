import * as webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './base.config';
import pathUtil from '../utils/path.util';
import pkg from '../../package.json';
import webpackBaseConfig from './webpack.base.babel';


let webpackProdConfig = merge(webpackBaseConfig,{
  output: {
    path: pathUtil.resolve(baseConfig.dir.dist),
    library: pkg.name,
    libraryTarget: 'umd',
    filename: `${pkg.name}.min.js`
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
  ]
});

export default webpackProdConfig;
