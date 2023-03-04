import { createSlice } from "@reduxjs/toolkit";

interface INewRoundInProgressState {
  newRoundInProgress: number;
}

const newRoundInProgress = createSlice({
  name: "newRoundInProgress",
  initialState: 0,
  reducers: {
    setNewRoundInProgress: (state) => (state += 1),
  },
});

const selectNewRoundInProgress = (state: INewRoundInProgressState) =>
  state.newRoundInProgress;

export { newRoundInProgress, selectNewRoundInProgress };
export const { setNewRoundInProgress } = newRoundInProgress.actions;
export default newRoundInProgress.reducer;
