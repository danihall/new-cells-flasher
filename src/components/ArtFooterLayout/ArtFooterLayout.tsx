import { IHOC } from "../../custom_types/hoc";
import rootCss from "../../index.module.scss";

import css from "./ArtFooterLayout.module.scss";

const className = [css["game-footer"], rootCss["margin-top"]].join(" ");

const ArtFooterLayout = ({ children }: IHOC): JSX.Element => {
  return <div className={className}>{children}</div>;
};

export default ArtFooterLayout;
