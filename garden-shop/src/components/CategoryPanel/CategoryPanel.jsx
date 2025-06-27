import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../store/features/categoriesSlice';
import Skeleton from '../Skeleton/Skeleton';
import "./CategoryPanel.scss"
import Category from '../Category/Category';
const CategoryPanel = () => {
    const dispatch = useDispatch();

    const { categories, loading, error } = useSelector((state) => state.categories);

    useEffect(()=>{
        dispatch(fetchCategories());
    }, [dispatch]);

    
      if (error) {
        return <div>Error: {error}</div>;
      }

  return (
    <div className='container'>
        <div className="category_panel_header">
            <h2 className='category_panel_header_title'>Categories</h2>
            <div className="button_container">
            <div className="header_line"></div>
            <button>All categories</button>
            </div>
        </div>
        <div className="category_panel_list">
            {loading ? <Skeleton /> : 
            categories && categories.map((item, index) => (
                <Category
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}/>
            ))}
            {/* <Skeleton /> */}
        </div>
    </div>
  )
}

export default CategoryPanel