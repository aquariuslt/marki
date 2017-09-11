import * as webpack from 'webpack';
import merge from 'webpack-merge';

import webpackProdConfig from './webpack.prod.babel';

let webpackTestConfig = merge(webpackProdConfig, {});

webpackTestConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"testing"'
    }
  })
];

delete webpackTestConfig.entry;
delete webpackTestConfig.output;
export default webpackTestConfig;
