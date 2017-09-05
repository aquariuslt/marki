import webpack from 'webpack';
import merge from 'webpack-merge';
import OptimizeJsPlugin from 'optimize-js-plugin';

import pkg from '../../package.json';
import webpackProdConfig from './webpack.prod.babel';

let webpackDebugConfig = merge(webpackProdConfig, {
  output: {
    filename: `${pkg.name}.js`
  }
});

webpackDebugConfig.plugins = [
  // new OptimizeJsPlugin(),
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
