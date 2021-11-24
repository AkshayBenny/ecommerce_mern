import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-gray-800 flex items-center justify-between h-16 md:h-20'>
      <div className='text-gray-50 font-bold font text-2xl md:text-4xl md:pl-60'>
        <Link className='pl-6 uppercase' to='/'>
          ProShop
        </Link>
      </div>
      <div className='md:pr-60 pr-6'>
        <ul className='uppercase text-gray-400 flex'>
          <li className='md:pr-16 pr-6'>
            <Link to='/cart'>Cart</Link>
          </li>
          <li className=''>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
