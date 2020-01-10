import { createStore } from "redux";

import rootReducer from "../reducers/index";
console.log('in store.')

const store = createStore(rootReducer);

export default store;
