# Front End Build Tools

## Installation and Configuration

Usage of Gulp and the included build tools depends on installation and use of node and npm.  With node and npm installed, run `npm install` to download the required packages for the included build tools.

The following paths can be configured through the included `package.json` file:

*  `source` - The location of the source files that serve as inputs

The following paths can be configured through the `build.env` file.

*  `scripts` - The output location for the final JavaScript files
*  `styles` - The output location for the final CSS files
*  `images` - The output location for the optimized images

The `build.env` file is not tracked in the repo, however a sample file is provided.

## Tasks
In addition to the base tasks defined, the following compound tasks are available to run from the command line and defined in `gulpfile.js`:

* `styles` - runs the `sass` and `image` tasks for SASS compilation and image optimization.
* `scripts` - runs the `browserify` task.
* `watch` - watches the `css`, `js`, and `img` directories for any file changes, fires appropriate tasks in response, and launches LiveReload
* `default` - runs the `style` and `scripts` task.

Please see the README file in the task folder for further documentation.

## Compiling Styles

SASS files in the `sass` directory within the source files path will be compilied, minified, and written to the specified output directory along with a sourcemap file.

## Compiling Scripts

JS files in the `js` directory within the source files path will be compilied using browserify, minified, and written to the specified output directory along with a sourcemap file.

## Images

Images in the `img` directory within the source files path will be losslessly optimized and output to the specified output directory.  The original input files will be preserved in the `img` directory, but be renamed to `{original-name}.processed.{original-extention}`.  If an already processed image needs to be updated, it can just be added into the `img` directory - the old, aleady processed, version will be removed and replaced.

Additionally there is a `image.revert` task which can be used to rename all "processed" images from within the source image folder.

## Gulpfile

The gulpfile contains the declaration for each task that can be run from the command line or used in other gulp tasks.  The tasks stored in `/gulp/tasks/` are included using `require()` statements for increased readability.  Each task is included and compound tasks are built using these tasks.

## Adding New Tasks
New tasks definitions are added in the 'gulp/tasks' directory.  The task must then be added to `gulpfile.js`.  

The README file in `/gulp/` should be updated to include details of the new task.