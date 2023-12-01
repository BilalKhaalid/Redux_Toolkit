const store = require("./app/store");
const CakeActions = require("./features/Cake/cakeSlice").CakeActions;
const IceCreamActions =
  require("./features/IceCream/iceCreamSlice").IceCreamActions;
const fetchUsers = require("./features/users/usersSlice").fetchUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});

// store.dispatch(fetchUsers());

store
  .dispatch(fetchUsers())
  .then(() => {
    console.log("Updated State", store.getState());
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

// store.dispatch(CakeActions.ordered(3));
// store.dispatch(CakeActions.restocked(6));

// store.dispatch(IceCreamActions.ordered(3));
// store.dispatch(IceCreamActions.restocked(6));

unsubscribe();
