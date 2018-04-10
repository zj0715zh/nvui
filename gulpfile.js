'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./packages/theme-default/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/theme-default/lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./packages/theme-default/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/theme-default/lib/fonts'));
});


gulp.task('build', ['compile', 'copyfont']);
gulp.task('watch', function () {
  gulp.watch('./packages/theme-default/src/*.css', ['compile']);
});
gulp.task('default', ['compile', 'copyfont']);
