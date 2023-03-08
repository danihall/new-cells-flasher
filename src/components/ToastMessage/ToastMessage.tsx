import { useEffect } from "react";

import { TOAST_TEXTS } from "../../constants";

import css from "./ToastMessage.module.scss";

interface IToastMessageProps {
  type: "error" | "success";
  text?: string;
}

const ToastMessage = ({
  type,
  text = TOAST_TEXTS.success,
}: IToastMessageProps): JSX.Element => {
  const className = `${css.toast} ${css[type]}`;

  /*
  useEffect(() => {

  }, []);
  */

  return <div className={className}>{text}</div>;
};

export default ToastMessage;
