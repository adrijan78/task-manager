import {  Typography,Divider, Chip, Button } from '@mui/material'
import { useTodosStore } from '../../store/store';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const TodoItem = (props:any) => {

  const {deleteTodos,setDraggedTodo}=useTodosStore()

  
  let chipBgColor="danger";
  switch(props.itemStatus){
    case 'PLANNED':  chipBgColor='#1976d2'; break;
    case 'ONGOING':  chipBgColor='#ed6c02'; break;
    case 'DONE':  chipBgColor='#2e7d32'; break;
    default:break;
  }
  return (
    
    <div className="boxyStyle" draggable onDragStart={()=>{setDraggedTodo(props.id)}} style={{color:'white',backgroundColor:'#7d8587',display:'block',marginTop:'1.5rem'}} >
      <Button onClick={()=>{deleteTodos(props.id)}} className='todoDeleteBtn'><DeleteOutlineIcon sx={{color:'black'}} /></Button>
        <div style={{padding:"1rem"}}>
          
                <Typography variant={'h6'}>{props.title}</Typography>
                <Divider sx={{color:'white', backgroundColor:'white'}}/>
                <Chip label={props.itemStatus} sx={{maxWidth:'100px!important',minWidth:'85px!important',color:'white',marginTop:'1rem',marginLeft:'78%',background:`${chipBgColor}`}}/>

        </div>
      </div>
  )
}
