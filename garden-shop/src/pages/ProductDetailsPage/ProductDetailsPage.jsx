import React, { useEffect } from 'react'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import ProductDetails from '@components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '@store/features/productSlice'

const ProductDetailsPage = () => {

  const { productId } = useParams();
  const dispatch = useDispatch();


  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId))
    }
  }, [dispatch, productId]);


  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <Breadcrumbs />
      <ProductDetails
        product={product}
        loading={loading}
        error={error}
      />
    </div>
  )
}

export default ProductDetailsPage