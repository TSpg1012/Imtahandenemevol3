import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  basket: [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  status: "idle",
};

export const fetchData = createAsyncThunk("counter/fetchData", async () => {
  const res = await axios.get("http://localhost:4000/");
  return res.data;
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    salam: (state) => {
      console.log("salam");
    },

    addWishlist: (state, action) => {
      console.log(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { salam, addWishlist } = counterSlice.actions;

export default counterSlice.reducer;
