/** Created by CUIJA on 2017-09-07.*/
import gulp from 'gulp';
import sequence from 'gulp-sequence';
import {Server} from 'karma';

import pathUtil from './utils/path.util';

gulp.task('unittest', function(done) {
  process.env.BABEL_ENV = 'test';
  new Server({
    configFile: pathUtil.resolve('tasks/config') + '/karma.conf.babel.js',
    singleRun: true
  }, done).start();
});

gulp.task('test', sequence(['unittest']));
