import { configureStore } from "@reduxjs/toolkit";

import cellsStateReducer from "./features/cellsState";
import countdownIsReachedReducer from "./features/countdownIsReached";
import roundReducer from "./features/linesAreDrawn";
import newRoundInProgressReducer from "./features/newRoundInProgress";
import cellsKeysReducer from "./features/resetCells";

const store = configureStore({
  reducer: {
    linesAreDrawn: roundReducer,
    newRoundInProgress: newRoundInProgressReducer,
    countdownIsReached: countdownIsReachedReducer,
    cellsState: cellsStateReducer,
    cellsKey: cellsKeysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
