let gulp = require('gulp');
let sass = require('gulp-sass');

function convertSass(){
	gulp.src('./sass/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css/'))
}

gulp.task('default', convertSass);