# Redux-Demo

ReduxToolKit (RTK)

-   The new apporach and preffered over redux to levelrage tools available at dispoal for ease of devs.
-   It helps avoiding writing a lots of boilderplate code

## We must follow RTK's folder structure to leverage the tools

```bash
├── app
│   └── store.js
├── features
│   ├── cake
│   └── icecream
├── index.js
├── node_modules
│   ├── immer
│   ├── redux
│   ├── @reduxjs
│   ├── redux-thunk
│   └── reselect
├── package.json
├── package-lock.json
└── README.md
```

## Steps: [ video 17 - 21 ]

1. Create a folder named `rtk-demo` and move to it  
   `mkdir rtk-demo && cd rtk-demo`
2. Initialize the node project  
   `npm init`
3. Install the RTK  
   `npm install @reduxjs-toolkit`
4. create index.js in the folder; and write a simple `console.log("RTK-demo");`
5. To run the code  
   `node index.js`

    - Folder Structure Details:
        - To abide by the ES6 syntax, add change `type` to `module` instead of `commonjs` in package.json
        - `index.js` has basic code cosole.log("RTK-demo") - to begin with, which can be tested in step#5 above
        - We must need a single store to contain all the states; this store must be within `app` folder

6. Create a folder `app` within root directory, add a file named `store.js`  
   `mkdir app`  
   `touch app/store.js`

    - For each features (cake, icecream, etc.) we can have a folder containing their slice individually

7. Create a folder `features`; within that create a folder per feature `cake`, `icecream`  
   `mkdir -p features/cake features/icecream`

8. Create `cakeSlice.js` and `icecreamSlice.js` in their individual folder  
   `touch features/cake/cakeSlice.js features/icecream/icecreamSlice.js`

9. Follow the video 17-21, and write the code as needed. Then run `index.js` to see the results  
   `node index.js`

## Steps: [ video 22 ]

1. Middleware - logger, for this install `redux-logger`  
   `npm i redux-logger`
2. In the store, add Middleware (as a sibling of reducer)

    - import the logger this way, because it's not es6 compliant

    ```
    import reduxLogger from "redux-logger";
    const { createLogger } = reduxLogger;
    const logger = createLogger();
    ```

    - then in store, add middleware, RTK has default, so contact logger to that

    ```
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
    ```

3. In `index.js` - subscribe/unsubscibe, remove - console.log  
   `store.subscribe(() => {});`

## Steps: [ video 23 ]

-   `extraReducer` - to peform additional reducer tasks on the _external features_
    i.e.to get an ice-cream free on a cake-order, preferred way using **builder**

1. add `extraReducers` as a subming of `reducers`
2. `extraReducers` value is a function who takes **builder** as an argument
3. In this builder, we can _addCase_ for one or more of the _action creators_ for _external features_

```
extraReducers: (builder) => {
   builder.addCase(cakeActions.ordered, (state) => void state.numberOfIcecreams--)
}
```

## Steps: [ video 24 ]

-   `createAsyncThunk` - a middleware to perform async tasks. i.e. data fetching from external APIs

1. add `axios` to make calls to external APIs  
   `npm i axios`
2. create a new featuer **user**, and add **userSlice.js** file  
   `mkdir -p features/user`  
   `touch features/user/userSlice.js`
3. Similar to other slices, add initialState, and create userSlice

    ```
    const initialState = {
       isLoading: false,
       error: "",
       data: []
    }
    ```

    - userSlice will have only name, intialState for now

4. `createAsynchThunk` - middleware to fetch data

    - Create an action `fetchUsers` just before `userSlice`
    - This will use `createAsyncThunk` function from RTK
    - The 1<sup>st</sup> arugment is action creator `Users/fetchUsers` and
    - The 2<sup>nd</sup> argument is an async function which returns a promise
    - Since it returns a promise, it can have `pending`, `fulfilled` or `rejected` values as an action type of `fetchUsers` action
    - async function will have a call to external API using a get request

5. Update userSlice by adding `extraReducers` to perform additional reducer action

    - Use **builder** approach to perform addtional actions
    - _addCase_ for `pending`, `fulfilled`, `rejected` and based on each action-type, update the previous state

6. Export `userReducer` and `fetchUsers`

7. In the store, add `userReducer` along with others

8. In the `index.js`, dispatch an action `fetchUsers()`
