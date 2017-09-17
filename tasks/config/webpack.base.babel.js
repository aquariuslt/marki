import baseConfig from './base.config';
import pathUtil from '../utils/path.util';

let webpackBaseConfig = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
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
        test: /\.tsx?$/,
        include: [
          pathUtil.resolve(baseConfig.dir.src),
          pathUtil.resolve(baseConfig.dir.test.unit)
        ],
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
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
