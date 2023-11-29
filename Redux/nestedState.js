const immer = require("immer");
const redux = require("redux");

//! importing immer
const produce = immer.produce;

const STREET_UPDATED = "STREET_UPDATED";
const initialState = {
  name: "Bilal",
  address: {
    city: "Muridke",
    street: 123,
    postalCode: 39000,
  },
};
const update_Street = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // ! This is how we do when we have nested states
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: 456,
      //   },

      // ? We will use immer to simplify the process
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = redux.createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("Initial state: ", store.getState());
});

store.dispatch(update_Street(4567));

unsubscribe();
