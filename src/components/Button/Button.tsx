import { ComponentProps, ReactNode } from "react";

import css from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
}

const Button = ({
  children,
  ...props
}: IButtonProps & ComponentProps<"button">): JSX.Element => {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
