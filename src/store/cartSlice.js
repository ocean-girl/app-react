import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      
    },
    removeById: (state, action) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeById }= cartSlice.actions //siempre exportar las funciones

export default cartSlice.reducer //se usa en el store