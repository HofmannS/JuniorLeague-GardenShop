import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@pages/HomePage/HomePage'
import Layout from '@components/Layout/Layout'
import CategoriesPage from '@pages/CategoriesPage/CategoriesPage'
import AllProductsPage from '@pages/AllProductsPage/AllProductsPage'
import CartPage from '@pages/CartPage/CartPage'
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage'
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage'
import ProductsByCategoryPage from '@pages/ProductsByCategoryPage/ProductsByCategoryPage'
import DiscountProductsPage from '@pages/DiscountProductsPage/DiscountProductsPage'
import ProductDetailsPage from '@pages/ProductDetailsPage/ProductDetailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/products' element={<AllProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/product/:productId' element={<ProductDetailsPage />} />
          <Route path='/category/:categoryId' element={<ProductsByCategoryPage />} />
          <Route path='/discount' element={<DiscountProductsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
