import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../utils/types/Product";

interface CartState {
    items: Product[]
}

const initialState: CartState = {
    items: []
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            state.items = [
                ...state.items,
                action.payload
             ]
        },
        removeItem: (state, action: PayloadAction<Product>) => {
            const idx = state.items.findIndex(item => item.id === action.payload.id);
            state.items = {
                ...state.items.slice(0, idx),
                ...state.items.slice(idx+1)
            }
        },
    }
})

export const {addItem, removeItem} =  counterSlice.actions;