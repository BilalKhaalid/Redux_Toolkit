// ! Write the value same as its variable name it is a convention in old redux
const CAKE_ORDERED = "CAKE_ORDERED";

// * This is an action
// ! It is dispatched when something has happened in our application

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
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
    default:
      return state;
  }
};
