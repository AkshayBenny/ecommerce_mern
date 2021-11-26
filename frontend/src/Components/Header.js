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
            <Link to='/cart'>
              <div className='flex items-center justify-center'>
                <div className='pr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path
                      d='M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
                      fill='rgba(191,191,191,1)'
                    />
                  </svg>
                </div>
                <div>Cart</div>
              </div>
            </Link>
          </li>
          <li className=''>
            <Link to='/login'>
              <div className='flex items-center justify-center'>
                <div className='pr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path
                      d='M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z'
                      fill='rgba(194,194,194,1)'
                    />
                  </svg>
                </div>
                <div>Login</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
