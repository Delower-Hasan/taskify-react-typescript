import React from 'react'
import { Todo } from './model'
import SingleTodo from './SingleTodo'

type Props = {
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> =({todos, setTodos})=> {

  return (
     <>
        {todos.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
     </>
  )
}

export default TodoList