import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'

import {createPost} from '../../actions/actions-creators'

function Create() {

  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    dispatch(createPost(data))
  };
  
  return (
    <div className="border flex-fill w-75 h-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h5>Create a post</h5>
        <input type="text" placeholder="Title" {...register("title", {required: true})} />
        <br />
        <textarea {...register("body", {required: true})} className='mt-3'/>
        <br />
        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
}

export default Create