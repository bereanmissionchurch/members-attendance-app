// requried

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	compass = require('gulp-compass'),
	rename = require('gulp-rename');

//	scripts
//	Know thy Globs
//		more info: https://github.com/isaacs/node-glob
//	css/*.css 		# matches files ending in .css in the css directory
//	css/**/*.css 	# matches files ending in .css in the css directory and child directories
//	!css/style.css	# excludes style.css files
//	*.+(js|css)		# matches all files in the root directory ending in .js or .css
	
gulp.task('scripts', function(){
	gulp.src(['public/javascripts/**/*.js', '!public/javascripts/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/javascripts'));
});

// compass / sass
gulp.task('compass', function(){
	gulp.src('public/scss/style.scss')
	.pipe(compass({
		config_file: './config.rb',
		css: 'public/css',	//location of css folder
		sass: 'public/scss',	//location of our sass folder
		require: ['susy']	// require susy
	}))
	.pipe(gulp.dest('public/css/'));
});

// watch tasks
gulp.task('watch', function(){
	gulp.watch('public/javascripts/**/*.js', ['scripts']);
	gulp.watch('public/scss/**/*.scss', ['compass']);
});


// default task
gulp.task('default', ['scripts', 'compass', 'watch']);