import React from 'react'
import ProductPanel from '@components/ProductsPanel/ProductsPanel'

const AllProductsPage = () => {
  return (
    <div>
      <ProductPanel title='All products' forceReload={true} />
    </div>
  )
}

export default AllProductsPage