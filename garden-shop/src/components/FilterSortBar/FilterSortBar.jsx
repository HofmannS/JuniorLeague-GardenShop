import React from 'react'
import './FilterSortBar.scss'
import CustomSelect from '@components/FilterSortBar/CustomSelect/CustomSelect'

const FilterSortBar = ({
  priceFrom,
  setPriceFrom,
  priceTo,
  setPriceTo,
  onlyDiscounted,
  setOnlyDiscounted,
  sortMethod,
  setSortMethod,
  hideDiscountFilter = false,
}) => {
  const sortOptions = [
    { value: 'default', label: 'by default' },
    { value: 'newest', label: 'newest' },
    { value: 'price-desc', label: 'price: high-low' },
    { value: 'price-asc', label: 'price: low-high' },
  ]

  return (
    <div className="filter-sort-bar">
      <div className="filter-sort-bar__block">
        <label className="filter-sort-bar__label">Price</label>
        <input
          type="number"
          placeholder="from"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          className="filter-sort-bar__input"
        />
        <input
          type="number"
          placeholder="to"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          className="filter-sort-bar__input"
        />
      </div>

      {!hideDiscountFilter && (
        <div className="filter-sort-bar__block">
          <label className="filter-sort-bar__checkbox-label">
            <span className="filter-sort-bar__label">Discounted only</span>
            <input
              type="checkbox"
              checked={onlyDiscounted}
              onChange={(e) => setOnlyDiscounted(e.target.checked)}
              className="filter-sort-bar__checkbox"
            />
          </label>
        </div>
      )}

      <div className="filter-sort-bar__block">
        <label className="filter-sort-bar__label">Sorted</label>
        <CustomSelect
          options={sortOptions}
          value={sortMethod}
          onChange={setSortMethod}
        />
      </div>
    </div>
  )
}

export default FilterSortBar
