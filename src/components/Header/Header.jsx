import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import { Close, Menu } from "@mui/icons-material";

const Header = () => {
    const logoURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [open]);

    return (
        <>
            <AppBar
                className={`bg-[#2874f0] ${
                    open ? "h-[220px] pt-[10px] sticky " : "h-[55px] "
                } `}
            >
                <Toolbar
                    className={`min-h-[55px] ${open && "flex flex-wrap "}`}
                >
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
                    <Box className="flex max-[900px]:hidden [&>*]:ml-[40px] items-center  ">
                        <CustomButtons />
                    </Box>
                    <IconButton
                        className=" hidden max-[900px]:block absolute right-12 top-0 p-0 cursor-pointer "
                        color="inherit"
                        onClick={handleMenu}
                    >
                        {open ? (
                            <Close />
                        ) : (
                            <Menu className="h-[50px] text-[25px] " />
                        )}
                    </IconButton>
                    {open && window.innerWidth < 900 && (
                        <Box className="flex flex-col items-center basis-full [&>*]:mt-[15px]  ">
                            <CustomButtons />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
