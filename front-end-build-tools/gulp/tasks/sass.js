var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var sourcemaps 		= require('gulp-sourcemaps');
var cssnano 		= require('gulp-cssnano');
var autoprefixer 	= require('gulp-autoprefixer');
var handleError 	= require('../utils/handleError');
var paths			= require('../../package.json').paths;
//dot env
require('dotenv').config({path: 'build.env'});

module.exports = function(){
	return gulp.src(paths.source + 'sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handleError)
		.pipe(autoprefixer({browsers: ['last 2 versions', 'ie 9', 'ie 10', 'ie 11']}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(process.env.STYLES));
};