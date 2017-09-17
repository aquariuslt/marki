/** Created by CUIJA on 2017-09-07.*/
import gulp from 'gulp';
import karma from 'karma';

import baseConfig from './config/base.config';
import pathUtil from './utils/path.util';

let Server = karma.Server;

gulp.task('test', function(done) {
  process.env.BABEL_ENV = 'test';
  new Server({
    configFile: pathUtil.resolve(baseConfig.dir.test.unit) + '/karma.conf.babel.js',
    singleRun: true
  }, done).start();
});
