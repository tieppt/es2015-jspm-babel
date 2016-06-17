var connect = require('gulp-connect');
var gulp = require('gulp');
var jspm = require('gulp-jspm');
 
gulp.task('connect', function () {
    return connect.server({
        root: '',
        livereload: true,
        port: 8181
    });
});
 
gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], function(event) {
        gulp.src(event.path)
            .pipe(connect.reload());
    });
});
 
gulp.task('default', ['connect', 'watch']);

gulp.task('compile', function () {
    return gulp.src('src/js/app.js')
        .pipe(jspm({selfExecutingBundle: true}))
        .pipe(gulp.dest('src'));
});