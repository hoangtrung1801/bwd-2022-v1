import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../utils/types/Product";

interface ItemCart {
    product: Product,
    amount: number,
}

interface CartState {
    items: ItemCart[]
}

const initialState: CartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Product>) => {
            if(state.items.findIndex((el : ItemCart) => el.product.id == action.payload.id) >= 0) {
                state.items.find((e: ItemCart) => e.product.id === action.payload.id)!.amount += 1;
            } else {
                state.items.push({
                    product: action.payload,
                    amount: 1
                })
            }
        },
        removeFromCart: (state: CartState, action: PayloadAction<Product>) => {
            const idx = state.items.findIndex((item: ItemCart) => item.product.id === action.payload.id);
            state.items[idx].amount = Math.max(state.items[idx].amount-1, 0);
        },
        removeProductFromCart: (state: any, action: PayloadAction<Product>) => {
            const idx = state.items.findIndex((item: ItemCart) => item.product.id === action.payload.id);
            state.items = [
                ...state.items.slice(0, idx),
                ...state.items.slice(idx+1)
            ]
        }
    }
})

export const {addToCart, removeFromCart, removeProductFromCart} =  cartSlice.actions;
export default cartSlice.reducer;