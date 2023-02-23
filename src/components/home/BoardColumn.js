import { Button, Card, CardActions, CardContent, CardHeader, IconButton } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux'
import BoardColumnList from "./BoardColumnList";

const BoardColumn = ({ id }) => {
  const columns = useSelector(state => state.board.columns);
  const column = columns.filter((x) => x.id === id)[0];

  return(
    <div>
      <Card sx={{ bgcolor: '#F5F5F5' }}>
        <CardHeader 
          title={ column.title}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardContent>
          <BoardColumnList columnId={ id } />
        </CardContent>
        <CardActions>
          <Button size="small">
            <AddIcon />
            Add a new Card
          </Button>
        </CardActions>
      </Card>
    </div>
  )
};

export default BoardColumn;