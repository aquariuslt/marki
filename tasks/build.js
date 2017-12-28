import gulp from 'gulp';
import gutil from 'gulp-util';
import sequence from 'gulp-sequence';

import webpack from 'webpack';

import webpackProdConfig from './config/webpack.prod.babel';
import webpackTestConfig from './config/webpack.test.babel';

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

gulp.task('build', sequence(['clean'], ['webpack:debug', 'webpack:prod']));
