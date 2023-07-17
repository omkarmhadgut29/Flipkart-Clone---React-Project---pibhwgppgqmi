import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { addUsers } from "../../firebase-config";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user/userSlice";
import Swal from "sweetalert2";

const SignUpUser = ({ handleSignIn, handleClose }) => {
    const [userDetails, setUserDetails] = useState({
        fname: {
            value: "",
            error: false,
            errorMessage: "You must enter a first name",
        },
        lname: {
            value: "",
            error: false,
            errorMessage: "You must enter a last name",
        },
        username: {
            value: "",
            error: false,
            errorMessage: "You must enter a username",
        },
        email: {
            value: "",
            error: false,
            errorMessage: "You must enter a email",
        },
        password: {
            value: "",
            error: false,
            errorMessage: "You must enter a password",
        },
        phone: {
            value: "",
            error: false,
            errorMessage: "You must enter a phone number",
        },
    });

    const [fieldError, setFieldError] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: {
                ...userDetails[name],
                value,
            },
        });
    };
    const userSignUp = async () => {
        const userFields = Object.keys(userDetails);
        let newUserDetails = { ...userDetails };
        let isValidData = true;
        for (let index = 0; index < userFields.length; index++) {
            const currentField = userFields[index];
            const currentValue = userDetails[currentField].value;
            setFieldError(false);

            // Validation
            if (currentValue === "") {
                newUserDetails = {
                    ...newUserDetails,
                    [currentField]: {
                        ...newUserDetails[currentField],
                        error: true,
                    },
                };
                isValidData = false;
                setFieldError(true);
            } else {
                if (currentField === "email") {
                    if (!/\S+@\S+\.\S+/.test(currentValue)) {
                        newUserDetails = {
                            ...newUserDetails,
                            ["email"]: {
                                ...newUserDetails[currentField],
                                error: true,
                                errorMessage: "Enter Valid Email",
                            },
                        };
                        isValidData = false;
                    } else {
                        newUserDetails = {
                            ...newUserDetails,
                            [currentField]: {
                                ...newUserDetails[currentField],
                                error: false,
                            },
                        };
                    }
                } else {
                    newUserDetails = {
                        ...newUserDetails,
                        [currentField]: {
                            ...newUserDetails[currentField],
                            error: false,
                        },
                    };
                }
            }
        }

        setUserDetails(newUserDetails);

        if (isValidData) {
            const userAdded = await addUsers(userDetails);
            if (userAdded) {
                handleClose();
                Swal.fire(
                    "Registration Successful",
                    "User Registed Successfully",
                    "success"
                );
                const data = {
                    fname: userDetails.fname.value,
                    lname: userDetails.lname.value,
                    username: userDetails.username.value,
                    email: userDetails.email.value,
                    phone: userDetails.phone.value,
                };
                localStorage.setItem("userDetails", JSON.stringify(data));
                dispatch(addUser({ ...data }));
            } else {
                handleClose();
                Swal.fire(
                    "Please try again",
                    "Email-id already exists!",
                    "error"
                );
            }
        }
    };
    return (
        <Box
            className={` flex flex-col w-[400px] py-[15px] px-[35px] ${
                !fieldError && "[&>*]:mt-[10px]"
            } `}
        >
            <TextField
                variant="standard"
                label="Enter Firstname"
                name="fname"
                required
                value={userDetails.fname.value}
                onChange={handleChange}
                error={userDetails.fname.error}
                helperText={
                    userDetails.fname.error && userDetails.fname.errorMessage
                }
            />
            <TextField
                variant="standard"
                label="Enter Lastname"
                name="lname"
                required
                value={userDetails.lname.value}
                onChange={handleChange}
                error={userDetails.lname.error}
                helperText={
                    userDetails.lname.error && userDetails.lname.errorMessage
                }
            />
            <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                required
                value={userDetails.username.value}
                onChange={handleChange}
                error={userDetails.username.error}
                helperText={
                    userDetails.username.error &&
                    userDetails.username.errorMessage
                }
            />
            <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                type="email"
                required
                value={userDetails.email.value}
                onChange={handleChange}
                error={userDetails.email.error}
                helperText={
                    userDetails.email.error && userDetails.email.errorMessage
                }
            />
            <TextField
                variant="standard"
                label="Enter Password"
                type="password"
                name="password"
                required
                value={userDetails.password.value}
                onChange={handleChange}
                error={userDetails.password.error}
                helperText={
                    userDetails.password.error &&
                    userDetails.password.errorMessage
                }
            />
            <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                type="number"
                required
                value={userDetails.phone.value}
                onChange={handleChange}
                error={userDetails.phone.error}
                helperText={
                    userDetails.phone.error && userDetails.phone.errorMessage
                }
            />

            <Button
                className="normal-case bg-[#FB641B] hover:bg-[#fb641b] text-[#fff] h-[48px] rounded-[2px]"
                onClick={() => userSignUp()}
            >
                Continue
            </Button>

            <Button
                className="normal-case bg-[#fff] text-[#2874f0] h-[48px] rounded-[2px] shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] "
                onClick={() => handleSignIn(true)}
            >
                Existing User? Log in
            </Button>
        </Box>
    );
};

export default SignUpUser;
