var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
	webserver = require('gulp-webserver'),
	inject = require('gulp-inject');

gulp.task('build', ['js']);

gulp.task('echo', function () {
   console.log('Hello world!');
});

gulp.task('compile', function() {
   gulp.src('app/**/*.less')
	  .pipe(watch('app/*.less'))
	  .pipe(less())
	  .pipe(gulp.dest('app/css'))
	  .pipe(livereload());
});

gulp.task('inject', function() {
	var target = gulp.src('./app/index.html');
	// It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/**/*.css'], {read: false});

	return target.pipe(inject(sources))
				.pipe(gulp.dest('../'));
});

gulp.task('js', function() {
	console.log('js changed, reload page');
   gulp.src('app/*.js')
	  .pipe(livereload());
});

gulp.task('html', function() {
	console.log('html changed, reload page');
   gulp.src('app/*.html')
	  .pipe(livereload());
});


var watcherLess = gulp.watch('app/**/*.less', ['compile', 'inject']);
watcherLess.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});

var watcherJS = gulp.watch('app/**/*.js', ['js']);
watcherJS.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});


var watcherHtml = gulp.watch('app/**/*.html', ['html']);
watcherHtml.on('change', function (event) {
   console.log('Event type: ' + event.type); // added, changed, or deleted
   console.log('Event path: ' + event.path); // The path of the modified file
});

gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});