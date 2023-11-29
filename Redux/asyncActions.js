const redux = require("redux");
const thunk = require("redux-thunk").default;
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

function FetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}
function FetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
}
function FetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(FetchUsersRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const data = response.json();
        data.then((usersData) => {
          const users = usersData.map((user) => [
            user.id,
            user.name,
            user.username,
          ]);
          dispatch(FetchUsersSuccess(users));
        });
      })
      .catch((error) => dispatch(FetchUsersFailure(error.message)));
  };
};

const store = redux.createStore(reducer, redux.applyMiddleware(thunk));

store.dispatch(fetchUsers());

store.subscribe(() => console.log("Initial State", store.getState()));
