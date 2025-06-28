import React from 'react'
import './Panel.scss'
import LineButton from '../LineButton/LineButton'

const Panel = ({ title, items, item_limit, renderItem, buttonText, isLoading, skeleton }) => {
  return (
    <div className="container">
      <div className="panel__header">
        <h2 className="panel__header__title">{title}</h2>
        {buttonText && <LineButton name={buttonText} />}
      </div>
      <div className="panel__list">
        {isLoading ? skeleton :
        items && items.slice(0, item_limit).map(renderItem)}
      </div>
    </div>
  )
}

export default Panel
