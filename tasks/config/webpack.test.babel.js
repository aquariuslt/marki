import webpack from 'webpack';
import merge from 'webpack-merge';

import webpackBaseConfig from './webpack.base.babel';

let webpackTestConfig = merge(webpackBaseConfig, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"test"'
      }
    })
  ]
});
export default webpackTestConfig;
