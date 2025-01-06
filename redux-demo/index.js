import { configureStore, bindActionCreators, combineReducers } from "@reduxjs/toolkit";

// action: activity that happens at cake-shop
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERD = "ICECREAM_ORDERED";
const ICECREAM__RESTOCKED = "ICECREAM_RESTOCKED";

// Action is an object
// Action - has a type - an event/activity to be done at the store
// Action - has a payload - for any additional information
// Dispatch: returns action object
// action createor - orderCake
const orderCake = (quantity = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: quantity,
  };
};

// action creator - restock cake
const restockCake = (quantity = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: quantity,
  };
};

// action creators - orderIcecream, restockIcecream
const orderIcecream = (quantity = 1) => {
  return {
    type: ICECREAM_ORDERD,
    payload: quantity,
  };
};

const restockIcecream = (quantity = 1) => {
  return {
    type: ICECREAM__RESTOCKED,
    payload: quantity,
  };
};

// initital state for the store
const initialCakeState = {
  numberOfCake: 10,
};

const initialIcecreamState = {
  numberOfIcecream: 20,
};

// reducer - is pure function with previous state, action as paramters, and returns new state
// it doesn't change the parameter state itself, but return a new state
const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    // how to update the state when Icecream is ordered
    case ICECREAM_ORDERD:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - action.payload, // quantity is 1 when ordering
      };

    // how to update the state when Icecreams are restored
    case ICECREAM__RESTOCKED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + action.payload, // quantity: <quantity> is given when restocking, default 1
      };

    default:
      return state;
  }
};

// configure a store by passing a parameter - reducer function
// this is because reducer function holds the initial state
// store can only have one reducer
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = configureStore({ reducer: rootReducer });

// log the initial state - access to the state
console.log("Initial state:", store.getState());

// subscribe to the state, which can be used to ubsubscribe as well
// this is the listener; when something tries to change the state, it listens to going execute
const unsubscribe = store.subscribe(() => void console.log("Updated state:", store.getState()));

// dispatch - the action to be peformed to change the state
// alternative way - bind action creatros
const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch);

// then we can dispatch an action by invoking action creators
actions.orderCake();
actions.orderCake(); // initial - 2
actions.restockCake(10); // intitial - 2 + 10
actions.orderCake();
actions.orderCake();
actions.orderCake(); // initial - 2 + 10 - 3 => intial + 5

// do the similar for icecream
actions.orderIcecream(); // initial - 1
actions.restockIcecream(5); // initial - 1 + 5
actions.orderIcecream();
actions.orderIcecream(); // initial - 1 + 5 - 2 => initial + 2

// // dispatch - order the cake
// store.dispatch(orderCake());
// store.dispatch(orderCake()); // initial - 2

// // dispatch - restock 10 cakes
// store.dispatch(restockCake(10)); // initial - 2 + 10

// // dispatch - order 3 cakes
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake()); // initial - 2 + 10 - 3 => initial + 5

// unsubscribe the listener
unsubscribe();
