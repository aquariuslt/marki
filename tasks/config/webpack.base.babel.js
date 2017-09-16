import baseConfig from './base.config';
import pathUtil from '../utils/path.util';

let webpackBaseConfig = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@': pathUtil.resolve(baseConfig.dir.src)
    }
  },
  entry: {
    index: './src/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          pathUtil.resolve(baseConfig.dir.src),
          pathUtil.resolve(baseConfig.dir.test.unit)
        ],
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        include: [pathUtil.resolve(baseConfig.dir.src)],
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
    modules: false,
    reasons: false,
    warnings: true,
    assets: false,
    version: false
  }
};

export default webpackBaseConfig;
