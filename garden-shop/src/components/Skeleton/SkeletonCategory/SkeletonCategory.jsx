import React from 'react';
import './SkeletonCategory.scss';

function SkeletonCategory({ categoryLimit = 4 }) {
  return (
    <>
      {Array.from({ length: categoryLimit }).map((_, index) => (
        <div key={index} className="skeleton-category__item"></div>
      ))}
    </>
  );
}

export default SkeletonCategory;
