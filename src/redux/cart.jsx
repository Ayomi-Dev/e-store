import { createSlice } from "@reduxjs/toolkit/dist";


const initialState = {
    cartItems: [],
    totalQty: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItems: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload.id);
            if(!cartItem){
                state.cartItems.push(action.payload)
                state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0)
                state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.total, 0)

            }
            else{
                console.log("found");
                return;
            }
        },

        removeItems: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.total, 0)
            
        },

        increaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[itemIndex].quantity = state.cartItems[itemIndex].quantity + 1
            state.cartItems[itemIndex].total = Math.round((state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price) * 100 ) / 100
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0)
            state.totalPrice = Math.round((state.cartItems.reduce((acc, item) => acc + item.total, 0))* 100) / 100
        },

        decreaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[itemIndex].quantity = Math.max(1, state.cartItems[itemIndex].quantity - 1);
            state.cartItems[itemIndex].total = Math.round((state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price) * 100 ) / 100;
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = Math.round((state.cartItems.reduce((acc, item) => acc + item.total, 0))* 100) / 100
        }
    }
});

export const {addItems, removeItems, decreaseQty, increaseQty} = cartSlice.actions;

export default cartSlice.reducer;