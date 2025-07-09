import React from 'react'
import ProductsPanel from "@components/ProductsPanel/ProductsPanel"
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

const FavoritesPage = () => {
  return (
    <div className='favorites container'>
      <Breadcrumbs />
      <ProductsPanel
        title='Liked products'
        showOnlyFavorites={true} 
        hideDiscountFilter={true}
        from='favorites'
      />
    </div>
  )
}

export default FavoritesPage