import { Divider, List } from "@mui/material";
import { useSelector } from 'react-redux'
import BoardColumnListItem from "./BoardColumnListItem";

const renderList = (tasks) => {
  return tasks.map((x) => (
    <>
      <BoardColumnListItem task={x} />
      <Divider />
    </>
  ));
};

const BoardColumnList = ({ columnId }) => {
  const columns = useSelector(state => state.board.columns);
  const column = columns.filter((x) => x.id === columnId)[0];
  const tasks = column.tasks;

  return (
    <List>
      { renderList(tasks) }
    </List>
  )
}

export default BoardColumnList;