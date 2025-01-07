import { store } from "./app/store.js";
import { cakeActions } from "./features/cake/cakeSlice.js";
import { icecreamActions } from "./features/icecream/icecreamSlice.js";

// initial state
console.log("Initial state:", store.getState());

// subscribe, unsubscribe
const unsubscribe = store.subscribe(() => {});
// console.log("Updated state:", store.getState());

// dispatch actions

// for cake
store.dispatch(cakeActions.ordered(2)); // init - 2
store.dispatch(cakeActions.restocked(10)); // init - 2 + 10
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered()); // init -2 + 10 - 3 => init + 5

// for icecream
store.dispatch(icecreamActions.ordered(3)); // init - 3
store.dispatch(icecreamActions.restocked(5)); // init - 3 + 5
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered()); // init - 3 + 5 - 2 = init
