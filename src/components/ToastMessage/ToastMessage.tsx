import { useEffect, useRef } from "react";

import { restartAnimation } from "../../helpers/animationHelpers";

import css from "./ToastMessage.module.scss";

interface IToastMessageProps {
  type: "error" | "success";
  text: string;
}

const ToastMessage = ({ type, text }: IToastMessageProps): JSX.Element => {
  const toast = useRef<HTMLDivElement>(null);

  useEffect(() => {
    restartAnimation(toast.current);
  }, [type, text]);

  return (
    <div ref={toast} className={`${css.toast} ${css[type]}`}>
      {text}
    </div>
  );
};

export default ToastMessage;
