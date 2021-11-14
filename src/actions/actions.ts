import {ActionType} from './action-types'

interface ICreatePost {
  type: ActionType.CREATE_POST,
  payload: {}
};
interface IRetrievePost {
  type: ActionType.RETRIEVE_POST,
  payload: []
};
interface IUpdatePost {
  type: ActionType.UPDATE_POST, 
  payload: {}
};
interface IDeletePost {
  type: ActionType.DELETE_POST,
  payload: {}
}
interface IGetAllPosts {
  type: ActionType.GET_ALL_POSTS,
  payload: []
}
interface ICreateComment {
  type: ActionType.CREATE_COMMENT,
  payload: string
}

export type Action = ICreatePost | IRetrievePost | IUpdatePost | IDeletePost | IGetAllPosts | ICreateComment;

