import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fragment, useState } from 'react';
import { InputLabel, Select,MenuItem } from '@mui/material';
export default function Modal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button color='primary' variant='contained' onClick={handleClickOpen}>
        Add TODOs
      </Button>
      <Dialog sx={{borderRadius:"2rem!important"}} open={open} onClose={handleClose}>
        <DialogTitle> Add TODO:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="TODO title"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField  
          sx={{marginTop:"1.5rem"}}         
            margin="dense"
            multiline
            id="description"
            name="description"
            label="Describe todo here..."
            type="text"
            fullWidth
            variant="outlined"
            rows={4}
          />


  <InputLabel sx={{marginTop:"1.5rem"}}   id="demo-simple-select-label">TODO Status</InputLabel>
  <Select
    fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={"PLANNED"}
    label="TODO status"
  >
    <MenuItem value={"PLANNED"}>PLANNED</MenuItem>
    <MenuItem value={"ONGOING"}>ONGOING</MenuItem>
    <MenuItem value={"DONE"}>DONE</MenuItem>
  </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
