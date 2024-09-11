import { createSlice } from "@reduxjs/toolkit";
import { getTracks, getTracksById } from "./operations.js";

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const trackSlise = createSlice({
  name: "track",
  initialState: {
    items: [],
    favorites: [],
    currentItem: null,
    loading: false,
    error: null,
    page: 1,
    totalItems: 0,
    morePages: false,
  },
  reducers: {
    nextPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTracks.pending, handlePending)
      .addCase(getTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = [
          ...state.items,
          ...action.payload.items.filter(
            (newItem) => !state.items.some((existingItem) => existingItem.id === newItem.id)
          ),
        ];
        state.totalItems = action.payload.total;
        state.morePages = state.items.length < state.totalItems;
      })
      .addCase(getTracks.rejected, handleRejected)
      .addCase(getTracksById.pending, handlePending)
      .addCase(getTracksById.fulfilled, (state, action) => { 
        state.loading = false;
        state.error = null;
        state.currentItem = action.payload;
      })
      .addCase(getTracksById.rejected, handleRejected);
  },
});

export const trackReducer = trackSlise.reducer;
export const { nextPage, resetPage } = trackSlise.actions;
