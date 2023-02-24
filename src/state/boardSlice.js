import { createSlice } from '@reduxjs/toolkit'

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    columns: [
      {
        id: 1,
        title: 'Sample',
        tasks: [
          {
            id: 1,
            title: 'Task 01',
          },
          {
            id: 2,
            title: 'Task 02',
          }
        ]
      }
    ]
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
                title: action.payload.title
              }
            ]
          }
        }

        return {
          ...column
        }
      });
    },
    removeEmptyCard: (state, action) => {
      state.columns = state.columns.map((column) => {
        if (column.id === action.payload) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== 0)
          }
        }

        return {
          ...column
        }
      });
    }   
  }
});

export const { addNewCard, removeEmptyCard } = boardSlice.actions;
export default boardSlice.reducer;