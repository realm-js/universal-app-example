var gulp = require("gulp");
var runSequence = require('run-sequence');
var _ = require('lodash')
var realm = require('realm-js');
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var prettify = require('gulp-jsbeautifier');
var node;

gulp.task('server', function() {
   if (node) node.kill()
   node = spawn('node', ['app.js'], {
      stdio: 'inherit'
   })
   node.on('close', function(code) {
      if (code === 8) {
         gulp.log('Error detected, waiting for changes...');
      }
   });
});

gulp.task('start', function() {
   return runSequence('build', function() {
      runSequence('server')
      return gulp.watch(['src/**/*.js'], function() {
         runSequence('build', 'server')
      });
   });
});

gulp.task("build", function() {
   return realm.transpiler2.universal("src/", "build/");
});

gulp.task("dist", function(done) {
   runSequence('build', 'dist-backend', 'dist-frontend', 'uglify-frontend', done)
});
gulp.task('dist-backend', function() {
   return gulp.src(["build/universal.js", "build/backend.js"])
      .pipe(concat("example.js"))
      .pipe(prettify({
         js: {
            max_preserve_newlines: 1
         }
      }))
      .pipe(gulp.dest("./dist/backend/"))
});
gulp.task('dist-frontend', function() {
   return gulp.src(["build/universal.js", "build/frontend.js"])
      .pipe(concat('example.js'))
      .pipe(gulp.dest("./build"))
      .pipe(gulp.dest("./dist/frontend/"))
});
gulp.task('uglify-frontend', function() {
   return gulp.src("dist/frontend/realm.router.js")
      .pipe(uglify())
      .pipe(rename('example.min.js'))
      .pipe(gulp.dest('./dist/frontend/'));
});
