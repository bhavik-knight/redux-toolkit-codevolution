import { configureStore } from "@reduxjs/toolkit";
import { cakeSlice } from "../features/cake/cakeSlice.js";
import { icecreamSlice } from "../features/icecream/icecreamSlice.js";

const cakeReducer = cakeSlice.reducer;
const icecreamReducer = icecreamSlice.reducer;

// configure single-store for RTK
const store = configureStore({
  reducer: {
    cakeReducer,
    icecreamReducer,
  },
});

export { store };
