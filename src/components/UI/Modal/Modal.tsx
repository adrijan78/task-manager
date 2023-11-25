import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { InputLabel, Select,MenuItem } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useTodosStore } from '../../../store/store';
export default function Modal() {
  const [open, setOpen] = useState(false);
  const {addTask} = useTodosStore();
  
  enum TodoStatusString{
    planned = "PLANNED",
    outgoing = "OUTGOING",
    done = 'DONE'
  }

  interface IFormInput{
    title:string,
    description:string,
    status:TodoStatusString
  }


   const {control,register,handleSubmit,reset,formState:{errors,isValid}} = useForm<IFormInput>({
    defaultValues:{
      title:'',
      description:'',
      status:TodoStatusString.planned
    }
   });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmitHandler = (data:any)=>{
    debugger;
    if(isValid){
      addTask(data);
      handleClose();
    }
  }

  return (
    <>
      <Button color='primary' variant='contained' onClick={handleClickOpen}>
        Add TODOs
      </Button>
    <Dialog sx={{borderRadius:"2rem!important"}} open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit((data)=>{onSubmitHandler(data)})}>
        <DialogTitle> Add TODO:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            {...register("title", {required:'This field is required', minLength:{
              value:5,
              message:'Min lenght is 5'
            }})}
            label="TODO title"
            type="text"
            fullWidth
            variant="outlined"
            error={errors.title?.message !== undefined}
            helperText={errors.title?.message}
          />
          <TextField  
          sx={{marginTop:"1.5rem"}}         
            margin="dense"
            multiline
            id="description"
            {...register("description", {required:'This field is required'})}
            label="Describe todo here..."
            type="text"
            fullWidth
            variant="outlined"
            rows={4}
            error={errors.description?.message != undefined}
            helperText={errors.description?.message}
          />


        <InputLabel sx={{marginTop:"1.5rem"}}   id="todoStatus-label">TODO Status</InputLabel>
        <Controller
         name="status"
         rules={{required:'This field is required'}}
         control={control}
         defaultValue={TodoStatusString.planned}
         render={({field})=>(
          <Select
          fullWidth
          {...field}
        >
          <MenuItem value={"PLANNED"}>PLANNED</MenuItem>
          <MenuItem value={"ONGOING"}>ONGOING</MenuItem>
          <MenuItem value={"DONE"}>DONE</MenuItem>
        </Select>
         )}

        />
        

              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit'>Subscribe</Button>
              </DialogActions>
            
      </form>
    </Dialog>
    </>
  );
}
