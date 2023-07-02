import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

const QuantityButtons = () => {
    return (
        <ButtonGroup className="mt-[30px] ">
            <Button className="rounded-[50%] ">-</Button>
            <Button className="" disabled>
                1
            </Button>
            <Button className="rounded-[50%] ">+</Button>
        </ButtonGroup>
    );
};

export default QuantityButtons;
