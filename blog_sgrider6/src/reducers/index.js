import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReduer from "./usersReducer";

export default combineReducers({
  users: usersReduer,
  posts: postsReducer
});
