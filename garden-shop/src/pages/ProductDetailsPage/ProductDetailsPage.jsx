import React, { useEffect } from 'react'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'
import ProductDetails from '@components/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '@features/productSlice'

const ProductDetailsPage = () => {

  const { productId } = useParams();
  const dispatch = useDispatch();


  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId))
    }
  }, [dispatch, productId]);

  const handleAddToCart = (quantity) => {
    if (!product || !product.image) return


    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      discont_price: product.discont_price,
      image: product.image,
      quantity,
    }


    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const foundIndex = currentCart.findIndex(item => item.id === newItem.id)

    if (foundIndex !== -1) {
      currentCart[foundIndex].quantity += quantity
    } else {
      currentCart.push(newItem)
    }
    localStorage.setItem('cart', JSON.stringify(currentCart))

    window.dispatchEvent(new Event('cartUpdated'))
  }

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <Breadcrumbs />
      <ProductDetails
        product={product}
        loading={loading}
        error={error}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default ProductDetailsPage