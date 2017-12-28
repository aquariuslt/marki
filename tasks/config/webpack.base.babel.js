import pathUtil from '../utils/path.util';
import baseConfig from './base.config';

let webpackBaseConfig = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': pathUtil.resolve(baseConfig.dir.src),
      '#': pathUtil.resolve(baseConfig.dir.dist)
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          pathUtil.resolve(baseConfig.dir.src),
          pathUtil.resolve('test/unit/specs')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: false,
    chunksSort: 'name',
    children: false,
    modules: true,
    reasons: false,
    warnings: true,
    assets: false,
    version: false
  }
};

export default webpackBaseConfig;
