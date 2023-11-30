const store = require("./app/store");
const CakeActions = require("./features/Cake/cakeSlice").CakeActions;
const IceCreamActions =
  require("./features/IceCream/iceCreamSlice").IceCreamActions;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.ordered());
store.dispatch(CakeActions.restocked(5));

store.dispatch(IceCreamActions.ordered());
store.dispatch(IceCreamActions.ordered());
store.dispatch(IceCreamActions.restocked(6));

unsubscribe();
