import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CartItems from "./CartItems";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, deleteFromCart } from "../../redux/cartSlice";
import { userSelector } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartSelector);
    const productArray = Object.values(cartItems);
    const deleteCartItem = (id) => {
        dispatch(deleteFromCart(id));
    };

    const navigate = useNavigate();
    const user = useSelector(userSelector);
    const handlePayment = () => {
        if (user) {
            let sumOfPrice = 0;
            productArray.map((item) => {
                sumOfPrice += Number(item.price) * Number(item.quantity);
            });
            navigate("/payment", {
                state: { isPayment: true, price: sumOfPrice + 100 },
            });
        } else {
            Swal.fire("Login Error", "You need to login first", "error");
        }
    };

    return (
        <>
            {productArray.length > 0 ? (
                <Grid
                    container
                    className=" py-[30px] px-[135px] max-md:py-[15px] max-md:px-[0px] "
                >
                    <Grid
                        item
                        lg={8}
                        md={8}
                        sm={12}
                        xs={12}
                        className="bg-[#fff] max-md:mb-[15px] "
                    >
                        <Box className=" pb-[0px] ">
                            <Typography className="py-[15px] px-[24px]">
                                My Cart ({productArray.length})
                            </Typography>
                            {productArray.map((product) => {
                                return (
                                    <Box key={product.id}>
                                        <CartItems
                                            product={product}
                                            deleteCartItem={deleteCartItem}
                                        />
                                    </Box>
                                );
                            })}
                        </Box>
                        <Box
                            className="py-[16px] px-[22px] bg-[#fff] "
                            style={{
                                boxShadow: "0px -2px 10px 0 rgb(0 0 0 / 10%)",
                            }}
                        >
                            <Button
                                className="flex ml-auto bg-[#fb641b] text-[#fff] w-[250px] h-[50px] rounded-[4px] hover:bg-[#fb641b] "
                                onClick={() => handlePayment()}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <TotalBalance cartItems={productArray} />
                    </Grid>
                </Grid>
            ) : (
                <EmptyCart />
            )}
        </>
    );
};

export default Cart;
