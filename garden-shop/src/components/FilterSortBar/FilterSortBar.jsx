import React from 'react'
import './FilterSortBar.scss'

const FilterSortBar = ({
    priceFrom,
    setPriceFrom,
    priceTo,
    setPriceTo,
    onlyDiscounted,
    setOnlyDiscounted,
    sortMethod,
    setSortMethod,
    hideDiscountFilter = false
}) => {
    return (
        <div className="filter__sort-bar">
            <div className="filter__sort-bar__container">
                <p className='filter__sort-bar__container__titles'>Price</p>
                <input
                    type="number"
                    placeholder="from"
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="to"
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                />
            </div>
            {!hideDiscountFilter && (
                <div className="filter__sort-bar__container">
                    <label>
                        <p className='filter__sort-bar__container__titles'>Discounted only</p>
                        <input
                            type="checkbox"
                            checked={onlyDiscounted}
                            onChange={(e) => setOnlyDiscounted(e.target.checked)}
                        />
                    </label>
                </div>
            )}
            <div className="filter__sort-bar__container">
                <p className='filter__sort-bar__container__titles'>Sorted</p>
                <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)}>
                    <option value="default">by default</option>
                    <option value="alphabet">By alphabet</option>
                    <option value="price-asc">By price ↑</option>
                    <option value="price-desc">By price ↓</option>
                </select>
            </div>
        </div>
    )
}

export default FilterSortBar
