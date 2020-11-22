const redux = require("redux");

const BUY_CAKE = "BUY_CAKE";
const createStore = redux.createStore;

// action creator
function buyCake() {
  // action
  return {
    type: BUY_CAKE,
    info: "hello Redux",
  };
}

// reducer
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// 1.creating store
const store = createStore(reducer);
// 2.getting state
console.log("Initial state", store.getState());
// 4.adding listeners
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
// 3.updating the state via dispatch()
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// 4.unsubscribe
unsubscribe();
