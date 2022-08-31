import { CSSProperties, FC, PropsWithChildren } from "react";
import { Button } from "antd";

import { FooBody, Describe } from "./styled";
import changeAntdConfig from "../utils/change-antd-config";

const Foo: FC<
  PropsWithChildren<{ describe?: string; style?: CSSProperties }>
> = ({ describe, style, children }) => {
  return (
    <FooBody style={style}>
      <div>{children ?? "Hello World"}</div>
      <Describe>{describe}</Describe>
      <Button>Click Me</Button>
    </FooBody>
  );
};

export default changeAntdConfig(Foo);
