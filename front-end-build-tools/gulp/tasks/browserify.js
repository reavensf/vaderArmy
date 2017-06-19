var gulp 		= require('gulp');
var browserify 	= require('browserify');
var watchify	= require('watchify');
var source 		= require('vinyl-source-stream');
var buffer		= require('vinyl-buffer');
var uglify		= require('gulp-uglify');
var sourcemaps 	= require('gulp-sourcemaps');
var gutil		= require('gulp-util');
var handleError = require('../utils/handleError');
var paths		= require('../../package.json').paths;
//dot env
require('dotenv').config({path: 'build.env'});

module.exports = function(){
	var src = paths.source + 'js/main.js'
	if(global.isWatching){
		var bundler = watchify(browserify(src));
	}else{
		var bundler = browserify(src);
	}

	var bundle = function(){
		return bundler
			.bundle()
			.on('error', handleError)
			.pipe(source('./app.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(process.env.SCRIPTS));
	};

	if(global.isWatching) {
		bundler.on('update', function(){
			bundle();
			gutil.log(gutil.colors.green('Change Detected:'), 'Scripts Rebundling');
		});
	}

	return bundle();
};