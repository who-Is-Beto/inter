import { FC, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren<{
    onClick?: () => void;
  }> {}

const Button: FC<ButtonProps> = ({ children, onClick }): JSX.Element => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
