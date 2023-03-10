import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCountdownReached,
  selectCountdown,
} from "../../store/features/countdownIsReached";
import { setNewRoundInProgress } from "../../store/features/newRoundInProgress";
import { resetCellsKey } from "../../store/features/resetCells";
import Button from "../Button/Button";

const ButtonReset = ({ resetAllCells = true }): JSX.Element => {
  const countdown_is_reached = useSelector(selectCountdown);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setCountdownReached(false));
    dispatch(setNewRoundInProgress());

    if (resetAllCells) {
      dispatch(resetCellsKey());
    }
  }, []);

  return (
    <Button disabled={!countdown_is_reached} onClick={handleClick}>
      Reset
    </Button>
  );
};

export default ButtonReset;
