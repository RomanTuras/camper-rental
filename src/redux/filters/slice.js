import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    params: {
      location: '',
      equipment: [],
      form: 'panelTruck',
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
