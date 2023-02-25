import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { useDispatch } from "react-redux";
import { addNewColumn } from "../../state/boardSlice";
import uuid from "react-uuid";

const NewColumn = () => {
  const [state, setState] = useState({ creating: false, title: "" });
  const dispatch = useDispatch();

  const handleTitleInputChange = (event) => {
    setState({ ...state, title: event.target.value });
  };

  const renderAddIcon = () => {
    return (
      <Button
        variant="contained"
        size="medium"
        onClick={() => setState({ ...state, creating: true })}
      >
        <LibraryAddIcon />
      </Button>
    );
  };

  const renderNewColumn = () => {
    return (
      <Card sx={{ bgcolor: "#F5F5F5" }}>
        <CardContent>
          <TextField
            label="Title"
            variant="outlined"
            autoFocus
            value={state.title}
            onChange={handleTitleInputChange}
          />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              dispatch(addNewColumn({ id: uuid(), title: state.title }));
              setState({ creating: false, title: "" });
            }}
          >
            <AddIcon />
          </Button>
          <Button
            size="small"
            onClick={() => setState({ creating: false, title: "" })}
          >
            <ClearIcon />
          </Button>
        </CardActions>
      </Card>
    );
  };

  return state.creating ? renderNewColumn() : renderAddIcon();
};

export default NewColumn;
