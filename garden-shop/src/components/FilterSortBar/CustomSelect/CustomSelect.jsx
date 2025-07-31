import React from 'react'
import Select from 'react-select'

const CustomSelect = ({ value, onChange, options }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: 'var(--radius-small)',
      borderColor: 'var(--color-line)',
      minHeight: '36px',
      height: '36px',
      width: '200px',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        borderColor: 'var(--color-green)',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '36px',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#424436',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 'var(--radius-small)',
      marginTop: '4px',
      padding: '4px 0',
      backgroundColor: '#FFFFF1',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      zIndex: 5,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#FFFFF1'
        : state.isFocused
          ? 'rgba(0,0,0,0.05)'
          : '#FFFFF1',
      color: state.isSelected ? '#424436' : 'var(--color-txt-muted)',
      padding: '8px 12px',
      cursor: 'pointer',
      fontSize: '16px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '4px',
      color: 'var(--color-txt-black)',
    }),
  }

  return (
    <Select
      value={options.find((option) => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      options={options}
      styles={customStyles}
      isSearchable={false}
    />
  )
}

export default CustomSelect
