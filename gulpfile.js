var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var open = require('gulp-open');

gulp.task('bundle', function() {
  return gulp.src('./index.coffee')
    .pipe(browserify({
      transform:['coffeeify']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('open', ['bundle'], function() {
  return gulp.src('./test.html')
    .pipe(open());
});

gulp.task('bundle2', function() {
  return gulp.src('./index.js')
    .pipe(browserify({
      transform:['coffeeify']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('open2', ['bundle2'], function() {
  return gulp.src('./test.html')
    .pipe(open());
});
