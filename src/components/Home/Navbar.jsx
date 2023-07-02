/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../constants/data";

const Navbar = () => {
    return (
        <Box className=" flex mx-[130px] mt-[55px] max-md:m-[0] justify-between overflow-hidden md:m-0 ">
            {navData.map((data) => (
                <Box className=" my-[12px] mx-[8px] text-center " key={data.id}>
                    <img src={data.url} alt="img" className=" w-[64px] " />
                    <Typography className="text-[13px] font-[550] ">
                        {data.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default Navbar;
