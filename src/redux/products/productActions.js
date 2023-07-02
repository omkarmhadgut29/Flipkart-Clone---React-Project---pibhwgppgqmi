import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const { data } = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    // console.log("data: ");
    // console.log(data);
    let newData = data.map((product) => {
        product.price = Number(product.price * 82).toFixed(0);
        return product;
    });
    // console.log(newData);
    return newData;
});
