import * as webpack from 'webpack';
import merge from 'webpack-merge';

import webpackBaseConfig from './webpack.base.babel';

let webpackTestConfig = merge(webpackBaseConfig, {});

webpackTestConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"testing"'
    }
  })
];

delete webpackTestConfig.entry;

export default webpackTestConfig;
