import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, removeQuantity } from "../../redux/cartSlice";

const QuantityButtons = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddQuantity = () => {
        dispatch(addQuantity(product.id));
    };

    const handleRemoveQuantity = () => {
        dispatch(removeQuantity(product.id));
    };

    return (
        <ButtonGroup className="mt-[30px] ">
            <Button
                className={`rounded-[50%] ${
                    product.quantity === 1 && "opacity-50 cursor-not-allowed"
                } `}
                disabled={product.quantity === 1}
                onClick={handleRemoveQuantity}
            >
                -
            </Button>
            <Button className="" disabled>
                {product.quantity}
            </Button>
            <Button className="rounded-[50%] " onClick={handleAddQuantity}>
                +
            </Button>
        </ButtonGroup>
    );
};

export default QuantityButtons;
