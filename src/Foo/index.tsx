import { CSSProperties, FC, PropsWithChildren } from "react";

const Foo: FC<
  PropsWithChildren<{ describe?: string; style?: CSSProperties }>
> = ({ describe, style, children }) => {
  return (
    <div style={style}>
      <div>{children ?? "Hello World"}</div>
      <div>{describe}</div>
    </div>
  );
};

export default Foo;
