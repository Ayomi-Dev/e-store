import { configureStore } from "@reduxjs/toolkit/dist";
import cartReducer  from "./cart";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})