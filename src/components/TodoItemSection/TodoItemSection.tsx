import { Typography } from '@mui/material'
import { TodoItem } from '../TodoItem/TodoItem'
import { useTodosStore } from './../../store/store';
import { useState } from 'react';

interface Props{
  boxLabel:string,
  itemStatus:string
}

const TodoItemSection = ({boxLabel,itemStatus}:Props) => {

  const [drop,setDrop] =useState(false)

  const {setDraggedTodo,draggedTodo,moveTodo} = useTodosStore();
  
  const todos =  useTodosStore(store=>store.todos.filter(todo => todo.status === boxLabel))

  return (
    <div onDragOver={e=>{setDrop(true);e.preventDefault()}} 
    onDragLeave={e=>{
      setDrop(false);
      console.log("Leave drop")
      e.preventDefault()
    }}
    onDrop={()=>{
      setDrop(false)
      moveTodo(draggedTodo,itemStatus)
      setDraggedTodo(-1);
      
    }}
     className={`TodoItemStyle ${ drop===true ? 'drop':''}`}>
      <Typography variant='h5'>{boxLabel}</Typography>
        {todos.map(todo=>{
          return <TodoItem key={todo.id} id={todo.id} itemStatus={todo.status} title={todo.title}/>
        })}
    </div>
  )
}

export default TodoItemSection