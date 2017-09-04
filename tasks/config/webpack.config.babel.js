import path from 'path';
import pkg from '../../package.json';

function resolve(dir) {
  return path.join(__dirname, '../..', dir);
}

let webpackProdConfig = {
  devtool: '#inline-source-map',
  entry: {
    index: './index.js'
  },
  output: {
    path: resolve('lib'),
    library: pkg.name,
    libraryTarget: 'umd',
    filename: `${pkg.name}.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        loader: 'babel-loader'
      }
    ]
  }
};

export default webpackProdConfig;
