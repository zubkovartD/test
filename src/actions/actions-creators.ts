import  {Dispatch} from 'redux'
import { ActionType } from './action-types';

export const createPost = (data: any) => {

    return async (dispatch: Dispatch) => {
      try {
        let createdPost = await fetch('https://bloggy-api.herokuapp.com/posts', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(data)
        });
        let sended = await createdPost.json()
        dispatch({
          type: ActionType.CREATE_POST,
          payload: sended
        })
      } catch (e) {
        console.log(e)
      }
    }
}

export const retrieveAllPosts = () => {
  return async (dispatch: Dispatch) => {
    try {
      let get = await fetch('https://bloggy-api.herokuapp.com/posts')
      let retrieved = await get.json()
      dispatch({
        type: ActionType.GET_ALL_POSTS,
        payload: retrieved
      })
    } catch(e) {
      console.log(e)
    }
  }
}

export const deletePost = (id: any) => {
  return async (dispatch: Dispatch) => {
    try {
      let deletePost = await fetch(`https://bloggy-api.herokuapp.com/posts/${id}`, { method: 'DELETE' })
      dispatch({
        type: ActionType.DELETE_POST,
        payload: deletePost
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const updatePost = (data: any, id:any) => {
  return async (dispatch: Dispatch) => {
    try {
      let putted = await fetch(`https://bloggy-api.herokuapp.com/posts/${id}`, { 
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      })
      let puttedJson = await putted.json()
      dispatch({
        type: ActionType.GET_ALL_POSTS,
        payload: puttedJson
      })
    } catch(e) {
      console.log(e)
    }
  }
}