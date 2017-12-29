import gulp from 'gulp';
import log from 'fancy-log';
import sequence from 'gulp-sequence';
import _ from 'lodash';

import webpack from 'webpack';
import {rollup} from 'rollup';

import webpackProdConfig from './config/webpack.prod.babel';
import webpackTestConfig from './config/webpack.test.babel';
import rollupConfig from './config/rollup.config';

gulp.task('webpack:prod', function(done) {
  log.info('Bundling the bundled resources.');
  webpack(webpackProdConfig, function(error, stats) {
    log.info('Webpack build done');
    if (error) {
      log.error('Webpack build error:', error);
    }
    log.info(stats.toString(webpackTestConfig.stats));
    done();
  });
});

gulp.task('webpack:debug', function(done) {
  log.info('Bundling the debug level resources.');
  webpack(webpackTestConfig, function(error, stats) {
    log.info('Webpack build done');
    if (error) {
      log.error('Webpack build error:', error);
    }
    log.info(stats.toString(webpackTestConfig.stats));
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
