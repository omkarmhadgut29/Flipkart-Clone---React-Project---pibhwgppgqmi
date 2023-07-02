import React from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <>
            <Box className="bg-[#fff] w-[38%] rounded-[2px] ml-[10px] flex ">
                <InputBase
                    placeholder="Search for products, brand and more"
                    className="pl-[20px] w-[100%] text-[black] "
                />
                <Box className="text-blue-500 p-[5px] flex">
                    <SearchIcon />
                </Box>
            </Box>
        </>
    );
};

export default Search;
