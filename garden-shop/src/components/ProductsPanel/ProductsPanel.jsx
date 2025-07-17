import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchProducts } from '@store/features/productSlice';
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
    categoryId = null

}) => {

    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.products);

    const [priceFrom, setPriceFrom] = useState('')
    const [priceTo, setPriceTo] = useState('')
    const [onlyDiscounted, setOnlyDiscounted] = useState(showOnlyDiscounted)
    const [sortMethod, setSortMethod] = useState('default')
    const [, setFavoritesVersion] = useState (0) //добавила строку

    useEffect(() => {
        if (forceReload || products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length, forceReload]);

    const getFilteredAndSortedProducts = () => {
        let filtered = [...products]

        if (showOnlyFavorites) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []
            filtered = filtered.filter(item => favorites.includes(item.id))
        }

        if (priceFrom) {
            filtered = filtered.filter(item => (item.discont_price ?? item.price) >= Number(priceFrom));
        }

        if (priceTo) {
            filtered = filtered.filter(item => (item.discont_price ?? item.price) <= Number(priceTo));
        }

        if (onlyDiscounted) {
            filtered = filtered.filter(item => item.discont_price !== null)
        }

        switch (sortMethod) {
            case 'newest':
                filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
            item_limit={item_limit}
            isLoading={loading}
            skeleton={(item_limit) => <SkeletonProduct productLimit={item_limit}/>}
            renderItem={(item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    discont_price={item.discont_price}
                    discont_percent={item.discont_percent}
                    onFavoriteToggle={() => setFavoritesVersion ((prev) => prev + 1)} 
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
    )
}

export default ProductsPanel