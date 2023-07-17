/* eslint-disable react/jsx-key */
import { Box, Typography } from "@mui/material";
import React from "react";

const navData = [
    {
        id: 1,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
        text: "Top Offers",
    },
    {
        id: 2,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
        text: "Grocery",
    },
    {
        id: 3,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
        text: "Mobile",
    },
    {
        id: 4,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
        text: "Fashion",
    },
    {
        id: 5,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
        text: "Electronics",
    },
    {
        id: 6,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
        text: "Home",
    },
    {
        id: 7,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
        text: "Appliances",
    },
    {
        id: 8,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
        text: "Travel",
    },
    {
        id: 9,
        url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
        text: "Beauty, Toys & More",
    },
];

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
