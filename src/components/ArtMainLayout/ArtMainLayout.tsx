import { IHOC } from "../../custom_types/hoc";
import rootCss from "../../index.module.scss";

import css from "./ArtMainLayout.module.scss";

const className = [css.game, rootCss["margin-top"]].join(" ");

const ArtMainLayout = ({ children }: IHOC): JSX.Element => {
  return <div className={className}>{children}</div>;
};

export default ArtMainLayout;
