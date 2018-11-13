'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssmin = require('gulp-cssmin');
var babel = require("gulp-babel");
var salad = require('postcss-salad')(require('./salad.config.json'));

gulp.task('compile', function() {
  return gulp.src('./packages/theme-default/src/*.css')
    .pipe(postcss([salad]))
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/theme-default/lib'));
});

gulp.task("toes5", function () {
  return gulp.src("./src/es6/**/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("./src/utils")); //转换成 ES5 存放的路径
});

gulp.task('copyfont', function() {
  return gulp.src('./packages/theme-default/src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./packages/theme-default/lib/fonts'));
});


gulp.task('build', ['compile','toes5','copyfont']);
gulp.task('watch', function () {
  gulp.watch('./packages/theme-default/src/*.css', ['compile']);
});
gulp.task('default', ['compile', 'copyfont']);
