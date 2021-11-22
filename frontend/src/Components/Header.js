import React from 'react'

function Header() {
  return (
    <div className='bg-gray-800 flex items-center justify-between h-16 md:h-20'>
      <div className='text-gray-50 font-bold font text-2xl md:text-4xl'>
        <a className='pl-6 uppercase' href='/'>
          ProShop
        </a>
      </div>
      <div>
        <ul className='uppercase text-gray-400 flex'>
          <li className='px-2'>
            <a href='/cart'>Cart</a>
          </li>
          <li className='pr-6 pl-2'>
            <a href='/signin'>Login</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
