import { applyMiddleware, combineReducers, createStore } from "redux";
import { accountReducer } from "./features/accounts/accountSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import customerReducer, {
  createCustomer,
} from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

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
