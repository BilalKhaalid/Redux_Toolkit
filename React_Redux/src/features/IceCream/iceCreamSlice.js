import { createSlice } from "@reduxjs/toolkit";
import { ordered as CakeOrdered } from "../Cake/cakeSlice";

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    ordered: (state, action) => {
      if (action.payload) {
        state.numOfIceCreams -= action.payload;
      } else {
        state.numOfIceCreams--;
      }
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  // ! There are two ways to add extraReducers first is okay but second is recommended
  // * This method below is deprecated
  // extraReducers: {
  //   ["cake/ordered"]: (state) => state.numOfIceCreams--,
  // },

  // ! This is the recommended method called builder callback notation
  extraReducers: (builder) => {
    builder.addCase(CakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
