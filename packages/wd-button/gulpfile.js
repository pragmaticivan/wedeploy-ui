var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass({includePaths: ['../../node_modules']}))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.scss', ['build']);
});
