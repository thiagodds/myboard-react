import { Box } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';

import Board from "./Board";
import Menu from "./Menu";


const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <Menu />
      <Board />
    </Box>
  )
}

export default Dashboard;