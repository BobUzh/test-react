import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

import { HiveOutlined } from "@mui/icons-material"
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";

import { useState } from "react";
import ToggleLang from "./toggleLang";
import Login from "./Login";

const Header: React.FC = () => {
    const {isAuthorized} = useAppSelector(state => state.user);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
      };

    const menuItem = isAuthorized 
        ? <Button component={Link} to="profile">Profile</Button> 
        : <Button onClick={handleClickOpen}>Log In</Button>

    return (
        <>
            <AppBar position="relative" sx={{py: 2}}>
                <Container>
                    <Toolbar disableGutters={true}>
                        <IconButton component={Link} to="/">
                            <HiveOutlined />
                        </IconButton>
                        <Typography variant="h6" sx={{flexGrow: 1}}>VOOX</Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Button component={NavLink} to="wishlist">Wishlist</Button>
                            {menuItem}
                            <ToggleLang />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <Login isOpen={open} close={handleClose}/>
        </>
    )
}

export default Header