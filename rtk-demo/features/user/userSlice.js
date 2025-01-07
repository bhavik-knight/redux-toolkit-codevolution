import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
    isLoading: false,
    error: "",
    data: [],
};

// fetchUsers async-think: Generate pending, fulfilled, rejected action type (Promise can take one of those form)
export const fetchUsers = createAsyncThunk("User/fetchUsers", async () => {
    try {
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        return reponse.data.map((user) => user.name);
    } catch (error) {
        return error.message;
    }
});

// user slice
const userSlice = createSlice({
    name: "User",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            (state.isLoading = false), (state.data = action.payload), (state.error = "");
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            (state.isLoading = false), (state.data = []), (state.error = action.error.message);
        });
    },
});

// export userReducer
export const userReducer = userSlice.reducer;
