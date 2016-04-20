// requried

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	//browserSync = require('browser-sync'),
	//reload = browserSync.reload,
	compass = require('gulp-compass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
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
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('public/javascripts'));
});

// compass / sass
gulp.task('compass', function(){
	gulp.src('public/scss/style.scss')
	.pipe(plumber())	// should be the first thing after the source. It keeps things moving w/o erroring out
	.pipe(compass({
		config_file: './config.rb',
		css: 'public/css',	//location of css folder
		sass: 'public/scss',	//location of our sass folder
		require: ['susy']	// require susy
	}))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('public/css/'));
	//.pipe(reload({stream:true}));
});

// html tasks
gulp.task('html', function(){
	gulp.src('public/**/*.html');
})

// broser task
/*
gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: "./public/"
		}
	});
})
*/

// watch tasks
gulp.task('watch', function(){
	gulp.watch('public/javascripts/**/*.js', ['scripts']);
	gulp.watch('public/scss/**/*.scss', ['compass']);
	gulp.watch('public/**/*.html', ['html']);
});


// default task
gulp.task('default', ['scripts', 'compass', 'html', 'watch']);
