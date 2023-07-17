import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userSelector } from "../../redux/user/userSlice";
import { PowerSettingsNew } from "@mui/icons-material";
import Swal from "sweetalert2";

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
        Swal.fire("Logout Successful");
        localStorage.removeItem("userDetails");
    };

    return (
        <>
            <Box onClick={handleClick} className=" cursor-pointer ">
                <Typography
                    variant="contained"
                    className=" text-[#fff] shadow-[#97aafd] shadow-md normal-case px-[40px] py-[5px] rounded-[5px] font-[600] h-[32px] hover:bg-[#2843f0] hover:text-[#fff] mt-[2px] "
                >
                    {user.fname}
                </Typography>
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
