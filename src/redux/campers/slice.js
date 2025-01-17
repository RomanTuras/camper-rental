import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchFilteredCampers } from './operations.js';

const slice = createSlice({
  name: 'campers',
  initialState: {
    data: {
      items: [],
      item: {},
      total: 0,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    clearCampers: state => {
      state.data.items = [];
      state.data.total = 0;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCamper.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchCamper.fulfilled, (state, action) => {
      state.data.item = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchCamper.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchFilteredCampers.pending, state => {
      state.data.item = {},
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchFilteredCampers.fulfilled, (state, action) => {
      if (action.meta.arg.includes('&page=1')) {
        state.data.items = action.payload.items;
      } else {
        state.data.items.push(...action.payload.items);
      }
      state.data.total = action.payload.total;

      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchFilteredCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const {clearCampers} = slice.actions;

export default slice.reducer;
