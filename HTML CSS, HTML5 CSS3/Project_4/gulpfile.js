
let gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
plumber = require('gulp-plumber'),
concat = require('gulp-concat'),
uglify = require('gulp-uglifyjs');


gulp.task('scss', function () {
return gulp.src('src/scss/*.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('src'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('scripts', function() {
return gulp.src([
	// подключаем библиотеки
	'node_modules/jquery/dist/jquery.min.js',
	'node_modules/bootstrap/dist/js/bootstrap.min.js',
])
.pipe(concat('libs.min.js'))
.pipe(uglify())
.pipe(gulp.dest('src'));
});

gulp.task('browser-sync', function () {
browserSync.init({
	server: {
		baseDir: 'src'
	},
	notify: false
});
});

gulp.task('watch', ['scripts', 'scss', 'browser-sync'], function () {
gulp.watch('src/scss/*.scss', ['scss']);
gulp.watch('src/**/*.html', browserSync.reload);
});