import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'filter',
  initialState: {
    params: {},
  },
  reducers: {
    changeFilter: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;