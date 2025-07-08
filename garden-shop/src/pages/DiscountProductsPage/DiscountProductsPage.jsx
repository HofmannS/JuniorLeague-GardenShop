import React from 'react'
import ProductsPanel from '@components/ ProductsPanel/ ProductsPanel'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const DiscountProductsPage = () => {
  return (
    <div className='discount__items container'>
      <Breadcrumbs/>
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