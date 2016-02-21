// requried

var gulp = require('gulp');
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');

//	scripts
//	Know thy Globs
//		more info: https://github.com/isaacs/node-glob
//	css/*.css 		# matches files ending in .css in the css directory
//	css/**/*.css 	# matches files ending in .css in the css directory and child directories
//	!css/style.css	# excludes style.css files
//	*.+(js|css)		# matches all files in the root directory ending in .js or .css
	
gulp.task('scripts', function(){
	gulp.src(['public/javascripts/**/*.js', '!app/js/**/*/min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/javascripts'));
});

// default task
gulp.task('default', ['scripts']);