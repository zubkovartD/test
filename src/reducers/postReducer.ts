import { Action } from "../actions/actions";
import { ActionType } from "../actions/action-types";

const initialState = {
  post: {}
}

const postReducer = (state: object = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_POST: 
      return {
        ...state, 
        post: action.payload
      }
    case ActionType.UPDATE_POST: 
    return {
      ...state, 
      post: action.payload
    }
    default: 
      return state
  }
}

export default postReducer;