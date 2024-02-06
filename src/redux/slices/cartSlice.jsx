import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload.id);
            if (item) {
                item.quantity++;
            } else {
                state.items.push({...payload, quantity: 1});
            }

        },
        removeFromCart: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                state.items = state.items.filter(item => item.id !== payload);
            }
        },
        incrementQuantity: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.items = state.items.filter(item => item.id !== payload);
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        }

    }
})

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart
} = cartSlice.actions;
export default cartSlice.reducer;