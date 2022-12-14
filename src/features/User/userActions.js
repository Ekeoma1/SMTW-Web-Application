import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async ({ email, phone, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // make request to backend
      await axios.post(
        "/api/user/register",
        { email, phone, password },
        config
      );
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
