import { CSSProperties, FC, PropsWithChildren } from "react";
import { FooBody } from "./styled";

const Foo: FC<
  PropsWithChildren<{ describe?: string; style?: CSSProperties }>
> = ({ describe, style, children }) => {
  return (
    <FooBody style={style}>
      <div>{children ?? "Hello World"}</div>
      <div>{describe}</div>
    </FooBody>
  );
};

export default Foo;
