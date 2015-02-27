var gulp = require('gulp');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');
var bump = require('gulp-bump');
var jasmine = require('gulp-jasmine');

gulp.task('package', function () {
  return gulp.src('src/index.js')
    .pipe(webpack())
    .pipe(rename('index.js'))
    .pipe(gulp.dest('./'));
});


gulp.task('version', function () {
  gulp.src('./package.json')
    .pipe(bump({version: require('Highcharts/package.json').version}))
    .pipe(gulp.dest('./'));
});


gulp.task('default', ['version', 'package']);