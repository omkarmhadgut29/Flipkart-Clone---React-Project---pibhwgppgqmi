import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const { data } = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    let newData = data.map((product) => {
        product.price = Number(product.price * 82).toFixed(0);
        return product;
    });
    return newData;
});
