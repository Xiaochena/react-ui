import { defineConfig } from "dumi";

export default defineConfig({
  title: "react-ui", // 站点名称
  mode: "site",
  outputPath: "doc-site", // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  // alias: {
  //   "react-ui/es/*": "/src/**/*",
  //   // "react-ui/es/Foo": "/src/Foo/index",
  // },
  // extraBabelPlugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "react-ui",
  //       camel2DashComponentName: false,
  //       libraryDirectory: "/es",
  //     },
  //   ],
  // ],
});
