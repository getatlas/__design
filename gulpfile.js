/*
 * gulp
 * $ npm install gulp-sass gulp-concat gulp-clean-css gulp-uglify gulp-rename --save-dev
 */

'use strict';

// Load plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-clean-css');
var concatcss = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')

var cssFiles = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'css/atlas.min.css'
];

// Sass
gulp.task('sass', function () {
    return gulp.src('sass/atlas.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
});

// Minify CSS
gulp.task('minifycss', ['sass'], function () {
    return gulp.src('css/atlas.css')
        .pipe(minifycss({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

// Concat CSS
gulp.task('concatcss', ['minifycss'], function() {
    return gulp.src(cssFiles)
        .pipe(concatcss('atlas.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
});

// Default task
gulp.task('default', ['sass', 'minifycss', 'concatcss', 'scripts'], function () {
    gulp.start('sass');
    gulp.start('minifycss');
    gulp.start('concatcss');
    gulp.start('scripts');
});