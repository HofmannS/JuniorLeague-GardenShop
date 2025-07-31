import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@features/productSlice';
import Panel from '@components/Panel/Panel';
import ProductCard from '@components/ProductCard/ProductCard';
import SkeletonProduct from '@components/Skeleton/SkeletonProduct/SkeletonProduct';

const SalesPanel = ({ item_limit }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const discountedProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.discont_price !== null &&
        product.discont_price < product.price
    );
  }, [products]);

  const [randomizedProducts, setRandomizedProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (discountedProducts.length > 0) {
      const shuffled = [...discountedProducts].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, item_limit);
      setRandomizedProducts(selected);
    }
  }, [discountedProducts, item_limit]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Panel
      title="Sale"
      items={randomizedProducts}
      item_limit={item_limit}
      buttonText="All sales"
      link="/discount"
      isLoading={loading}
      skeleton={(limit) => <SkeletonProduct productLimit={limit} />}
      renderItem={(item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          discont_price={item.discont_price}
          discont_percent={item.discont_percent}
        />
      )}
    />
  );
};

export default SalesPanel;
