import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const existingIndex = state.items.indexOf(item);

      if (state.items.length == 0 || existingIndex == -1) {
        state.items.push(item);
      } else {
        state.items.splice(existingIndex, 1);
      }
    },
  },
});

export default slice.reducer;
export const { toggleFavorite } = slice.actions;
