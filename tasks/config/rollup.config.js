import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from '../../package.json';

import baseConfig from './base.config';

export default {
  input: baseConfig.dir.src + '/main.js',
  output: [
    {
      name: 'marki',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-0'
      ],
      plugins: [
        'transform-runtime',
        'external-helpers'
      ]
    })
  ]
};
