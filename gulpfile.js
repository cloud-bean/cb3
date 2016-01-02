var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var rename = require('gulp-rename');
var webpackConfig = require('./webpack.config.js');

gulp.task('default',function(){
  return webpack(webpackConfig)
    .pipe(gulp.dest( './dist' ))
    .pipe(rename('all.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest( './dist' ));
})
