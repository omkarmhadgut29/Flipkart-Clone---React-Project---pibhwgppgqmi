import { ShoppingCart } from "@mui/icons-material";
import { Badge, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginPopup from "../login/LoginPopup";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userSelector } from "../../redux/user/userSlice";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";
import { cartSelector } from "../../redux/cartSlice";

const CustomButtons = () => {
    const [open, setOpen] = useState(false);
    let user = useSelector(userSelector);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const cartLength = Object.values(useSelector(cartSelector));

    useEffect(() => {
        if (localStorage?.userDetails) {
            let data = JSON.parse(localStorage.userDetails);
            dispatch(addUser({ ...data }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {user ? (
                <UserProfile />
            ) : (
                <Button
                    variant="contained"
                    className=" text-[#2874f0] bg-[#fff] normal-case px-[40px] py-[5px] rounded-[2px] shadow-none font-[600] h-[32px] hover:bg-[#fff] "
                    onClick={() => setOpen(true)}
                >
                    Login
                </Button>
            )}

            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Link to={"/cart"} className=" flex ">
                <Badge badgeContent={cartLength?.length || 0} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography className="ml-[10px] ">Cart</Typography>
            </Link>
            {open && <LoginPopup open={open} handleClose={handleClose} />}
        </>
    );
};

export default CustomButtons;
