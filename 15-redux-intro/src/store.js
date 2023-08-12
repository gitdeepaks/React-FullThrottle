import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import cutomerReducer from "./features/customers/customerSlice";

//
const rootReducer = combineReducers({
  account: accountReducer,
  customer: cutomerReducer,
});
const store = createStore(rootReducer);

export default store;
