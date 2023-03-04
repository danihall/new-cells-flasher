import { createSlice } from "@reduxjs/toolkit";

interface ICountdownIsReachedState {
  countdownIsReached: boolean;
}

const countdownIsReached = createSlice({
  name: "countdownIsReached",
  initialState: false,
  reducers: {
    setCountdownReached: (state, action) => (state = action.payload),
  },
});

const selectCountdown = (state: ICountdownIsReachedState) =>
  state.countdownIsReached;

export { countdownIsReached, selectCountdown };
export const { setCountdownReached } = countdownIsReached.actions;
export default countdownIsReached.reducer;
