const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/Cake/cakeSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});
module.exports = store;
