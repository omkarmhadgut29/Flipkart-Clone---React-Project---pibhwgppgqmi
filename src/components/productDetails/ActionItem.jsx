/* eslint-disable react/prop-types */
import { FlashOn, ShoppingCart } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { userSelector } from "../../redux/user/userSlice";
import Swal from "sweetalert2";

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCart = () => {
        dispatch(addToCart(product));
        navigate("/cart");
    };
    const user = useSelector(userSelector);
    const handleByNow = () => {
        if (user) {
            navigate("/payment", {
                state: { isPayment: true, price: Number(product.price) + 100 },
            });
        } else {
            Swal.fire("User Not Found", "You need not login first!", "error");
        }
    };

    return (
        <Box className=" min-w-[40%] max-xl:pt-[40px] lg:pl-[80px]  sm:py-[10px] sm:px-[20px] md:pt-[80px] ">
            <Box className=" py-[15px] px-[20px] border-[1px] border-solid border-[#f0f0f0]">
                <img
                    src={product.image}
                    alt="image"
                    className=" w-[95%] p-[15px] max-h-[500px] object-contain "
                />
            </Box>
            <Button
                variant="contained"
                className=" bg-[#ff9f00] hover:bg-[#ff9f00]  max-lg:w-[48%] h-[50px] rounded-[3px] mr-[10px] mt-[10px] max-sm:w-[100%] "
                onClick={() => handleCart()}
            >
                <ShoppingCart /> Add to Cart
            </Button>
            <Button
                variant="contained"
                className=" bg-[#fb641b] mt-[10px] hover:bg-[#fb641b]  max:w-[48%] h-[50px] rounded-[3px] max-sm:w-[100%] max-sm:mt-[5px]  "
                onClick={handleByNow}
            >
                <FlashOn /> By Now
            </Button>
        </Box>
    );
};

export default ActionItem;
