var gulp = require('gulp');
var gBrowserify = require('gulp-browserify');
var browserify = require('browserify');
var rename = require('gulp-rename');
var open = require('gulp-open');
var clean = require('gulp-clean');
var fs = require('fs');

gulp.task('clean', function(){
  return gulp.src('./bundle.js', {read: false})
    .pipe(clean());
});

gulp.task('pure-browserify', ['clean'], function () {
  return browserify('./index.coffee')
    .transform('coffeeify')
    .bundle()
    .pipe(fs.createWriteStream('./bundle.js'))
});

gulp.task('open-pure-browserify', ['pure-browserify'], function () {
  return gulp.src('./test.html')
    .pipe(open());
});

gulp.task('bundle-coffee-entry', ['clean'], function() {
  return gulp.src('./index.coffee')
    .pipe(gBrowserify({
      transform:['coffeeify']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('open-coffee-entry', ['bundle-coffee-entry'], function() {
  return gulp.src('./test.html')
    .pipe(open());
});

gulp.task('bundle-js-entry', ['clean'], function() {
  return gulp.src('./index.js')
    .pipe(gBrowserify({
      transform:['coffeeify']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('open-js-entry', ['bundle-js-entry'], function() {
  return gulp.src('./test.html')
    .pipe(open());
});
