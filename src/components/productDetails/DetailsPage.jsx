/* eslint-disable react/prop-types */
import { LocalOffer } from "@mui/icons-material";
import {
    Box,
    Rating,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import React from "react";

const assuredImg =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";

const DetailsPage = ({ product }) => {
    // new
    const adURL =
        "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
    const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
    return (
        <Box>
            <Typography className=" text-[22px] p-[5px] ">
                {product.title}
            </Typography>

            <Box className=" flex my-[10px] ">
                <Rating
                    name="half-rating-read"
                    defaultValue={product.rating.rate}
                    precision={0.5}
                    readOnly
                />
                <Typography className=" text-[#878787] ">
                    19,383 Ratings & 2,062 Reviews{" "}
                </Typography>
                <img
                    src={assuredImg}
                    alt="assured"
                    className=" w-[80px] object-contain ml-[5px] "
                />
            </Box>

            <Box className=" my-[20px] ">
                <Typography className=" text-[green] my-[10px] ">
                    Special price
                </Typography>
                <Box className=" my-[10px] ">
                    <Typography className=" text-[30px] font-bold ">
                        ₹{product.price}
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Typography>Available offers</Typography>
            </Box>

            <Box className=" [&>*]:text-[14px] [&>*]:mt-[10px] ">
                <Typography>
                    <LocalOffer className=" text-[#00CC00] text-[15px] " /> Bank
                    Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank
                    Credit Card
                </Typography>
                <Typography>
                    <LocalOffer className=" text-[#00CC00] text-[15px] " /> Bank
                    Bank Offer 10% Off on Bank of Baroda Mastercard debit card
                    first time transaction, Terms and Condition apply
                </Typography>
                <Typography>
                    <LocalOffer className=" text-[#00CC00] text-[15px] " /> Bank
                    Purchase this Furniture or Appliance and Get Extra 1500 Off
                    on Select ACS
                </Typography>
                <Typography>
                    <LocalOffer className=" text-[#00CC00] text-[15px] " />{" "}
                    Partner OfferExtra 10% off upto 2500 on next furniture
                    purchase
                </Typography>
            </Box>

            {/* New */}

            <Table>
                <TableBody>
                    <TableRow className=" text-[14px] [&>*]:text-[14px] [&>*]:mt-[10px] ">
                        <TableCell style={{ color: "#878787" }}>
                            Delivery
                        </TableCell>
                        <TableCell style={{ fontWeight: 600 }}>
                            Delivery by {date.toDateString()} | ₹40
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "#878787" }}>
                            Warranty
                        </TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "#878787" }}>
                            Seller
                        </TableCell>
                        <TableCell>
                            <span style={{ color: "#2874f0" }}>
                                SuperComNet
                            </span>
                            <Typography>GST invoice available</Typography>
                            <Typography>
                                View more sellers starting from ₹329
                            </Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{ color: "#878787" }}>
                            Description
                        </TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
};

export default DetailsPage;
