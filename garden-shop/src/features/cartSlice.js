import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        const { id, quantity = 1 } = action.payload
        const existing = state.find(item => item.id === id)
      
        if (existing) {
          existing.quantity += quantity
        } else {
          state.push({ ...action.payload, quantity })
        }
      
        localStorage.setItem('cart', JSON.stringify(state))
      },
    removeFromCart(state, action) {
      const updated = state.filter(item => item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(updated))
      return updated
    },
    increaseQuantity(state, action) {
      const item = state.find(item => item.id === action.payload)
      if (item) item.quantity += 1
      localStorage.setItem('cart', JSON.stringify(state))
    },
    decreaseQuantity(state, action) {
      const item = state.find(item => item.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
      localStorage.setItem('cart', JSON.stringify(state))
    },
    clearCart() {
      localStorage.removeItem('cart')
      return []
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer