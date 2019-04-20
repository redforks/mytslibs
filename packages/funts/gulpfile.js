const { src, dest, parallel, series } = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const gulpClean = require("gulp-clean");

function clean() {
  return src("lib", { read: false, allowEmpty: true }).pipe(gulpClean());
}

function compile(cfg) {
  return () => {
    let proj = ts.createProject("tsconfig.json", {
      removeComments: false,
      ...cfg,
    });
    return src(["src/**/*.ts", "!**/*.test.ts", "!**/*.spec.ts"])
      .pipe(sourcemaps.init())
      .pipe(proj())
      .pipe(sourcemaps.write())
      .pipe(dest(cfg.outDir));
  };
}

let es5 = compile({ outDir: "./lib" });
let es6 = compile({
  outDir: "./lib/es",
  target: "es2016",
  module: "ES6",
  moduleResolution: "Node",
  declaration: false,
});

exports.build = series(clean, parallel(es5, es6));
exports.clean = clean;
