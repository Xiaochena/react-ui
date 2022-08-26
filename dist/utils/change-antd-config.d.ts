import React from "react";
import "./react-ui.css";
/** 高阶函数、用于链接 ConfigProvider */
export default function changeAntdConfig<P extends object>(Node: React.FC<P>): React.FC<P>;
