const gulp = require('gulp');
const { dest, series } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = require('gulp-image');
//const stripJS = require('gulp-strip-comments');
const stripCSS = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

function tarefasCSS(callback) {
    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './src/vendor/owl/css/owl.css',
        //'./src/vendor/jquery-ui/jquery-ui.css',
        './src/css/**/*.css',
    ])
        .pipe(stripCSS())
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' })) //libs.min.css
        .pipe(gulp.dest('./dist/css'));
    return callback();
}
function tarefasJS(callback) {
    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/@fortawesome/fontawesome-free/js/fontawesome.js',
        './src/vendor/owl/js/owl.js',
        //'./src/vendor/jquery-ui/jquery-ui.js',
        './src/vendor/jquery-mask/jquery.mask.js',
        './src/js/custom.js',
    ]) //'./src/vendor/**/*.js'
        .pipe(
            babel({
                comments: false,
                presets: ['@babel/env'],
            }),
        )
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) //libs.min.js
        .pipe(gulp.dest('./dist/js'));
    return callback();
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

//POC Proof of Concept
function tarefasHTML(callback) {
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'));

    return callback();
}

//Servidor do Gulp
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });
    gulp.watch('./src/**/*').on('change', process); // Faz a otimização quando alterar algo no arquivo de desenvolvimento
    gulp.watch('./src/**/*').on('change', reload);
});

function end(callback) {
    console.log('Tarefas Concluídas');
    return callback();
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.images = tarefasIMG;
exports.htmlmin = tarefasHTML;

const process = series(tarefasHTML, tarefasCSS, tarefasJS, end);

exports.default = process;
