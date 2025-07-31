import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '@features/categoriesSlice';
import SkeletonCategory from '@components/Skeleton/SkeletonCategory/SkeletonCategory';
import CategoryCard from '@components/CategoryCard/CategoryCard';
import Panel from '@components/Panel/Panel';
import { useState } from 'react';

const CategoryPanel = ({ item_limit, forceReload }) => {
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector((state) => state.categories);

  const [randomCategories, setRandomCategories] = useState([])

  useEffect(() => {
    if (forceReload || categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length, forceReload]);

  useEffect(() => {
    if (categories.length > 0) {
      const shuffled = [...categories].sort(() => 0.5 - Math.random())
      const selected = shuffled.slice(0, item_limit)
      setRandomCategories(selected)
    }
  }, [categories, item_limit])

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Panel
      title="Categories"
      items={randomCategories}
      item_limit={item_limit}
      buttonText="All categories"
      link="/categories"
      isLoading={loading}
      skeleton={(item_limit) => <SkeletonCategory categoryLimit={item_limit}/>}
      renderItem={(item) => (
        <CategoryCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
        />
      )}
    />
  )
}

export default CategoryPanel