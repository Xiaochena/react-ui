import React from "react";
import { ConfigProvider } from "antd";
import "./chen.css";

/** 高阶函数、用于链接 ConfigProvider */
export default function changeAntdConfig<P extends object>(
  Node: React.FC<P>
): React.FC<P> {
  ConfigProvider.config({ prefixCls: "chen" });

  return (props) => {
    return (
      <ConfigProvider prefixCls="chen">
        <Node {...props} />
      </ConfigProvider>
    );
  };
}
