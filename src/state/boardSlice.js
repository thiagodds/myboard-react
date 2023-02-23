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
            title: 'Task 01',
          }
        ]
      }
    ]
  }
});

export default boardSlice.reducer;