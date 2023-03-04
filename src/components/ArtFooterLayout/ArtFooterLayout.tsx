import rootCss from "../../index.module.scss";

import css from "./ArtFooterLayout.module.scss";

interface IArtFooterLayoutProps {
  children: Array<JSX.Element>;
}

const className = [css["game-footer"], rootCss["margin-top"]].join(" ");

const ArtFooterLayout = ({ children }: IArtFooterLayoutProps): JSX.Element => {
  return <div className={className}>{children}</div>;
};

export default ArtFooterLayout;
