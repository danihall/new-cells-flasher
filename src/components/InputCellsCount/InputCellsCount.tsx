import { useState, useCallback, ChangeEvent, PointerEvent } from "react";
import { useDispatch, useStore } from "react-redux";

import { MIN_CELLS_PER_ROW, MAX_CELLS_PER_ROW } from "../../constants";
import { setCellsPerRow } from "../../store/features/cellsState";
import { setCountdownReached } from "../../store/features/countdownIsReached";
import { RootState } from "../../store/store";

const InputCellsCount = (): JSX.Element => {
  const [value, setValue] = useState(MIN_CELLS_PER_ROW);
  const store = useStore();
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(+event.target.value),
    []
  );

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLInputElement>) => {
      const {
        cellsState: { cells_per_row },
      } = store.getState() as RootState;
      const new_value = +event.currentTarget.value;

      if (cells_per_row !== new_value) {
        dispatch(setCellsPerRow(new_value));
        dispatch(setCountdownReached(false));
      }
    },
    []
  );

  return (
    <div>
      <input
        id="cells_per_row"
        type="range"
        name="cells_per_row"
        min={MIN_CELLS_PER_ROW}
        max={MAX_CELLS_PER_ROW}
        step="1"
        value={value}
        onChange={handleChange}
        onPointerUp={handlePointerUp}
      />
      <label htmlFor="cells_per_row">cells per row: {value}</label>
    </div>
  );
};

export default InputCellsCount;
