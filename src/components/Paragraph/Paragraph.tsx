import { ReactNode } from "react";

import css from "./Paragraph.module.scss";

interface IParagraphProps {
  margin_top?: boolean;
  emphasize_first_letter?: boolean;
  children: ReactNode;
}

const Paragraph = ({
  margin_top = true,
  emphasize_first_letter = false,
  children,
}: IParagraphProps): JSX.Element => {
  const className = [
    css.paragraph,
    margin_top ? css["margin-top"] : "",
    emphasize_first_letter ? css["first-letter"] : null,
  ].join(" ");

  return <p className={className}>{children}</p>;
};

export default Paragraph;
