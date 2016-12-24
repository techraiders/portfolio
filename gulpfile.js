// Gulp.js configuration

// include gulp and plugins
var
	gulp = require('gulp'),
	newer = require('gulp-newer'),
	preprocess = require('gulp-preprocess'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	pkg = require('./package.json');

//file locations
var
	devBuild = ((process.env.NODE_ENV || 'development'.trim().toLowerCase()) !== 'production'),
	source = 'source/',
	dest = 'build/',

html = {
	in: source + '*.html',
	watch: [source + '*.html', source + 'template/**/*'],
	out: dest,
	context: {
		devBuild: devBuild,
		author: pkg.author,
		version: pkg.version
	}
},

	images = {
		in: source + 'img/*.*',
		out: dest + 'img/'
	};

// show build type
console.log(pkg.name + ' ' + pkg.version + ', ' + (devBuild ? 'development' : 'production') + ' build');


// cleans the build folder
gulp.task('clean', function() {
	del([
		dest + '*'
	]);
});

// build HTML files
gulp.task('html', function() {
	return gulp.src(html.in)
		.pipe(preprocess({context: html.context}))
		.pipe(gulp.dest(html.out))
});

// manages images
gulp.task('images', function() {
	return gulp.src(images.in)
		.pipe(newer(images.out))
		.pipe(imagemin())
		.pipe(gulp.dest(images.out));
});


// default task
gulp.task('default', ['html', 'images'], function() {
	//html changes
	gulp.watch(html.watch['html']);
	
	// images changes
	gulp.watch(images.in, ['images']);
});