/* eslint-disable react/prop-types */
import { FlashOn, ShoppingCart } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCart = () => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    return (
        <Box className=" min-w-[40%] lg:pt-[40px] lg:pl-[80px] sm:py-[10px] sm:px-[20px] md:pt-[80px] ">
            <Box className=" py-[15px] px-[20px] border-[1px] border-solid border-[#f0f0f0]">
                <img
                    src={product.image}
                    alt="image"
                    className=" w-[95%] p-[15px] max-h-[500px] object-contain "
                />
            </Box>
            <Button
                variant="contained"
                className=" bg-[#ff9f00] hover:bg-[#ff9f00] lg:w-[48%] h-[50px] rounded-[3px] lg:mr-[10px] md:w-[100%] "
                onClick={() => handleCart()}
            >
                <ShoppingCart /> Add to Cart
            </Button>
            <Button
                variant="contained"
                className=" bg-[#fb641b] hover:bg-[#fb641b] lg:w-[48%] h-[50px] rounded-[3px] md:w-[100%] md:mt-[5px]  "
            >
                <FlashOn /> By Now
            </Button>
        </Box>
    );
};

export default ActionItem;
