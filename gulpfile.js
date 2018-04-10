'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./packages/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./packages/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./packages/src/*.css', ['compile']);
});
gulp.task('default', ['compile', 'copyfont']);
