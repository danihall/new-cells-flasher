import { useEffect, useRef, useState } from "react";

import { restartAnimation } from "../../helpers/animationHelpers";

import css from "./ToastMessage.module.scss";

interface IToastMessageProps {
  type: "error" | "success";
  text: string;
}

const ToastMessage = ({ type, text }: IToastMessageProps): JSX.Element => {
  const [inline_style, setStyle] = useState({ animationDirection: "normal" });
  const className = `${css.toast} ${css[type]} ${css.animate}`;
  const toast = useRef<HTMLDivElement>(null);
  const pause = useRef(0);

  const handleAnimationEnd = () => {
    toast.current?.removeEventListener("animationend", handleAnimationEnd);

    pause.current = window.setTimeout(() => {
      setStyle({ animationDirection: "reverse" });
      restartAnimation(toast.current);
    }, 1000);
  };

  useEffect(() => {
    window.clearTimeout(pause.current);
    setStyle({ animationDirection: "normal" });
    toast.current?.addEventListener("animationend", handleAnimationEnd);
    restartAnimation(toast.current);

    return () => {
      window.clearTimeout(pause.current);
      toast.current?.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [text]);

  return (
    <div style={inline_style} ref={toast} className={className}>
      {text}
    </div>
  );
};

export default ToastMessage;
