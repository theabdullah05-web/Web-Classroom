// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating'
import { useState } from 'react';
function App() {
  let[value,setValue]=useState("")
  return (
    <>
    <h2>Material UI</h2>
    <Button variant="contained" startIcon={<SendIcon />}>Contained</Button>
    <Button variant="contained" color="error" size='small'  startIcon={<DeleteIcon />}>Contained</Button>
    <Typography component="legend">Controlled</Typography>
    <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(value)
        }}
      />
    </>
  )
}

export default App
