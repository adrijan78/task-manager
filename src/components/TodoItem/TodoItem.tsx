import { Box, Typography,Divider, Chip } from '@mui/material'

export const TodoItem = (props:any) => {
    let chipBgColor="danger";
  switch(props.itemStatus){
    case 'PLANNED':  chipBgColor='#1976d2'; break;
    case 'ONGOING':  chipBgColor='#ed6c02'; break;
    case 'DONE':  chipBgColor='#2e7d32'; break;
    default:break;
  }
  return (
    <Box className="boxyStyle" sx={{color:'white',padding:"1rem",backgroundColor:'#7d8587',display:'block',marginY:'1.5rem'}}>
            <Typography variant={'h6'}>{props.title}</Typography>
            <Divider sx={{color:'white', backgroundColor:'white'}}/>
            <Chip label={props.itemStatus} sx={{maxWidth:'100px!important',minWidth:'85px!important',color:'white',marginTop:'1rem',marginLeft:'78%',background:`${chipBgColor}`}}/>
        </Box>
  )
}
