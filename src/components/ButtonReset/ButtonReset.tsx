import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setCountdownReached,
  selectCountdown,
} from "../../store/features/countdownIsReached";
import { resetCellsKey } from "../../store/features/resetCells";
import Button from "../Button/Button";

const ButtonReset = (): JSX.Element => {
  const countdown_is_reached = useSelector(selectCountdown);
  console.log("ButtonReset", countdown_is_reached);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setCountdownReached(false));
    dispatch(resetCellsKey());
  }, []);

  return (
    <Button disabled={!countdown_is_reached} onClick={handleClick}>
      reset
    </Button>
  );
};

export default ButtonReset;
