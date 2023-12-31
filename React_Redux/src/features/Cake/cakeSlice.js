import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 30,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (action.payload) {
        state.numOfCakes -= action.payload;
      } else {
        state.numOfCakes--;
      }
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
