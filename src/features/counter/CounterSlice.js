import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    edit: (state, action) => {
      const newData = [...state.data];
      newData[action.payload.index] = action.payload.data;
      state.data = newData;
    },
    remove: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, edit, remove } = counterSlice.actions;
export default counterSlice.reducer;
