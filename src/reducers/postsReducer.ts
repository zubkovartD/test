import { Action } from "../actions/actions";
import { ActionType } from "../actions/action-types";

const initialState = {
  posts: []
}

const postsReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_POSTS: 
      return {
        ...state, 
        posts: action.payload
      }
    case ActionType.DELETE_POST: 
      return {
        ...state,
        post: state.posts.filter((p: any) => p !== action.payload)
      }
    default: 
      return state
  }
}

export default postsReducer;