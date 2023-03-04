import { useState, useCallback, PointerEvent } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";

import { computeResult } from "../../helpers/computeResult";
import { makeArray } from "../../helpers/makeArray";
import {
  updateCellsState,
  selectCellsPerRow,
} from "../../store/features/cellsState";
import { setNewRoundInProgress } from "../../store/features/newRoundInProgress";
import { selectCellsKey } from "../../store/features/resetCells";
import { RootState } from "../../store/store";

import css from "./CellsContainer.module.scss";

interface ICellsProps {
  cellsPerRow: number;
  cellsArray?: Array<string | null> | null;
}

/**
 * This container provides a way to reset the state of Cells by way of the "key" prop update.
 * This allows to efficiently re-render Cells when user changes the number of cells per row.
 * Surprisingly, it is way faster than setting a "cellsArray" prop on a store and accessing it via redux.
 */
const CellsContainer = (): JSX.Element => {
  const cells_per_row = useSelector(selectCellsPerRow);
  const cells_key = useSelector(selectCellsKey);

  return <Cells cellsPerRow={cells_per_row} key={cells_key + cells_per_row} />;
};

const Cells = ({
  cellsPerRow,
  cellsArray = null,
}: ICellsProps): JSX.Element => {
  const store = useStore();
  const [cells, setCells] = useState<Array<string | null>>(
    cellsArray ? cellsArray : makeArray(cellsPerRow)
  );
  const [is_player_x, setPlayerTurn] = useState(true);
  const [winning_moves, setWinningMoves] = useState<Array<number>>([]);
  const [can_draw, setCanDraw] = useState(false);
  const dispatch = useDispatch();

  const handlePointerMove = (event: PointerEvent) => {
    console.log(event);
  };

  const handleClick = useCallback(function (this: {
    cells: Array<null | string>;
    index: number;
    is_player_x: boolean;
  }) {
    const { linesAreDrawn, countdownIsReached } = store.getState() as RootState;

    if (!linesAreDrawn || countdownIsReached) {
      return;
    }

    const new_cells = [...this.cells];
    new_cells[this.index] = this.is_player_x ? "x" : "o";
    const new_result = computeResult(new_cells, cellsPerRow);

    setWinningMoves(Array.from(new Set([...winning_moves, ...new_result])));
    setCells(new_cells);
    setPlayerTurn(!this.is_player_x);

    dispatch(updateCellsState(new_cells));
    dispatch(setNewRoundInProgress());
  },
  []);

  const setClassName = useCallback(
    (winning_moves: Array<number>, cell: null | string, index: number) => {
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
  } as React.CSSProperties;

  return (
    <div
      style={inline_style}
      className={css.cells}
      onPointerDown={() => setCanDraw(true)}
      onPointerUp={() => setCanDraw(false)}
      onPointerLeave={() => setCanDraw(false)}
      onPointerMove={can_draw ? handlePointerMove : undefined}
    >
      {cells.map((cell, index) => {
        return (
          <div
            className={setClassName(winning_moves, cell, index)}
            key={index.toString()}
            onClick={
              !cell
                ? handleClick.bind({ cells, index, is_player_x })
                : undefined
            }
          >
            {cell}
          </div>
        );
      })}
    </div>
  );
};

export default CellsContainer;
export { Cells };
