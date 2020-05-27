const gulp = require('gulp')
const { series, parallel } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoSASS(cb) {
    gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
    
    return cb()
}

function copiarHTML(cb) {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build/html'))
    
    return cb()
}

exports.default = parallel(transformacaoSASS, copiarHTML)