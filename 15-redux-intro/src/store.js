import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

/* store.dispatch(deposit(1000));
console.log(store.getState());
store.dispatch(requestLoan(500, "Buy a car"));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(payLoan(500));
console.log(store.getState());

store.dispatch(createCustomer("John Doe", "123456789", "2023-01-01"));
store.dispatch(deposit(250)); */
// console.log(store.getState());
export default store;
