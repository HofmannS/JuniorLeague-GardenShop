import React from 'react'
import CategoryPanel from '@components/CategoryPanel/CategoryPanel'
import Banner from '@components/Banner/Banner'
import SalesPanel from '@components/SalesPanel/SalesPanel'
import DiscountForm from '../../components/DiscountForm/DiscountForm'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <CategoryPanel item__limit={4} forceReload={false}/>
        <DiscountForm />
        <SalesPanel item__limit={4}/>
    </div>
  )
}

export default HomePage