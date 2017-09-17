import * as webpack from 'webpack';
import merge from 'webpack-merge';

import pathUtil from '../utils/path.util';
import pkg from '../../package.json';
import webpackBaseConfig from './webpack.base.babel';
import baseConfig from './base.config';

let webpackTestConfig = merge(webpackBaseConfig, {
  output: {
    path: pathUtil.resolve(baseConfig.dir.dist),
    filename: `${pkg.name}.test.js`
  }
});

webpackTestConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"testing"'
    }
  })
];

delete webpackTestConfig.entry;

export default webpackTestConfig;
