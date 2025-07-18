import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('favorites')) || []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const index = state.indexOf(action.payload)
      if (index > -1) {
        state.splice(index, 1)
      } else {
        state.push(action.payload)
      }
      localStorage.setItem('favorites', JSON.stringify(state))
    }
  }
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
