import utilsCSS from "../../index.module.scss";

import css from "./Title.module.scss";
interface ITitleProps {
  children: string;
}

const Title = ({ children }: ITitleProps): JSX.Element => {
  return (
    <h1 className={`${css.title} ${utilsCSS["margin-top"]}`}>
      <span className={css["title-text"]}>{children}</span>
    </h1>
  );
};

export default Title;
