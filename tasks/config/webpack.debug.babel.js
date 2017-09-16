import * as webpack from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './base.config';
import pkg from '../../package.json';
import pathUtil from '../utils/path.util';
import webpackBaseConfig from './webpack.base.babel';

let webpackDebugConfig = merge(webpackBaseConfig, {
  output: {
    path: pathUtil.resolve(baseConfig.dir.dist),
    filename: `${pkg.name}.js`
  }
});

webpackDebugConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: null,
    mangle: false,
    output: {
      comments: false,
      beautify: true
    }
  })
];

export default webpackDebugConfig;
