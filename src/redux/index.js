import { combineReducers, createStore } from "redux";
import loading from "./reducers/loading";
import isLogin from "./reducers/isLogin";
const rootReducer = combineReducers({
  loading,
  isLogin,
});
const store = createStore(rootReducer);
export default store;
