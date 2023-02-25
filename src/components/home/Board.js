import { Box, Button, Toolbar, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addNewColumn } from "../../state/boardSlice";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import BoardColumn from "./BoardColumn";
import NewColumn from "./NewColumn";

const renderColumns = (columns) => {
  return columns.map((column) => (
    <Grid item sx={{ width: 350 }}>
      <BoardColumn id={column.id}></BoardColumn>
    </Grid>
  ));
};

const Board = () => {
  const columns = useSelector((state) => state.board.columns);
  const dispatch = useDispatch();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        pt: 2,
        pl: 2,
      }}
    >
      <Toolbar />
      <Grid container direction="row" spacing={2}>
        {renderColumns(columns)}
        <Grid item>
          <NewColumn />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Board;
