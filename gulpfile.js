/*eslint-env node*/


/*

npm install --save-dev gulp
npm install -g eslint
npm install --save-dev gulp-sass
npm install --save-dev gulp-autoprefixer
npm install browser-sync gulp --save-dev
npm install --save-dev gulp-eslint
*/
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
//var browserSync = require("browser-sync'").create();
var eslint = require("gulp-eslint");

gulp.task("default", ["styles", "lint"], function() {
	// browserSync.init({
 //        server: {
	// 		baseDir: "./"
 //        }
	// });
	console.log("hello gulp");
	gulp.watch("sass/**/*.scss", ["styles"]);
	gulp.watch("js/**/*.js", ["lint"]);
	//gulp.watch("./*.html").on("change", browserSync.reload);
});

gulp.task("styles", function(){
	console.log("style run");
	gulp.src("sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"]//of every popuplar browsers
		}))
		.pipe(gulp.dest("./css"));
		//.pipe(browserSync.stream());
});

gulp.task("lint", function() {
	return gulp.src("js/**/*.js")
				.pipe(eslint())
				.pipe(eslint.format())
				.pipe(eslint.failOnError());
});
