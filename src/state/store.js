import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";
import storageUtils from "./localStorageUtils";

const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});

store.subscribe(() => {
  storageUtils.saveStateInStorage(store.getState());
});

export default store;
