import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productActions";

const initialState = {
    isLoading: false,
    data: null,
    isError: false,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.data.price = action.payload.price * 82.08;
            state.isLoading = false;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error: ", action.payload);
            state.isError = true;
        });
    },
});

export const productSelector = createSelector(
    (state) => state.product.data,
    (state) => state
);

export default productSlice.reducer;
