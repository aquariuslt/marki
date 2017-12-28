import gulp from 'gulp';
import gutil from 'gulp-util';
import sequence from 'gulp-sequence';
import _ from 'lodash';

import webpack from 'webpack';
import {rollup} from 'rollup';

import webpackProdConfig from './config/webpack.prod.babel';
import webpackTestConfig from './config/webpack.test.babel';
import rollupConfig from './config/rollup.config';

gulp.task('webpack:prod', function(done) {
  gutil.log('Bundling the bundled resources.');
  webpack(webpackProdConfig, function(error, stats) {
    gutil.log('Webpack build done');
    if (error) {
      gutil.log('Webpack build error:', error);
      throw new gutil.PluginError('webpack', error);
    }
    gutil.log(stats.toString(webpackTestConfig.stats));
    done();
  });
});

gulp.task('webpack:debug', function(done) {
  gutil.log('Bundling the debug level resources.');
  webpack(webpackTestConfig, function(error, stats) {
    gutil.log('Webpack build done');
    if (error) {
      gutil.log('Webpack build error:', error);
      throw new gutil.PluginError('webpack', error);
    }
    gutil.log(stats.toString(webpackTestConfig.stats));
    done();
  });
});

gulp.task('rollup', function(done) {
  let apiLevelRollupConfig = _.cloneDeep(rollupConfig);
  delete apiLevelRollupConfig.output;

  rollup(apiLevelRollupConfig).then((bundle) => {
    _.each(rollupConfig.output, function(output) {
      bundle.write(output);
    });
    done();
  });
});

gulp.task('build', sequence(['clean'], ['rollup']));
gulp.task('build:webpack', sequence(['clean'], ['webpack:debug', 'webpack:prod']));
