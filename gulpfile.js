//gulpfile.js
 
// プラグインの読み込み定義
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
 
// Sassコンパイルタスクの定義
gulp.task('sass',function(){
    console.log('compiling...'); // コンパイルが走ったか確認するためのログ
    return gulp.src('scss/**/*.scss', { allowEmpty: true }) // scssファイルを入れるディレクトリを指定
    .pipe(sassGlob()) // Sassの@importにおけるglob記法を有効にする
    .pipe(sass({outputStyle: 'expanded'})) // 一行に圧縮させないための記述
    .pipe(gulp.dest('./css')); // css出力先フォルダ
})
 
// 監視タスクの定義
gulp.task('sass:watch', function(){
    // './scss/**/*.scss'に該当するファイルに更新があったら、task 'sass'を実行する
    gulp.watch('./scss/**/*.scss', gulp.task('sass'));
});
