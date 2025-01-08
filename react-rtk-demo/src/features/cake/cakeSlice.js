import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialCakeState = {
    numberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",

    initialState: initialCakeState,

    reducers: {
        ordered: (state, action) => {
            action.payload ? (state.numberOfCakes -= action.payload) : state.numberOfCakes--;
        },

        restocked: (state, action) => {
            action.payload ? (state.numberOfCakes += action.payload) : state.numberOfCakes++;
        },
    },
});

export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;
