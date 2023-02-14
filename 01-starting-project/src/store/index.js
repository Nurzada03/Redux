import { combineReducers, createStore } from "redux";
import {authReduser} from "./auth/authReduser";
import { calculatorReducer } from "./calculator/calculatorReduser";

const rootReduser = combineReducers({
  calculator: calculatorReducer,
  auth: authReduser,
});

export const store = createStore(rootReduser);

store.subscribe(() => {
  console.log("STORE CHANGED", store.getState);
});
