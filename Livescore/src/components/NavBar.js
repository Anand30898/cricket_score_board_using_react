/*please refer to the website https://material-ui.com/ and then click on get started and read the AppBar section in order to understand this better*/

import React from 'react'
import { AppBar,IconButton,Toolbar,Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = ()=> {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon  />
                </IconButton>
                <Typography variant="h6">
                    Live Score
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
