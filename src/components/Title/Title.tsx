import { ITitleProps } from "../../custom_types/titles";
import utilsCSS from "../../index.module.scss";

import css from "./Title.module.scss";

const Title = ({ children }: ITitleProps): JSX.Element => {
  return (
    <h1 className={utilsCSS["margin-top"]}>
      <span className={css["h1-text"]}>{children}</span>
    </h1>
  );
};

export default Title;
