//define gulp and paths
var gulp 	= require('gulp');
var paths	= require('./package.json').paths;

//function to pull in individual tasks from tasks folder
function getTask(task){
	return require(paths.tasks + task);
}

//define the individual tasks
gulp.task('sass', getTask('sass'));
gulp.task('browserify', getTask('browserify'));
gulp.task('setWatch', getTask('setWatch'));
gulp.task('doWatch', getTask('doWatch'));
gulp.task('jscs', getTask('jscs'));

//define other compound tasks
gulp.task('scripts', ['browserify']);
gulp.task('styles', ['sass']);
//runs all tasks, sets watch global for browserify, then runs the actual watch task
gulp.task('watch', ['setWatch', 'sass', 'browserify'], getTask('doWatch'));
//default task
gulp.task('default', ['scripts', 'styles']);