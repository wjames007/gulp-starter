const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
  //find css, pass thru sass compiler, where does the compiled css go
  return gulp
    .src(["./src/scss/**/*.scss", "node_modules/bootstrap/scss/bootstrap.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js"
    ])
    .pipe(gulp.dest("./src/js"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./src/scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/js/**/*.js").on("change", browserSync.reload);
}

function defaultTask() {
  // place code for your default task here
  style();
  js();
  watch();
}

exports.default = defaultTask;
//exports.style = style;
//exports.watch = watch;
//exports.js = js;
