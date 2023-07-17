import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentScreen from "./PaymentScreen";

function PaymentRequest() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!location?.state?.isPayment) {
            navigate("/404");
        }
    }, [location?.state?.isPayment, navigate]);
    const price = location?.state?.price;
    return location?.state?.isPayment && <PaymentScreen price={price} />;
}

export default PaymentRequest;
