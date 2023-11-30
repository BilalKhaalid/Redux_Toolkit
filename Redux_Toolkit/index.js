const store = require("./app/store");
const CakeActions = require("./features/Cake/cakeSlice").CakeActions;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.restocked(5));

unsubscribe();
