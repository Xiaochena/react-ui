import gulp from "gulp";
import babel from "gulp-babel";
import rimraf from "rimraf";
// import less from "gulp-less";
// import autoprefixer from "gulp-autoprefixer";
// import cssnano from "gulp-cssnano";

const config = {
  cjs: {
    output: "lib",
    env: "cjs",
  },
  esm: {
    output: "es",
    env: "esm",
  },
  styles: "src/**/*.{less,css}",
  enter: ["src/**/*.{ts,tsx}", "!src/**/demo/**/*"],
};

// 清空输出目录
function cleanFile(cb) {
  rimraf.sync(config.cjs.output);
  rimraf.sync(config.esm.output);
  cb();
}

/**
 * 拷贝less文件
 */
function copyLess() {
  return gulp
    .src(config.styles)
    .pipe(gulp.dest(config.cjs.output))
    .pipe(gulp.dest(config.esm.output));
}

// /**
//  * 生成css文件
//  */
// function less2css() {
//   return (
//     gulp
//       .src(config.styles)
//       .pipe(less()) // 处理less文件
//       // .pipe(autoprefixer()) // 根据browserslistrc增加前缀
//       // .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
//       .pipe(gulp.dest(config.cjs.output))
//       .pipe(gulp.dest(config.esm.output))
//   );
// }

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
const build = gulp.parallel(buildScripts, copyLess);
const clean = gulp.series(cleanFile);

export { build, clean };

export default build;
