import React from 'react'
import { SlHandbag, SlHeart } from "react-icons/sl";

const Icons = () => {
  return (
    <div className='icons'>
        <button className='icons__favorite'><SlHeart size={38}  /></button>
        <button className='icons__cart'><SlHandbag size={38} /></button>
    </div>
  )
}

export default Icons