const redux = require("redux");
const createStore = redux.createStore;

// ! Write the value same as its variable name it is a convention in old redux
const CAKE_ORDERED = "CAKE_ORDERED";

// ! Restocking the cakes or state you know the cake shop example
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// ! Expanding the inventory by IceCream
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// * This is an action
// ! It is dispatched when something has happened in our application

function orderCake(quantity = 1) {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
}

// ! Action to restock the cakes
function restockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
}

// ! Action for IceCream
function IceCreamOrdered(quantity = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: quantity,
  };
}

function restockIceCream(quantity = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: quantity,
  };
}

// ? This is the starting or initial state of the application
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

//! This is a reducer which is responsible how the state changes in the application (previousState,action) => newState

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         // ! If there are more than one properties then it is recommended to make a copy of the state first i.e using spread operator and change only the desired value
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.quantity,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         // ! If there are more than one properties then it is recommended to make a copy of the state first i.e using spread operator and change only the desired value
//         ...state,
//         numOfIceCream: state.numOfIceCream - action.payload,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIceCream: state.numOfIceCream + action.payload,
//       };
//     default:
//       return state;
//   }
// };

// * Reducer for Cake Inventory

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

// ! Making multiple reducers separately

// ! creating store for the application and first time the reducer will return the initial state
// const store = createStore(reducer);

// * Hence the createStore method only accepts a single argument i.e a reducer we use combineReducers method
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  IceCream: IceCreamReducer,
});

const store = createStore(rootReducer);

// ? logging the initial state
console.log("Initial state", store.getState());

// ! subscribing to the store and storing the returned function in a variable which can then be called to unsubscribe from the store
const unsubscribe = store.subscribe(() =>
  console.log("Updated new state", store.getState())
);

// ? To bind all the actions in one and you doesn't have to write dispatch again and again we use bindActionCreators method of redux
const actions = redux.bindActionCreators(
  { orderCake, restockCake, IceCreamOrdered, restockIceCream },
  store.dispatch
);

//* dispatching the actions
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(13));

// ! actions using bindActionCreators
actions.orderCake(6);
actions.restockCake(6);
actions.IceCreamOrdered(3);
actions.restockIceCream(5);

// ! unsubscribing from the store
unsubscribe();
