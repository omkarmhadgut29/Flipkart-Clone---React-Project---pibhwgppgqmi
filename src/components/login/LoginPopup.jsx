import { Box, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginUser from "./LoginUser";
import SignUpUser from "./SignUpUser";

const LoginPopup = ({ open, handleClose }) => {
    const [signIn, setSignIn] = useState(true);

    const handleSignIn = (value) => {
        setSignIn(value);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { maxWidth: "unset" } }}
        >
            <Box className=" h-[70vh] w-[700px] ">
                <Box className=" flex h-[100%] ">
                    <Box
                        className=" px-[25px] py-[45px] h-[100%] w-[300px] [&>*]:text-[#fff] "
                        style={{
                            background:
                                "#2874fe url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
                        }}
                    >
                        <Typography
                            variant="h4"
                            className=" text-[27px] font-[600] "
                        >
                            {signIn ? "Login" : "Looks like you're new here!"}
                        </Typography>{" "}
                        <Typography style={{ marginTop: 20 }}>
                            {signIn
                                ? "Get access to your Orders, Wishlist and Recommendations"
                                : "Sign up with your mobile number to get started"}
                        </Typography>
                    </Box>
                    {signIn ? (
                        <LoginUser
                            handleSignIn={handleSignIn}
                            handleClose={handleClose}
                        />
                    ) : (
                        <SignUpUser
                            handleSignIn={handleSignIn}
                            handleClose={handleClose}
                        />
                    )}
                </Box>
            </Box>
        </Dialog>
    );
};

export default LoginPopup;
