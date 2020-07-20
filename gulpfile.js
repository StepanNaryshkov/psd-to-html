const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSycn = require("browser-sync").create();

function style() {
  return (
    gulp
      .src("./scss/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("./css"))
      .pipe(browserSycn.stream())
  );
}


function watch() {
  browserSycn.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSycn.reload);
}

exports.watch = watch;