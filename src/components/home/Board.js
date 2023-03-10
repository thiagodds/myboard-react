import { Box, Toolbar, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import BoardColumn from "./BoardColumn";
import NewColumn from "./NewColumn";

const renderColumns = (columns) => {
  return columns.map((column) => (
    <Grid item sx={{ width: 350 }} key={column.id}>
      <BoardColumn id={column.id}></BoardColumn>
    </Grid>
  ));
};

const Board = () => {
  const columns = useSelector((state) => state.board.columns);

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
