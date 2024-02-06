import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.jsx";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})