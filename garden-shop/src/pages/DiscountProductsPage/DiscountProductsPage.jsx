import React from 'react'
import ProductsPanel from '@components/ ProductsPanel/ ProductsPanel'
const DiscountProductsPage = () => {
  return (
    <div className='discount__items container'>
      <ProductsPanel
        title='Discounted items'
        // item__limit={20}
        showOnlyDiscounted={true}
        hideDiscountFilter={true}
      />
    </div>
  )
}

export default DiscountProductsPage