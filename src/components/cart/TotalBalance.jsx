import { Box, Typography } from "@mui/material";
import React from "react";

const TotalBalance = ({ cartItems }) => {
    let sumOfPrice = 0;
    cartItems.map((item) => {
        sumOfPrice += Number(item.price);
    });

    return (
        <Box className="bg-[#fff] ml-[20px] ">
            <Box className="py-[15px] px-[24px] border-b-[1px] border-solid border-[#f0f0f0] ">
                <Typography className="text-[#878787] ">
                    PRICE DETAILS
                </Typography>
            </Box>
            <Box className="py-[15px] px-[24px] [&>p]:mb-[20px] [&>p]:text-[14px] ">
                <Typography>
                    Price ({cartItems?.length} item){" "}
                    <Box component={"span"} className="float-right ">
                        ₹{sumOfPrice}
                    </Box>
                </Typography>
                <Typography>
                    Delivery Charges{" "}
                    <Box component={"span"} className="float-right ">
                        ₹100
                    </Box>
                </Typography>
                <Typography variant="h6" className="mb-[20px]">
                    Total Amount{" "}
                    <Box component={"span"} className="float-right ">
                        ₹{sumOfPrice + 100}
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
};

export default TotalBalance;
