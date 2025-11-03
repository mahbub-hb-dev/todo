import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
    const {title,desc} = props.todo;
    const {id} = props;

    const handleDelete = () => {
        props.onRemoveTodo(id);
    }

  return (
    <article className='bg-amber-200 rounded-lg p-2 mb-2 flex items-center justify-between'>
        <div>
            <h3 className='text-2xl font-bold'> {title} </h3>
            <p className='font-[500]'> {desc} </p>
        </div>
        <div>
            <button onClick={()=> {handleDelete(id)}} className='text-2xl mr-5 cursor-pointer'> <FaTrashAlt /> </button>
        </div>
    </article>
  )
}

export default Todo
