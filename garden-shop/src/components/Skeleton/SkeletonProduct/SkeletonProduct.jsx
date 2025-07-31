import React from 'react'
import './SkeletonProduct.scss'

function SkeletonProduct({productLimit = 10}) {
  return (
    <>
    {Array.from({ length: productLimit }).map((_, index) => (
      <div className="skeleton-product__item" key={index}></div>
    ))}
  </>
  )
}

export default SkeletonProduct