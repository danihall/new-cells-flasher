import { createSlice } from "@reduxjs/toolkit";

interface ILinesAreDrawnState {
  linesAreDrawn: boolean;
}

const linesAreDrawn = createSlice({
  name: "linesAreDrawn",
  initialState: false,
  reducers: {
    drawingIsDone: (state, action) => (state = action.payload),
  },
});

const selectLinesAreDrawn = (state: ILinesAreDrawnState) => state.linesAreDrawn;

export { linesAreDrawn, selectLinesAreDrawn };
export const { drawingIsDone } = linesAreDrawn.actions;
export default linesAreDrawn.reducer;
