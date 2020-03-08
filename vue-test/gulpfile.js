'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const { src, dest } = require('gulp')

function compileSass (done) {
  src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'))
  done()
}

function watchSass () {
  gulp.watch('src/scss/style.scss', compileSass)
}

exports.compileSass = compileSass
exports.watchSass = watchSass
