// requried

var gulp = require('gulp');
	uglify = require('gulp-uglify');

// scripts
gulp.task('scripts', function(){
	console.log('it works');
});

// default task
gulp.task('default', ['scripts']);