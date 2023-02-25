import {
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeEmptyCard, updateCardTitle } from "../../state/boardSlice";
import React, { useState } from "react";
import BoardColumnListItemDetails from "./BoardColumnListItemDetails";

const BoardColumnListItem = ({ task, columnId }) => {
  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState(task);
  const [inputState, setInputState] = useState(task.title === "");
  const [modalState, setModalState] = useState(false);

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
        <>
          <ListItemButton onClick={() => setModalState(true)}>
            <ListItemText primary={taskState.title} />
          </ListItemButton>
          <Modal open={modalState} onClose={() => setModalState(false)}>
            <div>
              <BoardColumnListItemDetails task={task} />
            </div>
          </Modal>
        </>
      )}
    </ListItem>
  );
};

export default BoardColumnListItem;
