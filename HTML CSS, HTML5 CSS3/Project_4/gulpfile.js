let gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('scss', function () {
	return gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src'))
});

gulp.task('watch', function () {
	gulp.watch('src/scss/*.scss', ['scss']);
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});