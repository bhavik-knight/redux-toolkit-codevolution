# Redux-Demo

Vanilla JS + Redux to understand the basic concepts or redux

-   Store, Action, Reducer
-   Store holds the State
-   The state can be updated via "dispatching" an "action"
-   The Reducer perform an action on the previous state and returns a new state

## Steps: [ video 1 - 12 ]

1. Create a folder named `redux-demo" `
   `mkdir redux-demo`
2. Initialize the node project  
   `npm init`
3. Install the RTK  
   `npm install @reduxjs-toolkit`
4. To run the code  
   `node index.js`

## Steps: [ video 13 - Immer, to easily update nested state ]

1. Install `immer` library  
   `npm install immer`
2. To run the code - `nested-state.js`  
   node nested-state.js

-   Notes:
    -   Make sure that produce doesn't return anything if it's modifying the draft.
    -   Use `(draft) => { draftUpdate }` to avoid implicit return when using arrow function.
    -   i.e. don't do this `(draft) =>  draftUpdate`
    -   Or use void before the one-line statement for the update, i.e. `(draft) => void (draftUpdate)`
    -   Similarly: For subscribe, make sure that argument is a function i.e. `() => { ...something... }`
        to avoid erros regarding listener2 is not a function

## Steps: [ video 14 - Middleware - for logging, error-reporting, auth, async func calls for data fetching, etc. ]

1. Install `redux-logger` (a middleware) to keep the logs  
   `npm install redux-logger`
2. To run `index.js`
   `node index.js`

-   Notes: - use `import pkg from "redux-logger";` for import
    -   `const { createLogger } = pkg;`
    -   `const logger = createLogger();`
    -   ```
         const store = {
            reducer: rootReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger),
         };
        ```
    -   remove logs on subscribe

## Steps: [ Video 15, 16 - Middleware - redux-thunk; to do async operation w/ redux]

1. Install axios, redux-thunk. Update redux-thunk is already included in RTK, so if using RTK it's not needed  
   `npm install axios redux-thunk`
2. This middleware allows action creator to return a function instead of an action (object).
   action objects are like `{type: ..., payload: ...}`
3. Since it allows to return a function; we can have side effects;
   Return an async function, which makes a get request to an external API using axios

    ```
    async () => {
         try {
             const response = await axios.get(url);
             console.log(response.data); // success
         } catch (error) {
             console.err(error.message); // failure
         }
     }
    ```

    This function allows a parameter - **dispatch**. So when we make a request, we can dispatch those action creators -
    fetchUserRequest, fetchUserSuccess, fetchUserFailure on apporpriate places

4. Run the code -
   node asyncActions.js
