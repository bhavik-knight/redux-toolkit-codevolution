import { configureStore } from "@reduxjs/toolkit";

// activity that happens at cake-shop
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

// Action is an object
// Action - has a type - an event/activity to be done at the store
// Action - has a payload - for any additional information
// Dispatch: returns action object
// action createor - orderCake
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

// action creator - restock cake
const restockCake = (quantity = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
};

// initital state for the store
const initialState = {
  numberOfCake: 10,
};

// reducer - is pure function with previous state, action as paramters, and returns new state
// it doesn't change the parameter state itself, but return a new state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // how to update the state when cake is ordered
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCake: state.numberOfCake - action.payload, // quantity is 1 when ordering
      };

    // how to update the state when cakes are restored
    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload, // quantity: <quantity> is given when restocking, default 1
      };
    default:
      return state;
  }
};

// configure a store by passing a parameter - reducer function
// this is because reducer function holds the initial state
const store = configureStore({ reducer });

// log the initial state - access to the state
console.log("Initial state:", store.getState());

// subscribe to the state, which can be used to ubsubscribe as well
// this is the listener; when something tries to change the state, it listens to going execute
const unsubscribe = store.subscribe(() => console.log("Updated state:", store.getState()));

// dispatch - the action to be peformed to change the state
// dispatch - order the cake
store.dispatch(orderCake());
store.dispatch(orderCake()); // initial - 2

// dispatch - restock 10 cakes
store.dispatch(restockCake(10)); // initial - 2 + 10

// dispatch - order 3 cakes
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake()); // initial - 2 + 10 - 3 => initial + 5

// unsubscribe the listener
unsubscribe();
