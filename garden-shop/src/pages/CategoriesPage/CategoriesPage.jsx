import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@store/features/categoriesSlice';
import CategoryCard from '@components/CategoryCard/CategoryCard';
import Panel from '@components/Panel/Panel';
import './CategoriesPage.scss'
import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs';
import SkeletonСategory from '@components/Skeleton/SkeletonCategory/SkeletonCategory';


const CategoriesPage = () => {

  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container__categories'>
      <Breadcrumbs />
      <Panel
        title="Categories"
        link="/categories"
        items={categories}
        isLoading={loading}
        keleton={(item_limit) => <SkeletonСategory productLimit={item_limit} />}
        renderItem={(item) => (
          <CategoryCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        )}
      />
    </div>
  )

}

export default CategoriesPage