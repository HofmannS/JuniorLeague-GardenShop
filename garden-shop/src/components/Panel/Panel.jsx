import React from 'react'
import './Panel.scss'
import LineButton from '@components/LineButton/LineButton'

const Panel = ({ title, items, item_limit, renderItem, buttonText, link,  isLoading, skeleton, children }) => {
  
  const visibleItems = item_limit ? items.slice(0, item_limit) : items
  
  return (
    <div className="container">
      <div className="panel__header">
        <h2 className="panel__header__title">{title}</h2>
        {buttonText && <LineButton name={buttonText} link={link}/>}
      </div>
      {children}
      <div className="panel__list">
        {isLoading ? skeleton(item_limit) :
        visibleItems.map(renderItem)}
      </div>
    </div>
  )
}

export default Panel
