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
    hideDiscountFilter = false
}) => {

    const sortOptions = [
        { value: 'default', label: 'by default' },
        { value: 'newest', label: 'newest' },
        { value: 'price-desc', label: 'price: high-low' },
        { value: 'price-asc', label: 'price: low-high' },
    ]

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
