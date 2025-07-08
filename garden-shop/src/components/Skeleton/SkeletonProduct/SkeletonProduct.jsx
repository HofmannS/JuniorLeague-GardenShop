import React from 'react'
import './SkeletonProduct.scss'

function SkeletonProduct({products__limit}) {
  return (
    <div className="skeleton__category__list">
  {Array.from({ length: products__limit }).map((_, index) => (
    <div key={index} className="skeleton__product__item"></div>
  ))}
</div>
  )
}

export default SkeletonProduct