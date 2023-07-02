import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import pageAlertSlice from "./pageAlertSlice";
import userSlice from "./user/userSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        pageAlert: pageAlertSlice,
        user: userSlice,
        cart: cartSlice,
    },
    devTools: true,
});
