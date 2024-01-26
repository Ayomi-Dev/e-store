import { createSlice } from "@reduxjs/toolkit/dist";
import { toast } from "react-toastify";
import { productsData } from "../assets/data/ProductData";

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
                //calculating total number of items in the cart selected by a user
                state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0);
       
                //calculating total price of all items in the cart
                state.totalPrice = Math.round(state.cartItems.reduce((acc, item) => acc + item.total, 0) * 100) / 100;

                //saving items added to cart in the user's browser local storage
                const cartItemData = state.cartItems.map((item) => ({
                    id: item.id,
                    quantity: item.quantity
                }))
                localStorage.setItem('cartItems', JSON.stringify(cartItemData));

                //updating total prices and quantities of items in the local storage whenever a new item is added 
                localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
                localStorage.setItem('totalQty', JSON.stringify(state.totalQty))

                toast.success('Item added to your cart');
            }
            else{
                toast.warning('Item already added to cart');
                return;
            }
        },

        removeItems: (state, action) => {
            //removing item selected by the user from cart
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

            //updating number of quantities of remaining items in the cart whenever user removes an item
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0);

            //updating total prices of items remaining in cart whenver user removes an item
            state.totalPrice = Math.round(state.cartItems.reduce((acc, item) => acc + item.total, 0) * 100) / 100;

            //saving the updated state of the cart in the local storage
            const cartItemData = state.cartItems.map((item) => ({
                id: item.id,
                quantity: item.quantity
            }))
            localStorage.setItem('cartItems', JSON.stringify(cartItemData));

            //updating total prices and quantities of items stored in the local storage whwnever an item is removed
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
            localStorage.setItem('totalQty', JSON.stringify(state.totalQty));

            toast.error('Item removed from cart');
        },

        increaseQty: (state, action) => {
            //finding index of individaul item selected by a user
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            //increasing quantity of the individual item selected by 1
            state.cartItems[itemIndex].quantity = state.cartItems[itemIndex].quantity + 1

            //calculating the price of the item selected based on the number of quantities
            state.cartItems[itemIndex].total = Math.round((state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price) * 100 ) / 100;

            //updating quantity increase of items in the cart in the local storage
            const updateCartItems = [...state.cartItems]
            localStorage.setItem('cartItems', JSON.stringify(updateCartItems))

            //recalculatiing the total quantities of all items in the cart whenever user increases the quantity of an item
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0)

            //recalculatiing the total price of all items in the cart whenever user increases the quantity of an item
            state.totalPrice = Math.round((state.cartItems.reduce((acc, item) => acc + item.total, 0))* 100) / 100;

            //updating total prices and quantities of all items in the local storage
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
            localStorage.setItem('totalQty', JSON.stringify(state.totalQty))
        },

        decreaseQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[itemIndex].quantity = Math.max(1, state.cartItems[itemIndex].quantity - 1);
            state.cartItems[itemIndex].total = Math.round((state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price) * 100 ) / 100;

            //updating quantity decrease of items in the cart in the local storage
            const updateCartItems = [...state.cartItems]
            localStorage.setItem('cartItems', JSON.stringify(updateCartItems))

            //recalculatiing the total price of all items in the cart whenever user decreases the quantity of an item
            state.totalQty = state.cartItems.reduce((total, item) => total + item.quantity, 0);

            //recalculatiing the total price of all items in the cart whenever user decreases the quantity of an item
            state.totalPrice = Math.round((state.cartItems.reduce((acc, item) => acc + item.total, 0))* 100) / 100;

            //updating total prices and quantities in the local storage whenever there is a change
            localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
            localStorage.setItem('totalQty', JSON.stringify(state.totalQty));
        },

        chooseSize: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[itemIndex].size = action.payload

        },
        
        //initialize cartItems from local storage
        initCartFromLocalStorage: (state) => {
            //retrieving the items stored from the local storage on browser referesh
            const cartItemDatas = JSON.parse(localStorage.getItem('cartItems')) || []
            const itemPrices = JSON.parse(localStorage.getItem('totalPrice'))
            const itemQuantities = JSON.parse(localStorage.getItem('totalQty'))
            //setting the cart to items retrieved from the browser's storage
            state.cartItems = cartItemDatas.map(itemData => {

                //matching item retrieved from local storage to the original item from data source
                const originalItem = productsData.find(item => item.id === itemData.id)
                
                return {
                    ...originalItem,
                    quantity: itemData.quantity
                }
                
            });

            state.totalPrice = itemPrices;
            state.totalQty = itemQuantities;
            
        }

    }
});

export const {addItems, removeItems, decreaseQty, increaseQty, chooseSize, initCartFromLocalStorage} = cartSlice.actions;

export default cartSlice.reducer;