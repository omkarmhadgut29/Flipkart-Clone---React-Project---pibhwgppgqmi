import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <Box className=" bg-[#172337] text-[#fff] min-[700px]:h-[70px] h-[120px] flex min-[700px]:flex-row flex-col justify-around items-center relative bottom-0 ">
            <Box className=" ml-[20px] ">
                <Link to={"/"}>
                    <Box className=" flex ">
                        <img
                            src="../../assets/flipkart-logo.png"
                            className="w-[25px] "
                            alt="logo"
                        />
                        <Typography>Flipkart</Typography>
                    </Box>
                </Link>
            </Box>
            <Box className=" [&>*]:cursor-text text-center ">
                <Box>Copyright © 2023 Flipkart.</Box>
            </Box>
            <Box className="flex justify-between w-[200px] ">
                <Box>
                    <Link
                        to="https://www.instagram.com/"
                        className="hover:text-[#7fd9ff]"
                        target="_blank"
                    >
                        <Instagram className="text-[32px] " />
                    </Link>
                </Box>
                <Box>
                    <Link
                        to="https://www.facebook.com/"
                        target="_blank"
                        className="hover:text-[#7fd9ff]"
                    >
                        <Facebook className="text-[32px] " />
                    </Link>
                </Box>
                <Box>
                    <Link
                        to="https://www.linkedin.com/in/omkar-mhadgut-7451a3227/"
                        target="_blank"
                        className="hover:text-[#7fd9ff]"
                    >
                        <LinkedIn className="text-[32px] " />
                    </Link>
                </Box>
                <Box>
                    <Link
                        to="https://twitter.com/"
                        target="_blank"
                        className="hover:text-[#7fd9ff]"
                    >
                        <Twitter className="text-[32px] " />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
