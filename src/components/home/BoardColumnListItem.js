import { ListItem, ListItemText, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeEmptyCard, updateCardTitle } from "../../state/boardSlice";
import React, { useState } from "react";

const BoardColumnListItem = ({ task, columnId }) => {
  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState(task);
  const [inputState, setInputState] = useState(true);

  const handleTitleChange = (event) => {
    setTaskState({ ...taskState, title: event.target.value });
  };

  return (
    <ListItem sx={{ bgcolor: "#FFFFFF", mt: 1 }}>
      {inputState ? (
        <TextField
          label="Title"
          variant="outlined"
          autoFocus
          onChange={handleTitleChange}
          onBlur={() => {
            dispatch(updateCardTitle({ columnId: columnId, task: taskState }));
            dispatch(removeEmptyCard(columnId));
            setInputState(false);
          }}
        />
      ) : (
        <ListItemText primary={taskState.title} />
      )}
    </ListItem>
  );
};

export default BoardColumnListItem;
