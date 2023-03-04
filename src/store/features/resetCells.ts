import { createSlice } from "@reduxjs/toolkit";

interface ICellsKey {
  cellsKey: number;
}

const cellsKey = createSlice({
  name: "cellsKey",
  initialState: 0,
  reducers: {
    resetCellsKey: (state) => (state += 1),
  },
});

const selectCellsKey = (state: ICellsKey) => state.cellsKey;

export { selectCellsKey };
export const { resetCellsKey } = cellsKey.actions;
export default cellsKey.reducer;
