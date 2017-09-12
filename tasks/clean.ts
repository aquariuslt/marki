import gulp from 'gulp';
import gutil from 'gulp-util';
import rimraf from 'gulp-rimraf';

import baseConfig from './config/base.config';

gulp.task('clean', function () {
  gutil.log('Deleting lib folder');
  return gulp.src(baseConfig.dir.dist).pipe(rimraf());
});
