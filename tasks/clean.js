import gulp from 'gulp';
import log from 'fancy-log';
import rimraf from 'gulp-rimraf';

import baseConfig from './config/base.config';

gulp.task('clean', function() {
  log.info('Deleting lib folder');
  return gulp.src(baseConfig.dir.dist).pipe(rimraf());
});
