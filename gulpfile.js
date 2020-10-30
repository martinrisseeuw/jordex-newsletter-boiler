const gulp = require('gulp');
const { watch, series } = require('gulp');
const inlineCss = require('gulp-inline-css');
const htmlImport = require('gulp-html-imports')

function build(cb) {
  return gulp.src('./src/*.html')
    .pipe(htmlImport('./src/components/'))
    .pipe(inlineCss({
      preserveMediaQueries: true,
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: true
    }))
    .pipe(gulp.dest('build/'));
  cb();
}

function html(cb) {
  return gulp.src('./src/**/*.html')
    .pipe(htmlImport('./src/components/'))
    .pipe(inlineCss({
      preserveMediaQueries: true,
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false,
      removeLinkTags: true
    }))
    .pipe(gulp.dest('build/'));
  // body omitted
  cb();
}


exports.watch = function() {
  watch(['src/**/*.html', 'src/**/*.css'], series(html));
}

exports.default = build