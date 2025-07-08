import React from 'react'
import ProductsPanel from '@components/ ProductsPanel/ ProductsPanel'

const DiscountProductsPage = () => {
  return (
    <div className='discount__items container'>
      <ProductsPanel
        title='Discounted items'
        showOnlyDiscounted={true}
        hideDiscountFilter={true}
        forceReload={true}
      />
    </div>
  )
}

export default DiscountProductsPage