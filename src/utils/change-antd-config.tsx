import React from "react";
import { ConfigProvider } from "antd";
import "./react-ui.css";

const prefixCls = "react-ui";
/** 高阶函数、用于链接 ConfigProvider */
export default function changeAntdConfig<P extends object>(
  Node: React.FC<P>
): React.FC<P> {
  ConfigProvider.config({ prefixCls });

  return (props) => {
    return (
      <ConfigProvider prefixCls={prefixCls}>
        <Node {...props} />
      </ConfigProvider>
    );
  };
}
