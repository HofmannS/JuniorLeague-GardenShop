import React from 'react'
import CategoryPanel from '../../components/CategoryPanel/CategoryPanel'
import Banner from '../../components/Banner/Banner'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <CategoryPanel item__limit={4}/>
    </div>
  )
}

export default HomePage