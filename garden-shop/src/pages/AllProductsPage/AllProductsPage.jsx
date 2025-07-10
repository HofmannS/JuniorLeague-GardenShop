import React from 'react'
import ProductsPanel from '@components/ProductsPanel/ProductsPanel'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

const AllProductsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <ProductsPanel title='All products' forceReload={true} />
    </div>
  )
}

export default AllProductsPage