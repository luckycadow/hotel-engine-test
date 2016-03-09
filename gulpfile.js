const gulp = require('gulp');
const concat = require('gulp-concat');
const ngAnnotate = require('gulp-ng-annotate');
const del = require('del');
const dirs = {
    app: './app/',
    scripts: ['./app/scripts/app.js', './app/scripts/**/*.js', '!./app/scripts/**/*.spec.js']
};

gulp.task('clean', (done) => {
    del(dirs.app + 'bundle.js').then(() => {
        return done();
    });
});

gulp.task('build', ['clean'], () => {
    return gulp.src(dirs.scripts)
        .pipe(ngAnnotate())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(dirs.app));
});

gulp.task('watch', ['build'], () => {
    return gulp.watch(dirs.scripts, ['build']);
});