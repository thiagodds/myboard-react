import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    columns: [],
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
            tasks: column.tasks.filter((task) => task.id !== 0),
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

export const { addNewCard, removeEmptyCard, addNewColumn, removeColumn } =
  boardSlice.actions;
export default boardSlice.reducer;
