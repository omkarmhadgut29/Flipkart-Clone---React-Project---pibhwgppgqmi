/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../redux/products/productSlice";
import { getProducts } from "../../redux/products/productActions";
import ActionItem from "./ActionItem";
import DetailsPage from "./DetailsPage";

const ShowDetails = ({ product }) => {
    return (
        <>
            <Grid container className=" bg-[#ffffff] flex min-h-[90vh] ">
                <Grid item lg={4} md={4} sm={8} xs={12} className=" sm:m-0 ">
                    <ActionItem product={product} />
                </Grid>
                <Grid
                    item
                    lg={8}
                    md={8}
                    sm={8}
                    xs={12}
                    className=" mt-[55px] pl-[50px] "
                >
                    <DetailsPage product={product} />
                </Grid>
            </Grid>
        </>
    );
};

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(productSelector);

    useEffect(() => {
        if (!products) {
            (async () => {
                dispatch(getProducts());
            })();
        }
    }, []);

    return (
        <>
            {products ? (
                <Box className=" bg-[#f2f2f2] mt-[55px] px-[55px] ">
                    <ShowDetails
                        product={
                            products.filter(
                                (product) => product.id === Number(id)
                            )[0]
                        }
                    />
                </Box>
            ) : (
                <Box className=" flex justify-center items-center w-[100%] h-[500px] "></Box>
            )}
        </>
    );
};

export default ProductDetails;
