import React, { useState } from "react";
import {
    Button,
    Modal,
    Box,
    TextField,
    Typography,
    Stack,
    Snackbar,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setPageAlert } from "../../redux/pageAlertSlice";
import { deleteAllCartItems, deleteFromCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ open, onClose }) => {
    const [address, setAddress] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleCompletePayment = () => {
        // Make API call or perform necessary actions for completing the payment
        dispatch(deleteAllCartItems());
        dispatch(
            setPageAlert({
                value: true,
                type: "success",
                message: "Your order has been placed successfully.",
            })
        );
        handleClose();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Complete Payment
                </Typography>
                <form>
                    <Stack spacing={2}>
                        <TextField
                            label="Address"
                            fullWidth
                            value={address}
                            onChange={handleAddressChange}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="paymentType-label">
                                Payment Type
                            </InputLabel>
                            <Select
                                labelId="paymentType-label"
                                id="paymentType"
                                value={paymentType}
                                label="paymentType"
                                onChange={handlePaymentTypeChange}
                            >
                                <MenuItem value={"UPI"}>UPI</MenuItem>
                                <MenuItem value={"Debit Card"}>
                                    Debit Card
                                </MenuItem>
                                <MenuItem value={"Credit Card"}>
                                    Credit Card
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={handleCompletePayment}
                        sx={{ mt: 2 }}
                        className="bg-[#fb641b] hover:bg-[#fb641b] "
                    >
                        Complete Payment
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default PaymentModal;
