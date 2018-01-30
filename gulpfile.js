const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", () => {
  return gulp
    .src("./assets/styles/styles.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError),
    )
    .pipe(
      autoprefixer({
        browsers: "last 3 versions",
      }),
    )
    .pipe(gulp.dest("./public/"));
});

gulp.task("sass:watch", () => {
  gulp.watch("./assets/styles/**/*", ["sass"]);
});
