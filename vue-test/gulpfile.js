'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const { src, dest } = require('gulp')

function compileSass (done) {
  src('src/styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/styles/css'))
  done()
}

function watchSass () {
  gulp.watch('src/styles/style.scss', compileSass)
}

exports.compileSass = compileSass
exports.watchSass = watchSass
