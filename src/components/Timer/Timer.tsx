import { useRef, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

import {
  restartAnimation,
  pauseAnimation,
} from "../../helpers/animationHelpers";
import { saveLastArt } from "../../helpers/artStorage";
import {
  selectCountdown,
  setCountdownReached,
} from "../../store/features/countdownIsReached";
import { selectLinesAreDrawn } from "../../store/features/linesAreDrawn";
import { selectNewRoundInProgress } from "../../store/features/newRoundInProgress";
import { RootState } from "../../store/store";

import css from "./Timer.module.scss";

const Timer = (): JSX.Element => {
  console.log("Timer");
  const lines_are_drawn = useSelector(selectLinesAreDrawn);
  const new_round_in_progress = useSelector(selectNewRoundInProgress);
  const countdown_is_reached = useSelector(selectCountdown);
  console.log({ lines_are_drawn, new_round_in_progress, countdown_is_reached });

  const store = useStore();
  const dispatch = useDispatch();

  const circle = useRef<SVGCircleElement>(null);
  const className = css.svg + (lines_are_drawn ? "" : ` ${css.hidden}`);

  const handleAnimationEnd = () => {
    const cells = (store.getState() as RootState).cellsState.cells;
    saveLastArt(cells);
    dispatch(setCountdownReached(true));
  };

  useEffect(() => {
    pauseAnimation(circle.current);

    if (lines_are_drawn) {
      circle.current?.addEventListener("animationend", handleAnimationEnd, {
        once: true,
      });
      dispatch(setCountdownReached(false));
      restartAnimation(circle.current);
    }
  }, [new_round_in_progress, lines_are_drawn]);

  return countdown_is_reached ? (
    <p>
      You're out of time! Hit the "Reset" button or select another grid size.
    </p>
  ) : (
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
