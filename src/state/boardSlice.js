import { createSlice } from "@reduxjs/toolkit";
import storageUtils from "./localStorageUtils";

const storageState = storageUtils.getStateFromStorage();
const initialState = storageState !== null ? storageState.board.columns : [];
const boardSlice = createSlice({
  name: "board",
  initialState: {
    columns: initialState,
  },
  reducers: {
    addNewCard: (state, action) => {
      state.columns = state.columns.map((column) => {
        if (column.id === action.payload.columnId) {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: action.payload.id,
                title: action.payload.title,
              },
            ],
          };
        }

        return {
          ...column,
        };
      });
    },
    removeEmptyCard: (state, action) => {
      state.columns = state.columns.map((column) => {
        if (column.id === action.payload) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.title !== ""),
          };
        }

        return {
          ...column,
        };
      });
    },
    updateCardTitle: (state, action) => {
      state.columns = state.columns.map((column) => {
        if (column.id === action.payload.columnId) {
          return {
            ...column,
            tasks: column.tasks.map((task) => {
              if (task.id === action.payload.task.id) {
                return { ...task, title: action.payload.task.title };
              }

              return {
                ...task,
              };
            }),
          };
        }

        return {
          ...column,
        };
      });
    },
    addNewColumn: (state, action) => {
      state.columns = [
        ...state.columns,
        {
          id: action.payload.id,
          title: action.payload.title,
          tasks: [],
        },
      ];
    },

    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (x) => x.id !== action.payload.columnId
      );
    },
  },
});

export const {
  addNewCard,
  removeEmptyCard,
  updateCardTitle,
  addNewColumn,
  removeColumn,
} = boardSlice.actions;
export default boardSlice.reducer;
