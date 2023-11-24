import { Box, Grid } from '@mui/material'

import TodoItemSection from '../TodoItemSection/TodoItemSection';
import Modal from '../UI/Modal/Modal';


const TodosList = () => {

  return (
    <>
    <Box sx={{position:'absolute',top:'10%', left:'45%'}}>
    <Grid item xs={12} className='flexGridItem'><Modal/></Grid>
    </Box>
    <Grid container sx={{minHeight:'100vh'}}>
      
      <Grid className='flexGridItem' item xs={12} sm={12} md={4} lg={4}>
        <TodoItemSection boxLabel='PLANNED' itemStatus='PLANNED' />
      </Grid>
      <Grid className='flexGridItem' item xs={12} sm={12} md={4} lg={4}>
      <TodoItemSection boxLabel='ONGOING' itemStatus='ONGOING'/>
      </Grid>
      <Grid className='flexGridItem' item xs={12} sm={12} md={4} lg={4}>
      <TodoItemSection boxLabel='DONE'  itemStatus='DONE' />
      </Grid>
    </Grid>
    </>
    
  )
}

export default TodosList