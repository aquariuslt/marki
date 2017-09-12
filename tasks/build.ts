import gulp from 'gulp';
import gutil from 'gulp-util';
import sequence from 'gulp-sequence';

gulp.task('webpack:prod', function () {

});

gulp.task('webpack:debug', function () {

});

gulp.task('build', sequence(['clean'], ['webpack:debug', 'webpack:prod']));
