/*eslint-env node*/


/*

npm install browser-sync gulp --save-dev
npm install --save-dev gulp
npm install -g eslint
npm install --save-dev gulp-sass
npm install --save-dev gulp-autoprefixer
npm install --save-dev gulp-eslint
*/
var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify");
//var browserSync = require("browser-sync'").create();
var eslint = require("gulp-eslint");
var concat = require("gulp-concat");  
var rename = require("gulp-rename");  
var uglify = require("gulp-uglify"); 
var uglifycss = require("gulp-uglifycss");

gulp.task("default", ["styles", "lint"], function() {

	gulp.watch("sass/**/*.scss", ["styles"]);
	gulp.watch("js/**/*.js", ["lint"]);
	gulp.watch("js/**/*.js", ["scripts"]);
	
});

gulp.task("styles", function(){
	
	gulp.src("sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 2 versions"]//of every popuplar browsers
		}))
		.pipe(gulp.dest("./css"))
		.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": true
		}))
		.pipe(gulp.dest("./dist/"));
		//.pipe(browserSync.stream());
});

gulp.task("scripts", function() {  
	return gulp.src("js/**/*.js")
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest("./dist"))
        .pipe(rename("scripts.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task("css", function() {  
	return gulp.src("css/**/*.css")
        .pipe(uglify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./dist"));
});

gulp.task("lint", function() {
	return gulp.src("js/**/*.js")
				.pipe(eslint())
				.pipe(eslint.format())
				.pipe(eslint.failOnError());
});


gulp.task("minify", function(){
	gulp.src("dist/**/*.js")
		.pipe(minify({
			ext:{
				min:".js"
			}
		}))
		.pipe(gulp.dest("./min.js"));
});