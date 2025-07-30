import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchProducts } from '@features/productSlice';
import Panel from '@components/Panel/Panel';
import ProductCard from '@components/ProductCard/ProductCard';
import { useMemo } from 'react';
import SkeletonProduct from '@components/Skeleton/SkeletonProduct/SkeletonProduct';

const SalesPanel = ({ item_limit }) => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.products);

    const discontedProducts = useMemo(() => {
        return products.filter(product =>
          product.discont_price !== null && product.discont_price < product.price
        );
      }, [products]);
      

    const [randomDiscontedProducts, setRandomDiscontedProducts] = useState([])

    useEffect(() => {
        if (products.length === 0) {
          dispatch(fetchProducts());
        }
      }, [dispatch, products.length]);
      
    useEffect(() => {
        if (discontedProducts.length > 0) {
            const shuffled = [...discontedProducts].sort(() => 0.5 - Math.random())
            const selected = shuffled.slice(0, item_limit)
            setRandomDiscontedProducts(selected)
        }
    }, [discontedProducts, item_limit])

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <Panel
            title="Sale"
            items={randomDiscontedProducts}
            item_limit={item_limit}
            buttonText="All sales"
            link="/discount"
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
                    
                />
            )}
        />
    )
}

export default SalesPanel