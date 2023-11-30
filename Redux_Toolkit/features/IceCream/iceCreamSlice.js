const { CakeActions } = require("../Cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCreams -= action.payload;
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
    builder.addCase(CakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.IceCreamActions = iceCreamSlice.actions;
