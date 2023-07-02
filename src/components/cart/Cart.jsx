import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CartItems from "./CartItems";
import TotalBalance from "./TotalBalance";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, deleteFromCart } from "../../redux/cartSlice";
import PaymentModal from "./PaymentModal";
import { userSelector } from "../../redux/user/userSlice";
import { setPageAlert } from "../../redux/pageAlertSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartSelector);
    const productArray = Object.values(cartItems);
    const deleteCartItem = (id) => {
        dispatch(deleteFromCart(id));
    };
    const [openPaymentModal, setOpenPaymentModal] = useState(false);

    const onClosePaymentModal = () => {
        setOpenPaymentModal(false);
    };

    const user = useSelector(userSelector);
    const handlePayment = () => {
        if (user) {
            setOpenPaymentModal(true);
        } else {
            dispatch(
                setPageAlert({
                    value: true,
                    type: "error",
                    message: "You need to login first.",
                })
            );
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
            {openPaymentModal && (
                <PaymentModal
                    open={openPaymentModal}
                    onClose={onClosePaymentModal}
                />
            )}
        </>
    );
};

export default Cart;
