import React, { useState } from "react";
import { Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { productSelector } from "../../redux/products/productSlice";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const products = useSelector(productSelector);

    const getSearchText = (text) => {
        setSearchText(text);
    };

    return (
        <>
            <Box className="bg-[#fff] w-[38%] rounded-[2px] ml-[10px] flex ">
                <InputBase
                    placeholder="Search for products, brand and more"
                    className="pl-[20px] w-[100%] text-[black] "
                    onChange={(e) =>
                        getSearchText(e.target.value.toLowerCase())
                    }
                    value={searchText}
                />
                <Box className="text-blue-500 p-[5px] flex">
                    <SearchIcon />
                </Box>
                {searchText && (
                    <List className="absolute bg-[#ffffff] text-[#000] mt-[36px] ">
                        {products
                            .filter((product) =>
                                product.title.toLowerCase().includes(searchText)
                            )
                            .map((product) => (
                                <ListItem key={product.id}>
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={() => setSearchText("")}
                                    >
                                        {product.title}
                                    </Link>
                                </ListItem>
                            ))}
                    </List>
                )}
            </Box>
        </>
    );
};

export default Search;
