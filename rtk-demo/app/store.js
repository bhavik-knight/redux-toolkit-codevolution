import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cakeSlice.js";
import { icecreamReducer } from "../features/icecream/icecreamSlice.js";
import { userReducer } from "../features/user/userSlice.js";
import reduxLogger from "redux-logger";

// logger
const { createLogger } = reduxLogger;
const logger = createLogger();

// configure single-store for RTK
const store = configureStore({
    reducer: {
        cakeReducer,
        icecreamReducer,
        userReducer,
    },

    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export { store };
