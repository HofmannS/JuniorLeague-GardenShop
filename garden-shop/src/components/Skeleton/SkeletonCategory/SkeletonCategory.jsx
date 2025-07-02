import React from 'react'
import '@SkeletonCategory.scss'

function SkeletonCategory({category__limit}) {
  return (
    <div className="skeleton__category__list">
  {Array.from({ length: category__limit }).map((_, index) => (
    <div key={index} className="skeleton__category__item"></div>
  ))}
</div>
  )
}

export default SkeletonCategory