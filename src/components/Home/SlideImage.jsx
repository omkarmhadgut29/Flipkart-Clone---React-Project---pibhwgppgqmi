/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-multi-carousel";
import { Box, Divider, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
    },
};

const SlideImage = ({ products, title, subTitle }) => {
    return (
        <Box className=" bg-[#fff] w-[100%] ">
            <Box className=" bg-[#fff] py-[13px] pl-[15px] text-[#212121] ">
                <Typography className=" leading-5 font-bold text-[20px] ">
                    {title}
                </Typography>
                <Typography className=" text-[11.5px] ">{subTitle}</Typography>
            </Box>

            <Divider />

            <Box className=" px-[150px] max-sm:px-[0px] max-lg:px-[50px] ">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    arrows={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="[&>button]:bg-[#b4b4b4] [&>*:nth-child(2)]:left-1 [&>*:nth-child(3)]:right-1 "
                    // className=" [&>button]:bg-[blue] [&>button]:m-[10px] "
                >
                    {products.map((product) => (
                        <Link
                            to={`/product/${product.id}`}
                            key={product.id}
                            className=" text-center py-[25px] px-[15px] bg-[#ffff] items-center flex justify-center flex-col "
                        >
                            <img
                                src={product.image}
                                alt="img"
                                className=" w-auto h-[150px] "
                            />
                            <Typography>
                                {`${product.title.slice(0, 20)}...`}
                            </Typography>

                            <Typography className=" text-[green] ">
                                ₹{product.price}
                            </Typography>

                            <Rating
                                name="half-rating-read"
                                defaultValue={product.rating.rate}
                                precision={0.5}
                                readOnly
                            />
                        </Link>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default SlideImage;
