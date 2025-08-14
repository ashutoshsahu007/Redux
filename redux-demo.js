const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state; // Always return state if action type doesn't match
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);

// Increase counter by 5 (dispatch increment 5 times)
for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "increment" });
}

// Decrease counter by 1
store.dispatch({ type: "decrement" });
