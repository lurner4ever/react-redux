const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// cake action creator
function buyCake() {
  // cake action
  return {
    type: BUY_CAKE,
  };
}

// Icecream action creator
function buyIcecream() {
  // Icecream action
  return {
    type: BUY_ICECREAM,
  };
}

// reducers
// cake reducer
const cakeInitialState = {
  noOfCakes: 10,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

// icecream reducer
const icecreamInitialState = {
  noOfIcecreams: 10,
};
const icecreamReducer = (state = icecreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// combine reducers
const rootReducer = combineReducers({
  cakeReducer,
  icecreamReducer,
});

// 1.creating store
const store = createStore(rootReducer);
// 2.getting state
console.log("Initial state", store.getState());
// 4.adding listeners
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
// 3.updating the state via dispatch()
store.dispatch(buyCake()); //updating state by dispatch
store.dispatch(buyCake()); //updating state by dispatch
store.dispatch(buyCake()); //updating state by dispatch
store.dispatch(buyIcecream()); //updating state by dispatch
store.dispatch(buyIcecream()); //updating state by dispatch
store.dispatch(buyIcecream()); //updating state by dispatch

// 4.unsubscribe
unsubscribe();
