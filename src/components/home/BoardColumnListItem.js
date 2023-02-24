import { ListItem, ListItemText, TextField } from "@mui/material";
import { useDispatch } from 'react-redux'
import { removeEmptyCard } from "../../state/boardSlice";
import * as React from 'react';

const BoardColumnListItem = ({ task, columnId }) => {
  const dispatch = useDispatch();

  return (
    <ListItem sx={{ bgcolor: '#FFFFFF', mt: 1 }}>
      <ListItemText 
        primary={ task.title } 
        secondary={ task.title ? <></> : <TextField label="Title" variant="outlined" autoFocus onBlur={() => dispatch(removeEmptyCard(columnId))}/> }  
      />
    </ListItem>
  )
};

export default BoardColumnListItem;