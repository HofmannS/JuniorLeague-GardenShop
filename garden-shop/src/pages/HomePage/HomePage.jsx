import React from 'react'
import CategoryPanel from '@components/CategoryPanel/CategoryPanel'
import Banner from '@components/Banner/Banner'
import SalesPanel from '@components/SalesPanel/SalesPanel'
import DiscountForm from '@components/DiscountForm/DiscountForm'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <CategoryPanel item_limit={4} forceReload={false}/>
        <DiscountForm />
        <SalesPanel item_limit={4} forceReload={false}/>
    </div>
  )
}

export default HomePage