import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

// actions
const FETCH_USER_REQUSTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

// action creators
const fetchUserRequest = () => {
  return { type: FETCH_USER_REQUSTED };
};

const fetchUserSuccess = (users) => {
  return { type: FETCH_USER_SUCCEEDED, payload: users };
};

const fetchUserFailure = (error) => {
  return { type: FETCH_USER_FAILED, payload: error };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUSTED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_SUCCEEDED:
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_USER_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

// async action creator -
// this async function creator can return function instead of objects because of redux-think middleware (now included in RTK)
const fetchUsers = () => {
  return async (dispatch) => {
    // dispatch action creator - fetchUserRequest, sets loading to true
    dispatch(fetchUserRequest());
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = response.data.map((user) => user.name);
      // dispatch action creator - fetchUserSuccess, sets the data
      console.log(`Successfully fetched ${response.data.length} users data`);
      dispatch(fetchUserSuccess(users));
    } catch (error) {
      // dispatch action creator - fetchUserFailure, sets the error message
      console.error(`Error in fetching users data: ${error.message}`);
      dispatch(fetchUserFailure(error.message));
    }
  };
};

// redux store
const store = configureStore({ reducer: reducer });

// initial state
console.log("Initial state:", store.getState());

// subscribe
store.subscribe(() => console.log("Updated state:", store.getState()));

// dispatch the action - creator
store.dispatch(fetchUsers());
