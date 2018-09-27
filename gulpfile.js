var gulp=require("gulp");
var less=require("gulp-less");
var cssmin=require("gulp-cssmin");
var concat=require("gulp-concat");
var clean=require("gulp-clean")
var uglify=require("gulp-uglify");
var browserSync = require('browser-sync').create();


gulp.task("hello",function(){
	console.log("hello world");
});

gulp.task("html",function(){
	gulp.src("src/**/*.html")
	.pipe(gulp.dest("dist/"));
});

gulp.task("less",function(){
	gulp.src("src/less/*.less")
	.pipe(less())
	.pipe(gulp.dest("dist/less/"));
});

gulp.task("cssmin",function(){
	gulp.src("src/css/*.css")
	.pipe(concat("all.css"))
	.pipe(cssmin())
	.pipe(gulp.dest("dist/css/"));
});
gulp.task("clean",function(){
	gulp.src("dist/")
	.pipe(clean());
})
gulp.task("js",function(){
	gulp.src("src/js/*.js")//合并js文件
	.pipe(concat("all.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js/"));
});
gulp.task("dist",["html","less","cssmin"]);

gulp.task("watch",function(){
	gulp.watch("src/**/.html",["html"])
	gulp.watch("src/less/*.less",["less"]);
	gulp.watch("src/js/*.js",["js"]);
	borwerSync.init({
		server:{
			baseDir:"./dist"
		},
		port:2018
	})
})