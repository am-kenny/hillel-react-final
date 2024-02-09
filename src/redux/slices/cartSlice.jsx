import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0
}

const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc + item.unitPrice * item.quantity;
    }, 0)
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
            state.totalPrice = calculateTotalPrice(state.items);
        },
        removeFromCart: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                state.items = state.items.filter(item => item.id !== payload);
            }
            state.totalPrice = calculateTotalPrice(state.items);
        },
        incrementQuantity: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload);
            if (item) {
                item.quantity++;
            }
            state.totalPrice = calculateTotalPrice(state.items);
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
            state.totalPrice = calculateTotalPrice(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
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