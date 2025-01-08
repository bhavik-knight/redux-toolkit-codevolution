import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
    isLoading: false,
    data: [],
    error: "",
};

// fetchUsers - thunk, takes redux action-type as parameter string, and a callback function that returns a promose
// generates rejected, fulfilled, pending - a result promise can take
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
});

const userSlice = createSlice({
    name: "user",

    initialState: initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.data = [];
        });
    },
});

export default userSlice.reducer;
