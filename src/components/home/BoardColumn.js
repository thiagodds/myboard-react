import { Container, Box, Button, Toolbar, Card, CardContent, Grid } from "@mui/material"
import { useSelector, useDispatch } from 'react-redux'

const BoardColumn = ({ id }) => {
  const columns = useSelector(state => state.board.columns);
  const column = columns.filter((x) => x.id === id)[0];

  console.log(column);

  return(
    <div>
      <Card>
        <CardContent>
          { column.title }
        </CardContent>
      </Card>
    </div>
  )
};

export default BoardColumn;