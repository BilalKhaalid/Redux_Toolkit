const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/Cake/cakeSlice");
const IceCreamReducer = require("../features/IceCream/iceCreamSlice");
const reduxLogger = require("redux-logger");
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
module.exports = store;
