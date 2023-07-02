import { Box, Button, Typography } from "@mui/material";
import React from "react";
import QuantityButtons from "./QuantityButtons";

function CartItems({ product, deleteCartItem }) {
    const fassured =
        "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    return (
        <Box className="border-t-[1px] border-solid border-[#f0f0f0] flex ">
            <Box className="m-[20px] ">
                <img
                    src={product.image}
                    className="w-[110px] h-[110px] "
                    alt="product image"
                />
                <QuantityButtons />
            </Box>
            <Box className="m-[20px] ">
                <Typography>{product.title} </Typography>
                <Typography className="text-[#878787] text-[14px] mt-[10px] flex  ">
                    Seller:RetailNet
                    <Box component={"span"}>
                        <img
                            src={fassured}
                            alt="Flipkart"
                            className="w-[50px] ml-[10px] mt-[3px] "
                        />
                    </Box>
                </Typography>
                <Typography className=" text-[18px] font-bold mt-[20px] ">
                    ₹{product.price}
                </Typography>
                <Button
                    className="mt-[20px] text-[15px] text-[#000] font-[600] "
                    onClick={() => deleteCartItem(product.id)}
                >
                    Remove
                </Button>
            </Box>
        </Box>
    );
}

export default CartItems;
