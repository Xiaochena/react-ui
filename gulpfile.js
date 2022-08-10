const gulp = require("gulp");
const babel = require("gulp-babel");
const rimraf = require("rimraf");
const ts = require("gulp-typescript");

const config = {
  cjs: {
    output: "lib",
    env: "cjs",
  },
  esm: {
    output: "es",
    env: "esm",
  },
  enter: ["src/**/*.{ts,tsx}", "!src/**/demo/**/*"],
};

// 清空输出目录
function cleanFile(cb) {
  rimraf.sync(config.cjs.output);
  rimraf.sync(config.esm.output);
  cb();
}

// 生成类型文件
function declaration() {
  const tsProject = ts.createProject("tsconfig.json", {
    emitDeclarationOnly: true,
  });

  const tsResult = gulp
    .src(config.enter)
    .pipe(tsProject())
    .pipe(gulp.dest(config.esm.output));

  return tsResult.pipe(gulp.dest(config.cjs.output));
}

// 编译
function compileScripts(babelEnv, output) {
  process.env.BABEL_ENV = babelEnv;
  return gulp.src(config.enter).pipe(babel()).pipe(gulp.dest(output));
}

// 编译为 cjs
function compileCJS() {
  const { cjs } = config;
  return compileScripts(cjs.env, cjs.output);
}

// 编译为esm
function compileESM() {
  const { esm } = config;
  return compileScripts(esm.env, esm.output);
}

// 串行执行编译脚本任务（cjs,esm） 避免环境变量影响
const buildScripts = gulp.series(compileCJS, compileESM);

// 先清空目录后 整体并行执行任务 编译、生成类型文件
const build = gulp.parallel(buildScripts, declaration);
const clean = gulp.series(cleanFile);

exports.build = build;
exports.clean = clean;

exports.default = build;
