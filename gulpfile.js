var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
	  webserver = require('gulp-webserver'),
	  inject = require('gulp-inject'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('reload', function() {
	gulp.src('app/src/index.html')
	  .pipe(livereload());
});

/***************LESS convertion and Injection into index.html******************/
gulp.task('build-css', function() {
  return gulp.src(['app/**/*.less'])
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(less())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('app/css'));
});

gulp.task('injectCss', function() {
  var target = gulp.src('./index.html');
  var sources = gulp.src(['app/css/**/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest(''));
});
/***********************************END***************************************/


/***********************Injection of .js into index.html**********************/
gulp.task('injectJs', function() {
	var target = gulp.src('./index.html');
  var sources = gulp.src(['app/**/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest(''));
});
/***********************************END***************************************/


/***********************Injection of .js into index.html**********************/
gulp.task('host', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
/***********************************END***************************************/


var watcherLess = gulp.watch('app/**/*.less', ['build-css', 'injectCss', 'reload']);
watcherLess.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});

var watcherJS = gulp.watch('app/**/*.js', ['injectJs', 'reload']);
watcherJS.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});


var watcherHtml = gulp.watch('app/**/*.html', ['reload']);
watcherHtml.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});

gulp.task('serve', ['build-css', 'injectCss', 'injectJs', 'host']);