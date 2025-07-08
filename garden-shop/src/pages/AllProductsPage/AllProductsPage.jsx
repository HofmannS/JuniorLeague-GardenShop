import React from 'react'
import ProductPanel from '@components/ProductsPanel/ProductsPanel'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

const AllProductsPage = () => {
  return (
    <div>
      <Breadcrumbs />
      <ProductPanel />
    </div>
  )
}

export default AllProductsPage