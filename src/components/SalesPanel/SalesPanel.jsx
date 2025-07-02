import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import { fetchProducts } from '../../store/features/productSlice';
import Panel from '../Panel/Panel';
import ProductCard from '../ProductCard/ProductCard';
import { useMemo } from 'react';

const SalesPanel = ({ item__limit }) => {
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
      console.log('Products: ',products);
      console.log('Discounted Products: ',discontedProducts);
      
    useEffect(() => {
        if (discontedProducts.length > 0) {
            const shuffled = [...discontedProducts].sort(() => 0.5 - Math.random())
            const selected = shuffled.slice(0, item__limit)
            setRandomDiscontedProducts(selected)
        }
    }, [discontedProducts, item__limit])

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <Panel
            title="Sale"
            items={randomDiscontedProducts}
            item_limit={item__limit}
            buttonText="All sales"
            isLoading={loading}
            // skeleton={<SkeletonProducts products__limit={item__limit} />}
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