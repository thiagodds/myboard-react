import { AppBar, Box, Toolbar, Typography } from "@mui/material"

const Menu = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          My Board
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Menu;