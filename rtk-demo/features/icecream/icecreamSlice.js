import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialIcecreamState = {
  numberOfIcecreams: 20,
};

// icecream slice
const icecreamSlice = createSlice({
  name: "Ice-Cream",
  initialState: initialIcecreamState,
  reducers: {
    ordered: (state, action) => {
      action.payload
        ? (state.numberOfIcecreams -= action.payload)
        : state.numberOfIcecreams--;
    },

    restocked: (state, action) => {
      action.payload
        ? (state.numberOfIcecreams += action.payload)
        : state.numberOfIcecreams++;
    },
  },
});

export { icecreamSlice };
