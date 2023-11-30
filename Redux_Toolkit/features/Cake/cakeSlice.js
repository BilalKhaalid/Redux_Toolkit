const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 30,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
module.exports = cakeSlice.reducer;
module.exports.CakeActions = cakeSlice.actions;