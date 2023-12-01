import { configureStore } from "@reduxjs/toolkit";
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
import cakeReducer from ("../features/Cake/cakeSlice");
import IceCreamReducer from ("../features/IceCream/iceCreamSlice");
import reduxLogger from ("redux-logger");
const logger = reduxLogger.createLogger();
const usersReducer = require("../features/users/usersSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    IceCream: IceCreamReducer,
    users: usersReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
