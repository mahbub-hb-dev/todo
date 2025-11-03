import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({title:'', desc:''});

    const {title, desc} = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((oldTodo)=> {
            return {...oldTodo, [name]: e.target.value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:'',desc:''})
    }

  return (
    <form onSubmit={handleSubmit} className='mb-2 bg-emerald-400 p-2'>

        <div className='mb-1'>
            <label htmlFor="title"> Title : </label>
            <input value={title} onChange={handleChange} type="text" name="title" id="title" className='border rounded-md py-1 px-2 w-full bg-amber-100' />
        </div>

        <div className='py-2'>
            <label htmlFor="desc"> Description : </label> <br />
            <textarea value={desc} onChange={handleChange} name="desc" id="desc" rows={2} className='border rounded-lg w-full p-1 bg-amber-100'></textarea>
        </div>

        <button type='submit' className='border mt-1 w-full text- rounded-xl bg-fuchsia-400 font-bold cursor-pointer hover:bg-fuchsia-500'> Add Todo </button>
    
    </form>
  )
}

export default NewTodo
