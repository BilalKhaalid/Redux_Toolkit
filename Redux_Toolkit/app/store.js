const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/Cake/cakeSlice");
const IceCreamReducer = require("../features/IceCream/iceCreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    IceCream: IceCreamReducer,
  },
});
module.exports = store;
