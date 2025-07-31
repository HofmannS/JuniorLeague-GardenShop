import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@features/productSlice';
import Panel from '@components/Panel/Panel';
import ProductCard from '@components/ProductCard/ProductCard';
import SkeletonProduct from '@components/Skeleton/SkeletonProduct/SkeletonProduct';
import FilterSortBar from '@components/FilterSortBar/FilterSortBar';

const ProductsPanel = ({
  item_limit,
  showOnlyDiscounted = false,
  showOnlyFavorites = false,
  hideDiscountFilter = false,
  title,
  forceReload = false,
  from = null,
  categoryId = null,
}) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const favorites = useSelector((state) => state.favorites);

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [onlyDiscounted, setOnlyDiscounted] = useState(showOnlyDiscounted);
  const [sortMethod, setSortMethod] = useState('default');

  useEffect(() => {
    if (forceReload || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, forceReload, products.length]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (showOnlyFavorites) {
      result = result.filter((item) => favorites.includes(item.id));
    }

    if (priceFrom) {
      result = result.filter(
        (item) => (item.discont_price ?? item.price) >= Number(priceFrom)
      );
    }

    if (priceTo) {
      result = result.filter(
        (item) => (item.discont_price ?? item.price) <= Number(priceTo)
      );
    }

    if (onlyDiscounted) {
      result = result.filter((item) => item.discont_price !== null);
    }

    switch (sortMethod) {
      case 'newest':
        result.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case 'price-asc':
        result.sort(
          (a, b) =>
            (a.discont_price ?? a.price) - (b.discont_price ?? b.price)
        );
        break;
      case 'price-desc':
        result.sort(
          (a, b) =>
            (b.discont_price ?? b.price) - (a.discont_price ?? a.price)
        );
        break;
      default:
        break;
    }

    return result;
  }, [products, favorites, priceFrom, priceTo, onlyDiscounted, sortMethod, showOnlyFavorites]);

  if (error) return <div>Error: {error}</div>;

  return (
    <Panel
      title={title}
      items={filteredAndSortedProducts}
      item_limit={item_limit}
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
          from={from}
          categoryId={categoryId}
        />
      )}
    >
      <FilterSortBar
        priceFrom={priceFrom}
        setPriceFrom={setPriceFrom}
        priceTo={priceTo}
        setPriceTo={setPriceTo}
        onlyDiscounted={onlyDiscounted}
        setOnlyDiscounted={setOnlyDiscounted}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        hideDiscountFilter={hideDiscountFilter}
      />
    </Panel>
  );
};

export default ProductsPanel;
