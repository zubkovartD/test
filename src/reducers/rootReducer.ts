import { combineReducers } from "redux";
import postReducer from "./postReducer";
import postsReducer from './postsReducer'

export const rootReducer = combineReducers({
  post: postReducer,
  posts: postsReducer
});