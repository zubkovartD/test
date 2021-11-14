import {useDispatch, useSelector} from 'react-redux';
import {retrieveAllPosts} from '../../actions/actions-creators';
import {deletePost} from '../../actions/actions-creators';

import React from 'react'

interface RootState {
  posts: any
}

function Allposts() {


  const dispatch = useDispatch();
  const a = useSelector((state:RootState ) => state.posts.posts)

  function getPosts() {
    dispatch(retrieveAllPosts())
  }

  function DeletePost(id: any) {
    console.log(id)
    dispatch(deletePost(id))
  }


  return (
    <div className="border flex-fill w-75 h-100">
      <h5>All posts</h5>
      <button onClick={getPosts} className='btn btn-secondary'>Get all posts</button>
      <p>After you delete a post, click again to 'Get all post' to see posts without deleted one</p>
      <div>
        {a ? a.map((post: any, i: any) => 
          <div key={i} className='border m-4 p-2'>
            <h6>{post.title}</h6>
            <p>{post.body}</p>
            <span>Post id: {post.id}</span>
            <br />
            <button className='btn btn-danger' onClick={(event: React.MouseEvent<HTMLButtonElement>) => DeletePost(post.id)}>Delete post</button>
            <br />
          </div>
        ): 'no posts'}  
      </div>
      
      
    </div>
  )
}

export default Allposts