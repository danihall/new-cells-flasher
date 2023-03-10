import { ITitleProps } from "../../custom_types/titles";

import css from "./Subtitle.module.scss";

const Subtitle = ({ children }: ITitleProps): JSX.Element => {
  return (
    <h2>
      <span className={css["h2-text"]}>{children}</span>
    </h2>
  );
};

export default Subtitle;
