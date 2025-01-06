import { configureStore } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  name: "Bhavik",
  address: {
    street: "225-B Main St",
    city: "Antigonish",
    province: "Nova Scotia",
    country: "Canada",
    zipcode: "B2G 2C1",
  },
};

// action
const STREET_UPDATED = "STREET_UPDATED";

// action-creator
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return produce(state, (draft) => void (draft.address.street = action.payload)); // use of immer to update immuatable DS
    //   return {
    //     ...state,
    //     address: {
    //       ...state.address,
    //       street: action.payload,
    //     },
    //   };

    default:
      return state;
  }
};

// instantiate the store
const store = configureStore({ reducer: reducer });

// get the initial state
console.log("Initial state:", store.getState());

// subscribe/unsubscribe - the listener keeping tracks of the updates
const unsubscribe = store.subscribe(() => void console.log("Update state:", store.getState()));

// dispatcher
store.dispatch(updateStreet("225A Main St"));
unsubscribe();
