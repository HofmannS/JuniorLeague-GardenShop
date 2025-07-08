import React from 'react'
import ProductsPanel from "../../components/ ProductsPanel/ ProductsPanel"

const FavoritesPage = () => {
  return (
    <div className='favorites container'>
      
      <ProductsPanel
        title='Liked products'
        showOnlyFavorites={true} 
        hideDiscountFilter={true} 
      />
    </div>
  )
}

export default FavoritesPage