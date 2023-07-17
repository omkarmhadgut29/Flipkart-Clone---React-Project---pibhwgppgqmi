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
        addQuantity: (state, action) => {
            const cartItems = { ...state.cart };
            cartItems[action.payload].quantity += 1;
            state.cart = cartItems;
            localStorage.setItem("cart", JSON.stringify(cartItems));
        },
        removeQuantity: (state, action) => {
            const cartItems = { ...state.cart };
            cartItems[action.payload].quantity -= 1;
            state.cart = cartItems;
            localStorage.setItem("cart", JSON.stringify(cartItems));
        },
    },
});

export const cartSelector = createSelector(
    (state) => state.cart.cart,
    (state) => state
);

export const {
    addToCart,
    deleteFromCart,
    deleteAllCartItems,
    addQuantity,
    removeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
