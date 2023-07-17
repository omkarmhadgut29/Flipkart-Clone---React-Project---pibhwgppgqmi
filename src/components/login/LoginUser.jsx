import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

import { getUsers } from "../../firebase-config";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/userSlice";
import Swal from "sweetalert2";

const LoginUser = ({ handleSignIn, handleClose }) => {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const loginUser = async () => {
        console.log(btoa(password));
        let data = await getUsers(email, btoa(password));
        handleClose();
        if (data.length > 0) {
            delete data[0].password;
            dispatch(addUser({ ...data[0] }));
            Swal.fire("Login Successful", "Welcome to Flipkart", "success");
            localStorage.setItem("userDetails", JSON.stringify(data[0]));
        } else {
            Swal.fire("Error", "Enter Valid Details!", "error");
        }
    };
    return (
        <Box className=" flex flex-col w-[400px] py-[25px] px-[35px] [&>*]:mt-[20px] ">
            <TextField
                variant="standard"
                type="email"
                label="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                variant="standard"
                type="password"
                label="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Typography className=" text-[12px] text-[#878787] ">
                By continuing, you agree to Flipkart&apos;s Terms of Use and
                Privacy Policy.
            </Typography>
            <Button
                className="normal-case bg-[#FB641B] hover:bg-[#fb961b] text-[#fff] h-[48px] rounded-[2px]"
                onClick={async () => await loginUser()}
            >
                Login
            </Button>
            <Typography className="text-center ">OR</Typography>
            <Button className="normal-case bg-[#fff] text-[#2874f0] h-[48px] rounded-[2px] shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] ">
                Request OTP
            </Button>
            <Typography
                className=" text-[14px] text-center text-[#2874f0] font-[600px] cursor-pointer "
                onClick={() => handleSignIn(false)}
            >
                New to Flipkart? Create an account
            </Typography>
        </Box>
    );
};

export default LoginUser;
