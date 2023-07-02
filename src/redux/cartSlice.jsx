import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || {},
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.cart[product.id] = { ...product, quantity: 1 };
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        deleteFromCart: (state, action) => {
            const productArray = Object.values(state.cart);
            if (productArray.length === 1) {
                localStorage.removeItem("cart");
                state.cart = {};
            } else if (productArray.length > 1) {
                const newcartItems = { ...state.cart };
                delete newcartItems[action.payload];
                state.cart = newcartItems;
                localStorage.setItem("cart", JSON.stringify(newcartItems));
            }
        },
        deleteAllCartItems: (state) => {
            localStorage.removeItem("cart");
            state.cart = {};
        },
    },
});

export const cartSelector = createSelector(
    (state) => state.cart.cart,
    (state) => state
);

export const { addToCart, deleteFromCart, deleteAllCartItems } =
    cartSlice.actions;

export default cartSlice.reducer;
