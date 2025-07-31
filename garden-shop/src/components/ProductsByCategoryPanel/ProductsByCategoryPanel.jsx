import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@features/productSlice';
import Panel from '@components/Panel/Panel';
import ProductCard from '@components/ProductCard/ProductCard';
import SkeletonProduct from '@components/Skeleton/SkeletonProduct/SkeletonProduct';
import FilterSortBar from '@components/FilterSortBar/FilterSortBar';

const ProductsByCategoryPanel = ({
  item_limit,
  customProducts = null,
  title = 'All products',
  from = null,
  categoryId = null,
  isLoading = false,
  error = null,
}) => {
  const dispatch = useDispatch();
  const { products: allProducts } = useSelector((state) => state.products);

  const products = customProducts || allProducts;

  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);
  const [sortMethod, setSortMethod] = useState('default');

  useEffect(() => {
    if (!customProducts && allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, customProducts, allProducts.length]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (priceFrom) {
      result = result.filter((item) => item.price >= Number(priceFrom));
    }

    if (priceTo) {
      result = result.filter((item) => item.price <= Number(priceTo));
    }

    if (onlyDiscounted) {
      result = result.filter((item) => item.discont_price !== null);
    }

    switch (sortMethod) {
      case 'alphabet':
        result.sort((a, b) => a.title.localeCompare(b.title));
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
  }, [products, priceFrom, priceTo, onlyDiscounted, sortMethod]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Panel
      title={title}
      items={filteredAndSortedProducts}
      item_limit={item_limit}
      isLoading={isLoading}
      skeleton={(limit) => <SkeletonProduct productsLimit={limit} />}
      renderItem={(item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          discont_price={item.discont_price}
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
      />
    </Panel>
  );
};

export default ProductsByCategoryPanel;
