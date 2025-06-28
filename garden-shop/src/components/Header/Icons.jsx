import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

const Icons = () => {
  return (
    <div className='icons'>
        <button className='icons__favorite'><FaRegHeart /></button>
        <button className='icons__cart'><SlHandbag /></button>
    </div>
  )
}

export default Icons