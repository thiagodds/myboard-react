import { Container, Box, Button, Toolbar, Card, CardContent, Grid } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import BoardColumn from "./BoardColumn";

const Board = () => {
  const renderColumns = (columns) => {
    return columns.map(column => (
      <Grid item>
        <BoardColumn id={ column.id }></BoardColumn>
      </Grid>
    ));
  };

  const columns = useSelector(state => state.board.columns);

  return (
    <Box 
      component="main"
      sx={{ 
        bgcolor: '#F5F5F5', flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        pt: 2,
        pl:2
      }}
    >
      <Toolbar />
      <Grid
        container
        direction='row'
        spacing={2}
      >       
        { renderColumns(columns) }
        <Grid item>
          <Button variant="contained" size="medium">
            <LibraryAddIcon/>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
};

export default Board;