import { Box, Typography } from "@mui/material";
import React from "react";

const EmptyCart = () => {
    const imgurl =
        "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

    return (
        <Box className=" w-[80%] my-[50px] mx-[140px] pt-[20px] ">
            <Box className="h-[80vh] bg-[#fff] flex flex-col items-center justify-center ">
                <img src={imgurl} alt="Img" className="w-[15%] " />
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now</Typography>
            </Box>
        </Box>
    );
};

export default EmptyCart;
