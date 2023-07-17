import React from "react";
import { styled } from "@mui/system";
import {
    Box,
    Radio,
    FormControlLabel,
    TextField,
    Select,
    MenuItem,
    Button,
    InputAdornment,
} from "@mui/material";
import { CreditCardOutlined, LockOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteAllCartItems } from "../../redux/cartSlice";

const FormContainer = styled("div")({
    minWidth: "80vw",
    minHeight: "92vh",
    backgroundColor: "#E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "58px",
    padding: "0 5px 10px 5px",
});

const FormContent = styled("div")({
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px 6px #00000029",
    padding: "20px",
    color: "#4B5563",
});

const PaymentIcon = styled("div")({
    backgroundColor: "#6366F1",
    color: "#FFFFFF",
    overflow: "hidden",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    marginTop: "-40px",
    margin: "0 auto",
    boxShadow: "0px 3px 6px #00000029",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const FormRadio = styled(Radio)(({ theme }) => ({
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    colorAdjust: "exact",
    display: "inline-block",
    verticalAlign: "middle",
    backgroundOrigin: "border-box",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
    flexShrink: 0,
    borderRadius: "100%",
    borderWidth: "2px",
    "&:checked": {
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${theme.palette.common.white}' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
        borderColor: "transparent",
        backgroundColor: "currentColor",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    "@media not print": {
        "&::-ms-check": {
            borderWidth: "1px",
            color: "transparent",
            background: "inherit",
            borderColor: "inherit",
            borderRadius: "inherit",
        },
    },
    "&:focus": {
        outline: "none",
    },
}));

const PaymentScreen = ({ price }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formDetails, setFormDetails] = React.useState({
        selectedType: "type1",
        name: "",
        address: "",
        cardNumber: "",
        month: "08",
        year: "2023",
        securityCode: "",
    });
    const [isError, setIsError] = React.useState(false);

    const handleTypeChange = (event) => {
        setFormDetails((preValue) => ({
            ...preValue,
            selectedType: event.target.value,
        }));
    };
    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/[^\d]/g, "");
        let formattedValue = "";

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += " ";
            }
            formattedValue += value.charAt(i);
        }

        setFormDetails((preValue) => ({
            ...preValue,
            cardNumber: formattedValue.trim(),
        }));
    };

    const handlePayNow = () => {
        if (Object.values(formDetails).some((value) => value === "")) {
            setIsError(true);
        } else {
            setIsError(false);
            dispatch(deleteAllCartItems());
            Swal.fire("Payment Done", "Your order has been placed!", "success");
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    };
    return (
        <FormContainer>
            <FormContent>
                <Box className=" pb-[5px] ">
                    <PaymentIcon>
                        <CreditCardOutlined className="text-[30px] " />
                    </PaymentIcon>
                </Box>
                <div className="mb-5">
                    <h1 className="text-center font-bold text-xl uppercase">
                        Secure payment info
                    </h1>
                </div>
                <div className="mb-3 flex -mx-2">
                    <div className="px-2">
                        <FormControlLabel
                            control={
                                <FormRadio
                                    checked={
                                        formDetails.selectedType === "type1"
                                    }
                                    onChange={handleTypeChange}
                                    value="type1"
                                />
                            }
                            label={
                                <img
                                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                    alt="Card"
                                    className="h-8 ml-3"
                                />
                            }
                            htmlFor="type1"
                        />
                    </div>
                    <div className="px-2">
                        <FormControlLabel
                            control={
                                <FormRadio
                                    checked={
                                        formDetails.selectedType === "type2"
                                    }
                                    onChange={handleTypeChange}
                                    value="type2"
                                />
                            }
                            label={
                                <img
                                    src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                                    alt="PayPal"
                                    className="h-8 ml-3"
                                />
                            }
                            htmlFor="type2"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div>
                        <TextField
                            fullWidth
                            required
                            label="Name on card"
                            placeholder="John Smith"
                            // variant="standard"
                            variant="outlined"
                            size="small"
                            onChange={(e) =>
                                setFormDetails((prevValue) => ({
                                    ...prevValue,
                                    name: e.target.value,
                                }))
                            }
                            value={formDetails.name}
                            error={isError && formDetails.name === ""}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div>
                        <TextField
                            fullWidth
                            required
                            placeholder="Address"
                            variant="outlined"
                            label="Address"
                            // variant=""
                            size="small"
                            onChange={(e) =>
                                setFormDetails((prevValue) => ({
                                    ...prevValue,
                                    address: e.target.value,
                                }))
                            }
                            value={formDetails.address}
                            error={isError && formDetails.address === ""}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div>
                        <TextField
                            fullWidth
                            required
                            placeholder="0000 0000 0000 0000"
                            label="Card number"
                            variant="outlined"
                            size="small"
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "\\d*",
                                maxLength: 19,
                                minLength: 16,
                                onKeyPress: (event) => {
                                    if (!/[0-9 ]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                },
                            }}
                            value={formDetails.cardNumber}
                            onChange={handleCardNumberChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <i
                                            className="mdi mdi-credit-card-outline"
                                            style={{ color: "#A0AEC0" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            error={isError && formDetails.cardNumber === ""}
                        />
                    </div>
                </div>
                <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/2">
                        <label className="font-bold text-sm mb-2 ml-1">
                            Expiration date *
                        </label>
                        <div>
                            <Select
                                variant="outlined"
                                size="small"
                                defaultValue="08"
                                sx={{ width: "100%" }}
                                onChange={(e) =>
                                    setFormDetails((prevValue) => ({
                                        ...prevValue,
                                        month: e.target.value,
                                    }))
                                }
                            >
                                <MenuItem value="01">01 - January</MenuItem>
                                <MenuItem value="02">02 - February</MenuItem>
                                <MenuItem value="03">03 - March</MenuItem>
                                <MenuItem value="04">04 - April</MenuItem>
                                <MenuItem value="05">05 - May</MenuItem>
                                <MenuItem value="06">06 - June</MenuItem>
                                <MenuItem value="07">07 - July</MenuItem>
                                <MenuItem value="08">08 - August</MenuItem>
                                <MenuItem value="09">09 - September</MenuItem>
                                <MenuItem value="10">10 - October</MenuItem>
                                <MenuItem value="11">11 - November</MenuItem>
                                <MenuItem value="12">12 - December</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <Select
                            variant="outlined"
                            size="small"
                            defaultValue="2023"
                            sx={{ width: "100%" }}
                            onChange={(e) =>
                                setFormDetails((prevValue) => ({
                                    ...prevValue,
                                    year: e.target.value,
                                }))
                            }
                        >
                            <MenuItem value="2023">2023</MenuItem>
                            <MenuItem value="2024">2024</MenuItem>
                            <MenuItem value="2025">2025</MenuItem>
                            <MenuItem value="2026">2026</MenuItem>
                            <MenuItem value="2027">2027</MenuItem>
                            <MenuItem value="2028">2028</MenuItem>
                            <MenuItem value="2029">2029</MenuItem>
                            <MenuItem value="2030">2030</MenuItem>
                            <MenuItem value="2031">2031</MenuItem>
                            <MenuItem value="2032">2032</MenuItem>
                            <MenuItem value="2033">2033</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="mb-10">
                    <div>
                        <TextField
                            fullWidth
                            placeholder="000"
                            variant="outlined"
                            label="Security code"
                            size="small"
                            required
                            error={isError && formDetails.securityCode === ""}
                            onChange={(e) =>
                                setFormDetails((prevValue) => ({
                                    ...prevValue,
                                    securityCode: e.target.value,
                                }))
                            }
                            inputProps={{
                                inputMode: "numeric",
                                pattern: "\\d*",
                                maxLength: 3,
                                minLength: 3,
                                onKeyPress: (event) => {
                                    if (!/[0-9 ]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <i
                                            className="mdi mdi-credit-card-outline"
                                            style={{ color: "#A0AEC0" }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>
                <div>
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<LockOutlined className="mr-1" />}
                        className={`bg-[#0D6EFD] ${
                            formDetails.cardNumber.length < 19 ||
                            formDetails.securityCode.length < 3
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        } `}
                        onClick={handlePayNow}
                    >
                        PAY ₹{price}
                    </Button>
                </div>
            </FormContent>
        </FormContainer>
    );
};

export default PaymentScreen;
