import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

// initial state
const initialIcecreamState = {
    numberOfIcecreams: 20,
};

// ice cream slice
const icecreamSlice = createSlice({
    name: "icecream",

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
        builder.addCase(cakeOrdered, (state) => void state.numberOfIcecreams--);
    },
});

export const { ordered, restocked } = icecreamSlice.actions;
export default icecreamSlice.reducer;
