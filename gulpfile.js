var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel');

// DEFAULT
gulp.task('default', ['jshint']);

// JSHINT
gulp.task('jshint', ['babel'], function() {
  return gulp.src('./dist/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// BABEL
gulp.task('babel', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

// WATCH
gulp.task('watch', ['jshint'], function() {
  gulp.watch('./src/**/*.js', ['jshint']);
});
