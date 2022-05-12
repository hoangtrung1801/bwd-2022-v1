import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../utils/types/Product";

interface CartState {
    items: Product[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items = [
                ...state.items,
                action.payload
             ]
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const idx = state.items.findIndex(item => item.id === action.payload.id);
            state.items = {
                ...state.items.slice(0, idx),
                ...state.items.slice(idx+1)
            }
        },
        cartTest: (state) => {
            console.log('test');
        }
    }
})

export const {addToCart, removeFromCart, cartTest} =  cartSlice.actions;
export default cartSlice.reducer;