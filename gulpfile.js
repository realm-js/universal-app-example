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

gulp.task("build", function(done) {
   realm.transpiler2.universal("src/", "build/").then(function() {

      runSequence('prettify', done)
   });
});

gulp.task('prettify', function() {
   return gulp.src(["build/**/*.js"])
      .pipe(prettify({
         js: {
            max_preserve_newlines: 1
         }
      })).pipe(gulp.dest("./build/"))
});
