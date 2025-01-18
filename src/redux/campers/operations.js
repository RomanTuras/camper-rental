import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCamper = createAsyncThunk(
  'campers/fetchCamper',
  async (id, ThunkAPI) => {
    try {
      const response = await axios.get(`campers/${id}`);
      return response.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk(
  'campers/fetchFilteredCampers',
  async (params, ThunkAPI) => {
    try {
      const response = await axios.get(`campers?${params}`);
      return response.data;
    } catch (e) {
      return ThunkAPI.rejectWithValue(e);
    }
  }
);
