/* eslint-disable react/jsx-key */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bannerData } from "../constants/data";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Banner = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map((data) => (
                <img
                    key={data.id}
                    src={data.url}
                    className=" w-[100%] md:h-[280px] sm:object-cover sm:h-[180px] "
                />
            ))}
        </Carousel>
    );
};

export default Banner;
