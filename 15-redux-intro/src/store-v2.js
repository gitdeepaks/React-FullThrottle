import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import cutomerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";
//
const rootReducer = combineReducers({
  account: accountReducer,
  customer: cutomerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
