import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.jsx";
import menuReducer from "./slices/menuSlice.jsx";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        menu: menuReducer,
    }
})