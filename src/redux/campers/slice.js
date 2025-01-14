import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper, fetchFilteredCampers } from './operations.js';

const slice = createSlice({
  name: 'campers',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchCamper.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchCamper.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchCamper.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchFilteredCampers.pending, state => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchFilteredCampers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchFilteredCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default slice.reducer;
