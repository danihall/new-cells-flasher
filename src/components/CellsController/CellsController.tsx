import {
  useState,
  useCallback,
  MouseEvent,
  PointerEvent,
  CSSProperties,
} from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

import { TCells } from "../../custom_types/cells";
import { computeResult } from "../../helpers/computeResult";
import { makeArray } from "../../helpers/makeArray";
import {
  updateCellsState,
  selectCellsPerRow,
} from "../../store/features/cellsState";
import { setNewRoundInProgress } from "../../store/features/newRoundInProgress";
import { selectCellsKey } from "../../store/features/resetCells";
import { RootState } from "../../store/store";

import css from "./CellsController.module.scss";

interface ICellsProps {
  cellsPerRow: number;
  forceCellsArray?: TCells | null;
}

type TWinningMoves = Array<number>;

/**
 * This container provides a way to reset the state of Cells by way of the "key" prop update.
 * This allows to efficiently re-render Cells when user changes the number of cells per row.
 * Surprisingly, it is way faster than setting a "forceCellsArray" prop on a store and accessing it via redux.
 */
const CellsController = (): JSX.Element => {
  const cells_per_row = useSelector(selectCellsPerRow);
  const cells_key = useSelector(selectCellsKey);

  return <Cells cellsPerRow={cells_per_row} key={cells_key + cells_per_row} />;
};

const Cells = ({
  cellsPerRow,
  forceCellsArray = null,
}: ICellsProps): JSX.Element => {
  const store = useStore();
  const [cells, setCells] = useState<TCells>(
    forceCellsArray ? forceCellsArray : makeArray(cellsPerRow)
  );
  const [is_player_x, setPlayerTurn] = useState(true);
  const [winning_moves, setWinningMoves] = useState<TWinningMoves>(
    forceCellsArray
      ? Array.from(new Set(computeResult(forceCellsArray, cellsPerRow)))
      : []
  );
  const [can_draw, setCanDraw] = useState(false);
  const should_add_events = !forceCellsArray;

  const dispatch = useDispatch();

  const handlePointerEvent = useCallback(
    (index: number) => () => {
      const { linesAreDrawn, countdownIsReached } =
        store.getState() as RootState;

      if (!linesAreDrawn || countdownIsReached || cells[index]) {
        return;
      }

      //const index = Number((event.target as HTMLElement).dataset.key);
      const new_cells = [...cells];
      new_cells[index] = is_player_x ? "x" : "o";
      const new_result = computeResult(new_cells, cellsPerRow);

      setWinningMoves(Array.from(new Set([...winning_moves, ...new_result])));
      setCells(new_cells);
      setPlayerTurn(!is_player_x);

      dispatch(updateCellsState(new_cells));
      dispatch(setNewRoundInProgress());
    },
    [cells]
  );

  const setClassName = useCallback(
    (winning_moves: TWinningMoves, cell: null | string, index: number) => {
      if (cell) {
        const cell_class: string = css[`player-${cell}`];
        const winner_class: string =
          winning_moves.indexOf(index) >= 0 ? css["is--winner-move"] : "";

        return [cell_class, winner_class].join(" ");
      }
    },
    []
  );

  const inline_style = {
    "--cells-per-row": cellsPerRow,
  } as CSSProperties;

  return (
    <div
      {...{
        style: inline_style,
        className: css.cells,
        ...(should_add_events && {
          onPointerDown: () => setCanDraw(true),
          onPointerUp: () => setCanDraw(false),
          onPointerLeave: () => setCanDraw(false),
        }),
      }}
    >
      {cells.map((cell, index) => {
        return (
          <div
            {...{
              className: setClassName(winning_moves, cell, index),
              key: index.toString(),
              ...(should_add_events && {
                onPointerMove: can_draw ? handlePointerEvent(index) : undefined,
                onClick: handlePointerEvent(index),
              }),
            }}
          >
            {cell}
          </div>
        );
      })}
    </div>
  );
};

export default CellsController;
export { Cells };
