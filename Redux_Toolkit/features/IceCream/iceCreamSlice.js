const createSlice = require("@reduxjs/toolkit").createSlice;

const iceCreamSlice = createSlice({
  name: "IceCream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.IceCreamActions = iceCreamSlice.actions;
