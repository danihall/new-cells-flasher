import rootCss from "../../index.module.scss";

import css from "./ArtMainLayout.module.scss";

interface IArtMainLayoutProps {
  children: Array<JSX.Element>;
}

const className = [css.game, rootCss["margin-top"]].join(" ");

const ArtMainLayout = ({ children }: IArtMainLayoutProps): JSX.Element => {
  return <div className={className}>{children}</div>;
};

export default ArtMainLayout;
