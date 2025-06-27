import React from 'react'
import './Skeleton.scss'

function Skeleton() {
  return (
    <div className="skeleton_category_list">
  {Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className="skeleton_category_item"></div>
  ))}
</div>
  )
}

export default Skeleton