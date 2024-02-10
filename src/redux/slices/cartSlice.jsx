import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0
}

const calculateTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc + item.totalPrice;
    }, 0)
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const item = state.items.find(item => item.pizzaId === payload.id);
            if (item) {
                item.quantity++;
                item.totalPrice = item.unitPrice * item.quantity;
            } else {
                state.items.push({
                    id: payload.id,
                    pizzaId: payload.id,
                    name: payload.name,
                    quantity: 1,
                    unitPrice: payload.unitPrice,
                    totalPrice: payload.unitPrice,
                    ingredients: payload.ingredients
                });
            }
            state.totalPrice = calculateTotalPrice(state.items);
        },
        removeFromCart: (state, {payload}) => {
            const item = state.items.find(item => item.pizzaId === payload);
            if (item) {
                state.items = state.items.filter(item => item.pizzaId !== payload);
            }
            state.totalPrice = calculateTotalPrice(state.items);
        },
        incrementQuantity: (state, {payload}) => {
            const item = state.items.find(item => item.pizzaId === payload);
            if (item) {
                item.quantity++;
                item.totalPrice = item.unitPrice * item.quantity;
            }
            state.totalPrice = calculateTotalPrice(state.items);
        },
        decrementQuantity: (state, {payload}) => {
            const item = state.items.find(item => item.pizzaId === payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                    item.totalPrice = item.unitPrice * item.quantity;
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