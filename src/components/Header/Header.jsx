import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    Menu,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";

const Header = () => {
    const logoURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar className="bg-[#2874f0] h-[55px]">
                <Toolbar className="min-h-[55px] ">
                    <IconButton
                        className="hidden max-sm:block "
                        color="inherit"
                        onClick={handleOpen}
                    >
                        <Menu open={open} />
                    </IconButton>
                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>
                    <Box className="ml-[12%] leading-[0]">
                        <Link to={"/"}>
                            <img
                                src={logoURL}
                                alt="logo"
                                style={{ width: 75 }}
                            />
                            <Box>
                                <Typography className="text-xs italic flex">
                                    Explore&nbsp;
                                    <Box
                                        component="span"
                                        className="text-[#FFE500]"
                                    >
                                        Plus
                                    </Box>
                                    <img
                                        src={subURL}
                                        alt="sub-logo"
                                        className="w-[10px] ml-1 h-[10px]"
                                    />
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Search />
                    <CustomButtons />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
