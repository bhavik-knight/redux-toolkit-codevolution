import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialCakeState = {
  numberOfCakes: 10,
};

// slice creation
const cakeSlice = createSlice({
  name: "Cake",
  initialState: initialCakeState,
  reducers: {
    ordered: (state, action) => {
      action.payload
        ? (state.numberOfCakes -= action.payload)
        : state.numberOfCakes--;
    },

    restocked: (state, action) => {
      action.payload
        ? (state.numberOfCakes += action.payload)
        : state.numberOfCakes++;
    },
  },
});

export const cakeActions = cakeSlice.actions;
export const cakeReducer = cakeSlice.reducer;
