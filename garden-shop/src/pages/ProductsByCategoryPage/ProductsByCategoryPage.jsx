import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '@store/features/productSlice';
import ProductsByCategoryPanel from '@components/ProductsByCategoryPanel/ProductsByCategoryPanel';

const ProductsByCategoryPage = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();

    const { productsByCategory, categoryTitle, loading, error } = useSelector(state => state.products);

     useEffect(() => {
        dispatch(fetchProductsByCategory(categoryId))
    }, [dispatch, categoryId])

    
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

    return (
        <ProductsByCategoryPanel
          customProducts={productsByCategory}
          title={categoryTitle}
        />
    );
};

export default ProductsByCategoryPage;
