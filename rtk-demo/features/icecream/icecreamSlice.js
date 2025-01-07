import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice.js";

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
            action.payload ? (state.numberOfIcecreams -= action.payload) : state.numberOfIcecreams--;
        },

        restocked: (state, action) => {
            action.payload ? (state.numberOfIcecreams += action.payload) : state.numberOfIcecreams++;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => void state.numberOfIcecreams--);
    },
});

export const icecreamActions = icecreamSlice.actions;
export const icecreamReducer = icecreamSlice.reducer;
