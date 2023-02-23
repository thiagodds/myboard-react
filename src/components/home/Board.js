import { Container, Box, Button, Toolbar, Card, CardContent, Grid } from "@mui/material"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import BoardColumn from "./BoardColumn";

const Board = () => {
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
        <Grid item>
          <BoardColumn></BoardColumn>
        </Grid>
        <Grid item>
          <BoardColumn></BoardColumn>
        </Grid>
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