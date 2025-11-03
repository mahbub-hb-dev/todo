import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [todos,setTodos] = useState([]);

    const handleTodo = (todo) => {
        setTodos((prevTodos)=> {
            return [...prevTodos, {id:uuidv4(), todo}]
        });
    };

    const handleRemoveTodo = (id) => {
        setTodos((prevTodos)=>{
            const filteredTodos = prevTodos.filter((todo)=> todo.id !== id);
            return filteredTodos;
        });
    }

  return (
    <div className='p-4 mt-1 w-full sm:w-[500px] lg:w-[650px] bg-gray-700 mx-auto'>
        <h1 className='text-2xl font-bold text-white text-center bg-fuchsia-500 p-1 mb-2'> Todo App </h1>

        <NewTodo onAddTodo={handleTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home
