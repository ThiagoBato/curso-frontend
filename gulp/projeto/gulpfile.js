const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
const { dest } = require('gulp');

function tarefasCSS(cb) {
    return gulp
        .src(['./node_modules/bootstrap/dist/css/bootstrap.css', './node_modules/@fortawesome/fontawesome-free/css/all.css', './src/vendor/owl/css/owl.css', './src/vendor/jquery-ui/jquery-ui.css', './src/css/**/*.css']) //'./src/vendor/**/*.css'
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' })) //libs.min.css
        .pipe(gulp.dest('./dist/css'));
}
function tarefasJS() {
    return gulp
        .src(['./node_modules/jquery/dist/jquery.js', './node_modules/bootstrap/dist/js/bootstrap.js', './node_modules/@fortawesome/fontawesome-free/js/all.js', './src/vendor/owl/js/owl.js', './src/vendor/jquery-ui/jquery-ui.js', './src/vendor/jquery-mask/jquery.mask.js', './src/js/custom.js']) //'./src/vendor/**/*.js'
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) //libs.min.js
        .pipe(gulp.dest('./dist/js'));
}
function tarefasIMG() {
    return gulp
        .src('./src/img/*')
        .pipe(
            image({
                pngquant: true,
                optipng: false,
                zopflipng: true,
                jpegRecompress: false,
                mozjpeg: true,
                gifsicle: true,
                svgo: true,
                concurrent: 10,
                quiet: true,
            }),
        )
        .pipe(dest('./dist/img'));
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasIMG;
