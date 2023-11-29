const redux = require("redux");
const createStore = redux.createStore;

// ! Write the value same as its variable name it is a convention in old redux
const CAKE_ORDERED = "CAKE_ORDERED";

// ! Restocking the cakes or state you know the cake shop example
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// * This is an action
// ! It is dispatched when something has happened in our application

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// ! Action to restock the cakes
function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity,
  };
}

// ? This is the starting or initial state of the application
const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

//! This is a reducer which is responsible how the state changes in the application (previousState,action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        // ! If there are more than one properties then it is recommended to make a copy of the state first i.e using spread operator and change only the desired value
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

// ! creating store for the application and first time the reducer will return the initial state
const store = createStore(reducer);

// ? logging the initial state
console.log("Initial state", store.getState());

// ! subscribing to the store and storing the returned function in a variable which can then be called to unsubscribe from the store
const unsubscribe = store.subscribe(() =>
  console.log("Updated new state", store.getState())
);

//* dispatching the actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(13));

// ! unsubscribing from the store
unsubscribe();
