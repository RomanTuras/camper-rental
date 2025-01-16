import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favourites',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const item = Number(action.payload);
      const existingIndex = state.items.indexOf(item);

      if (state.items.length == 0 || existingIndex == -1) {
        return { ...state, items: [...state.items, item] };
      } else {
        return { ...state, items: state.items.filter(favId => favId !== item) };
      }
    },
  },
});

export default slice.reducer;
export const { toggleFavourite } = slice.actions;
