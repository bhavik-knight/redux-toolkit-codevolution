# Redux-Demo

Vanilla JS + Redux to understand the basic concepts or redux

- Store, Action, Reducer
- Store holds the State
- The state can be updated via "dispatching" an "action"
- The Reducer perform an action on the previous state and returns a new state

## Steps: [video 1 - 12]

    1. Create a folder named "redux-demo"
    	mkdir redux-demo
    2. Initialize the node project
    	npm init
    3. Install the RTK
    	npm install @reduxjs-toolkit
    4. To run the code
    	npm index.js

## Steps: [video 13 - Immer, to easily update nested state]

    1. Install immer library
        npm install immer
    2. To run the code - `nested-state.js`
        node nested-state.js
    - Notes:
        - Make sure that produce doesn't return anything if it's modifying the draft.
        - Use `(draft) => { draftUpdate }` to avoid implicit return when using arrow function.
        - i.e. don't do this `(draft) =>  draftUpdate`
        - Or use void before the one-line statement for the update, i.e. `(draft) => void (draftUpdate)`
        - Similarly: For subscribe, make sure that argument is a function i.e. `() => { ...something... }` to avoid erros regarding listener2 is not a function
