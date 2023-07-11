import React, { useState } from 'react'
import { Todo } from './model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

type Props=  {
    todo:Todo,
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTodo =({todo, todos, setTodos}:Props)=> {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone= (id:Number)=>{
       setTodos(
        todos.map(todo=>
            todo.id ===id ? {...todo, isDone: !todo.isDone} : todo
       )
       )
    }
    const handleDelete= (id:Number)=>{
       setTodos(
        todos.filter(todo=>todo.id !=id)
       )
    }


    const handleSubmit=(e:React.FormEvent, id:number)=>{
            e.preventDefault();

            setTodos(
                todos.map(todo=>(
                    todo.id === id ? {...todo,todo:editTodo}: todo
                ))
            )
            setEdit(false)
    }

  return (
    <form className='singleTodo' onSubmit={(e)=>handleSubmit(e,todo.id)}>

        {
            edit ? (
                <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} placeholder='todeo'/>
            ):(
                todo.isDone ? (
                    <s> {todo.todo}</s>
                ):(
                    <span> {todo.todo}</span>
                )
            )
        }
            


        <span className="edit action" onClick={()=>{
            if(!edit && !todo.isDone){
                setEdit(!edit)
            }
        }}><AiFillEdit/></span>
        <span className="delete action" onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
        <span className="done action" onClick={()=>handleDone(todo.id)} ><MdDone/></span>
    </form>
  )
}

export default SingleTodo