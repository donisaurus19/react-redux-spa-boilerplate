"use strict";

var path = require("path");
var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var production = process.env.NODE_ENV === "production";

gulp.task("sass", function() {
    return gulp.src("./app/css/styles.scss")
        .pipe(sourcemaps.init())
        .pipe(sass(production ? { outputStyle: "compressed" } : {})
            .on("error", sass.logError))
        // create sourcemap file
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./public/"))
});

// for deployment, Ex. heroku
gulp.task("connect", function() {
  connect.server({
    root: "./public",
    port: process.env.PORT || 3000,
    livereload: false
  });
});

// complete default task before watching
gulp.task("watch", ["default"], function() {
    gulp.watch("./app/css/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
