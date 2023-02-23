import { ListItem, ListItemText } from "@mui/material";

const BoardColumnListItem = ({ task }) => {
  return (
    <ListItem sx={{ bgcolor: '#FFFFFF', mt: 1 }}>
      <ListItemText primary={ task.title }></ListItemText>
    </ListItem>
  )
};

export default BoardColumnListItem;