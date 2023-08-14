import accountReducer from "./features/accounts/accountSlice";
import cutomerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";
//

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: cutomerReducer,
  },
});

export default store;
