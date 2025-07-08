import React from 'react'
import ProductsPanel from '@components/ ProductsPanel/ ProductsPanel'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const DiscountProductsPage = () => {
  return (
    <div className='discount__items container'>
      <Breadcrumbs/>
      <ProductsPanel
        title='Discounted items'
        // item_limit ={20}
        showOnlyDiscounted={true}
        hideDiscountFilter={true}
      />
    </div>
  )
}

export default DiscountProductsPage