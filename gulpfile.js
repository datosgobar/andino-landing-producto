let gulp = require('gulp')
let sass = require('gulp-sass')
let minify = require('gulp-clean-css')
let browserSync = require('browser-sync').create()
let imagemin = require('gulp-imagemin')
const autoprefixer = require('gulp-autoprefixer')
var htmlmin = require('gulp-htmlmin')

// inicializa servidor web
gulp.task('serve', () => {
  browserSync.init({
    server: './',
  })
  // gulp.watch("sass/**/*.sass", ['sass'])  // guarda sass como css
  // gulp.watch("./app/js/*.js").on('change', browserSync.reload)  // recarga cuando guarda js
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./style/*.css').on('change', browserSync.reload) // minifica html
})

// compila sass a css
gulp.task('sass', () => {
  return gulp
    .src('sass/**/*.sass')
    .pipe(sass())
    .pipe(minify())
    .pipe(
      autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false,
      })
    )
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream())
})

gulp.task('optimize', () => {
  gulp
    .src('./style/*')
    .pipe(imagemin())
    .pipe(gulp.dest('app/img'))
})

gulp.task('minifyHTML', function() {
  return gulp
    .src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('app'))
})
