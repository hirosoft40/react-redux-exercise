import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import todos from "./todos";

export default combineReducers({ cartReducer, todos });
