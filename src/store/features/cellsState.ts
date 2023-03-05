import { createSlice } from "@reduxjs/toolkit";

import { MIN_CELLS_PER_ROW } from "../../constants";
import { TCells } from "../../custom_types/cells";
import { makeArray } from "../../helpers/makeArray";

interface ICellsStateState {
  cellsState: {
    cells: TCells;
    cells_per_row: number;
  };
}

const cellsState = createSlice({
  name: "cellsState",
  initialState: {
    cells: makeArray(MIN_CELLS_PER_ROW),
    cells_per_row: MIN_CELLS_PER_ROW,
  },
  reducers: {
    updateCellsState: (state, action) => {
      state.cells = action.payload;
    },
    setCellsPerRow: (state, action) => {
      state.cells = makeArray(action.payload);
      state.cells_per_row = action.payload;
    },
  },
});

const selectCellsState = (state: ICellsStateState) => state.cellsState.cells;
const selectCellsPerRow = (state: ICellsStateState) =>
  state.cellsState.cells_per_row;

export { selectCellsState, selectCellsPerRow };
export const { updateCellsState, setCellsPerRow } = cellsState.actions;
export default cellsState.reducer;
