var gulp = require('gulp');

gulp.task('default', []);

var paths = {
  typescript: ['./src/**/*.ts']
};

gulp.task('watch', function () {
  gulp.watch(paths.typescript, ['webpack']);
});

// webpackの最小構成
var webpack = require('gulp-webpack');;
var webpackConfig = require('./webpack.config.js');
gulp.task('webpack', function () {
  gulp.src(paths.typescript)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./www/js'));
});
