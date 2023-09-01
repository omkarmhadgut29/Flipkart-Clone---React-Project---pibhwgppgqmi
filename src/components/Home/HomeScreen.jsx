import { Box, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import SlideImage from "./SlideImage";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productActions";
import { productSelector } from "../../redux/products/productSlice";

const filters = [
    {
        id: 1,
        category: "electronics",
        title: "Best of Electronics",
        subTitle: "Devices and Accessories",
        boxId: "electronics",
    },
    {
        id: 2,
        category: "men's clothing",
        title: "Best of Men's Clothing",
        subTitle: "T-Shirts and Jackets",
        boxId: "clothing1",
    },
    {
        id: 3,
        category: "jewelery",
        title: "Best of Jewelery",
        subTitle: "Bracelets and Earrings",
        boxId: "jewelery",
    },
    {
        id: 4,
        category: "women's clothing",
        title: "Best of Women's Clothing",
        subTitle: "Jackets and Raincoats",
        boxId: "clothing2",
    },
];

const HomeScreen = () => {
    const dispatch = useDispatch();
    const products = useSelector(productSelector);

    useEffect(() => {
        (async () => {
            dispatch(getProducts());
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Navbar />
            <Box className=" p-[10px] bg-[#f2f2f2] ">
                <Banner />
            </Box>
            {products ? (
                <>
                    {filters.map((filter) => (
                        <Box
                            className=" p-[10px] bg-[#f2f2f2] "
                            id={filter.boxId}
                            key={filter.id}
                        >
                            <SlideImage
                                products={products.filter(
                                    (product) =>
                                        product.category === filter.category
                                )}
                                title={filter.title}
                                subTitle={filter.subTitle}
                            />
                        </Box>
                    ))}
                </>
            ) : (
                <Box className=" flex justify-center items-center h-[300px] ">
                    <CircularProgress />
                </Box>
            )}
        </>
    );
};

export default HomeScreen;
