var gulp = require('gulp');
var gBrowserify = require('gulp-browserify');
var browserify = require('browserify');
var rename = require('gulp-rename');
var open = require('gulp-open');
var clean = require('gulp-clean');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var fs = require('fs');




gulp.task('pure-browserify', ['clean'], function() {
  return browserify('./index.coffee')
    .transform('coffeeify')
    .bundle()
    .pipe(fs.createWriteStream('./bundle.js'))
});
gulp.task('pure-browserify', ['pure-browserify'], openTask);




gulp.task('bundle-coffee-entry', ['clean'], function() {
  return gulp.src('./index.coffee')
    .pipe(gBrowserify({
    transform: ['coffeeify']
  }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});
gulp.task('coffee-entry', ['bundle-coffee-entry'], openTask);




gulp.task('bundle-js-entry', ['clean'], function() {
  return gulp.src('./index.js')
    .pipe(gBrowserify({
    transform: ['coffeeify']
  }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
});
gulp.task('js-entry', ['bundle-js-entry'], openTask);




gulp.task('bundle-vinyl-transform', ['clean'], function() {

  var through = require('through2');

  var browserified = function(file, env, cb) {
    var self = this;
    return browserify(file)
      .transform('coffeeify')
      .bundle(function(err, src) {
      if (err) {
        self.emit('error', err)
      } else {
        file.contents = new Buffer(src);
        self.push(file);
      }
      cb();
    })
  };

  return gulp.src('./index.js')
    .pipe(through.obj(browserified))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('vinyl-transform', ['bundle-vinyl-transform'], openTask);


gulp.task('bundle-vinyl-source-stream', ['clean'], function() {
  return browserify('./index.coffee')
    .transform('coffeeify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('.'));
});
gulp.task('vinyl-source-stream', ['bundle-vinyl-source-stream'], openTask);




gulp.task('clean', function() {
  return gulp.src('./bundle.js', {
    read: false
  })
    .pipe(clean());
});

function openTask() {
  return gulp.src('./test.html')
    .pipe(open());
}
