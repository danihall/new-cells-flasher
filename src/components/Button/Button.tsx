import { ComponentProps } from "react";

import { IHOC } from "../../custom_types/hoc";

import css from "./Button.module.scss";

const Button = ({
  children,
  ...props
}: IHOC & ComponentProps<"button">): JSX.Element => {
  return (
    <button className={css.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
