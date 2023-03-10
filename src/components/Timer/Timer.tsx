import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSubmit } from "react-router-dom";

import { LAST_ART_NAME } from "../../constants";
import {
  restartAnimation,
  pauseAnimation,
} from "../../helpers/animationHelpers";
import { setCountdownReached } from "../../store/features/countdownIsReached";
import { selectLinesAreDrawn } from "../../store/features/linesAreDrawn";
import { selectNewRoundInProgress } from "../../store/features/newRoundInProgress";

import css from "./Timer.module.scss";

const Timer = (): JSX.Element => {
  const lines_are_drawn = useSelector(selectLinesAreDrawn);
  const new_round_in_progress = useSelector(selectNewRoundInProgress);

  const dispatch = useDispatch();
  const submit = useSubmit();

  const circle = useRef<SVGCircleElement>(null);
  const className = css.svg + (lines_are_drawn ? "" : ` ${css.hidden}`);

  const handleAnimationEnd = () => {
    const form_data = new FormData();
    form_data.append(LAST_ART_NAME, "");

    submit(form_data, { method: "post" });
    dispatch(setCountdownReached(true));
  };

  useEffect(() => {
    pauseAnimation(circle.current);

    if (lines_are_drawn) {
      circle.current?.addEventListener("animationend", handleAnimationEnd);
      dispatch(setCountdownReached(false));
      restartAnimation(circle.current);
    }

    return () =>
      circle.current?.removeEventListener("animationend", handleAnimationEnd);
  }, [new_round_in_progress, lines_are_drawn]);

  return (
    <svg
      className={className}
      width="60px"
      height="60px"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        ref={circle}
        cx="30"
        cy="30"
        r="28"
        pathLength="1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="4px"
        strokeDasharray="1"
        strokeDashoffset="1"
        fill="none"
      />
    </svg>
  );
};

export default Timer;
