import { Box, Typography } from '@mui/material'
import { TodoItem } from '../TodoItem/TodoItem'
import { useTodosStore } from './../../store/store';

interface Props{
  boxLabel:string,
  itemStatus:string
}

const TodoItemSection = ({boxLabel,itemStatus}:Props) => {
  
  const todos =  useTodosStore(store=>store.todos.filter(todo => todo.status === boxLabel))

  return (
    <Box className="TodoItemStyle">
      <Typography variant='h5'>{boxLabel}</Typography>
        {todos.map(todo=>{
          return <TodoItem key={todo.id} itemStatus={todo.status} title={todo.title}/>
        })}
    </Box>
  )
}

export default TodoItemSection