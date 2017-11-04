/** Created by CUIJA on 2017-09-07.*/
import gulp from 'gulp';

import {Server} from 'karma';

import baseConfig from './config/base.config';
import pathUtil from './utils/path.util';

gulp.task('test', function(done) {
  process.env.BABEL_ENV = 'test';
  new Server({
    configFile: pathUtil.resolve('tasks/config') + '/karma.conf.babel.js',
    singleRun: true
  }, done).start();
});
