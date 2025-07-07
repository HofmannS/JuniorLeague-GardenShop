import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchProducts } from '@store/features/productSlice';
import Panel from '@components/Panel/Panel';
import ProductCard from '@components/ProductCard/ProductCard';
import SkeletonProduct from '@components/Skeleton/SkeletonProduct/SkeletonProduct';
import FilterSortBar from '@components/FilterSortBar/FilterSortBar';

const ProductsPanel = ({ 
    item__limit, 
    customProducts = null, 
    title = 'All products'  
}) => {
    const dispatch = useDispatch();

    const { products: allProducts, loading, error } = useSelector((state) => state.products);
    const products = customProducts !== null ? customProducts : allProducts;
    


    const [priceFrom, setPriceFrom] = useState('')
    const [priceTo, setPriceTo] = useState('')
    const [onlyDiscounted, setOnlyDiscounted] = useState(false)
    const [sortMethod, setSortMethod] = useState('default')

    useEffect(() => {
        if (!customProducts && allProducts.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, allProducts.length, customProducts]);

    const getFilteredAndSortedProducts = () => {
        let filtered = [...products]

        if (priceFrom) {
            filtered = filtered.filter(item => item.price >= Number(priceFrom))
        }

        if (priceTo) {
            filtered = filtered.filter(item => item.price <= Number(priceTo))
        }

        if (onlyDiscounted) {
            filtered = filtered.filter(item => item.discont_price !== null)
        }

        switch (sortMethod) {
            case 'alphabet':
                filtered.sort((a, b) => a.title.localeCompare(b.title))
                break
            case 'price-asc':
                filtered.sort((a, b) => (a.discont_price ?? a.price) - (b.discont_price ?? b.price))
                break
            case 'price-desc':
                filtered.sort((a, b) => (b.discont_price ?? b.price) - (a.discont_price ?? a.price))
                break
            default:
                break
        }

        return filtered
    }

    const filteredAndSortedProducts = getFilteredAndSortedProducts()


    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <Panel
            title={title}
            items={filteredAndSortedProducts}
            item_limit={item__limit}
            isLoading={!customProducts && loading}
            skeleton={<SkeletonProduct products__limit={item__limit} />}
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
    )
}

export default ProductsPanel