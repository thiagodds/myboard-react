import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import BoardColumnList from "./BoardColumnList";
import { addNewCard, removeColumn } from "../../state/boardSlice";
import React, { useState } from "react";
import uuid from "react-uuid";

const BoardColumn = ({ id }) => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.board.columns);
  const column = columns.filter((x) => x.id === id)[0];
  const [optionsSate, setOptionsState] = useState(null);
  const open = Boolean(optionsSate);

  return (
    <div>
      <Card sx={{ bgcolor: "#F5F5F5" }}>
        <CardHeader
          title={column.title}
          action={
            <>
              <IconButton
                id="options-icon"
                aria-controls={open ? "options-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                aria-label="options-button"
                onClick={(event) => setOptionsState(event.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="options-menu"
                anchorEl={optionsSate}
                open={open}
                onClose={() => setOptionsState(null)}
              >
                <MenuItem
                  onClick={() => {
                    dispatch(removeColumn({ columnId: id }));
                    setOptionsState(null);
                  }}
                >
                  Remove Column
                </MenuItem>
              </Menu>
            </>
          }
        />
        <CardContent>
          <BoardColumnList columnId={id} />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() =>
              dispatch(addNewCard({ id: uuid(), title: "", columnId: id }))
            }
          >
            <AddIcon />
            Add a new Card
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BoardColumn;
