import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/user/userSlice";
import { PowerSettingsNew } from "@mui/icons-material";
import { setPageAlert } from "../../redux/pageAlertSlice";

const UserProfile = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logOutUser = () => {
        dispatch(deleteUser());
        dispatch(
            setPageAlert({
                value: true,
                type: "success",
                message: "Logout successful",
            })
        );
        localStorage.removeItem("userDetails");
    };

    return (
        <>
            <Box onClick={handleClick} className=" cursor-pointer ">
                <Typography className="mt-[2px]">{user.fname}</Typography>
            </Box>

            <Menu
                className="mt-[5px] "
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        handleClose();
                        logOutUser();
                    }}
                >
                    <PowerSettingsNew color="primary" fontSize="small" />
                    <Typography className=" text-[14px] ml-[20px] ">
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserProfile;
