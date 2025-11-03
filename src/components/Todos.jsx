import Todo from './Todo'

const Todos = (props) => {
  return (
    <section className='h-[330px] overflow-auto'>
        {props.todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />)}
    </section>
  )
}

export default Todos
