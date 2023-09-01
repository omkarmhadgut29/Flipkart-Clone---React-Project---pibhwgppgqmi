import { InfoOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const Page204 = () => {
    return (
        <>
            <Box component={"div"} className="h-[400px] ">
                <Box className="h-full w-[100%] flex justify-end items-center text-[20px] font-bold flex-col ">
                    <Box className="pb-[30px] ">
                        <InfoOutlined className="text-[120px] text-[#9de0f6] " />
                    </Box>
                    <Box>Opps!</Box>
                    <Box className="pt-[10px]  ">
                        We are working on this Page.
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Page204;
