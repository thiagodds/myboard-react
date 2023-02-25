import { Divider, List } from "@mui/material";
import { useSelector } from "react-redux";
import BoardColumnListItem from "./BoardColumnListItem";

const renderList = (tasks, columnId) => {
  return tasks.map((x) => (
    <>
      <BoardColumnListItem key={x.id} task={x} columnId={columnId} />
      <Divider />
    </>
  ));
};

const BoardColumnList = ({ columnId }) => {
  const columns = useSelector((state) => state.board.columns);
  const column = columns.filter((x) => x.id === columnId)[0];
  const tasks = column.tasks;

  return <List>{renderList(tasks, columnId)}</List>;
};

export default BoardColumnList;
