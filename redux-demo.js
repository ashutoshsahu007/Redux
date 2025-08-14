const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "INCREMENTBY2") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "DECREMENTBY2") {
    return { counter: state.counter - 2 };
  }
  return state; // Always return state if no match
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(counterSubscriber);

// Example usage
store.dispatch({ type: "increment" }); // +1 → 1
store.dispatch({ type: "INCREMENTBY2" }); // +2 → 3
store.dispatch({ type: "decrement" }); // -1 → 2
store.dispatch({ type: "DECREMENTBY2" }); // -2 → 0
