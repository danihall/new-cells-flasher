import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCountdownReached,
  selectCountdown,
} from "../../store/features/countdownIsReached";
import { resetCellsKey } from "../../store/features/resetCells";

import css from "./ButtonReset.module.scss";

const ButtonReset = (): JSX.Element => {
  const countdown_is_reached = useSelector(selectCountdown);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setCountdownReached(false));
    dispatch(resetCellsKey());
  }, []);

  return (
    <button
      className={css["button-reset"]}
      disabled={!countdown_is_reached}
      onClick={handleClick}
    >
      reset
    </button>
  );
};

export default ButtonReset;
