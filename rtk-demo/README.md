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

## Steps: [ video 17 - 21]

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

:w 9. Follow the video 17-21, and write the code as needed. Then run `index.js` to see the results  
 `node index.js`
