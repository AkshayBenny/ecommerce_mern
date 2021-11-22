import React from 'react'
import { products } from '../products'
import Rating from './Rating'

function Card() {
  return (
    <>
      {products.map((item) => {
        return (
          <div
            className='card hover:shadow-md transition ease-in duration-300 p-4'
            key={item._id}
          >
            <img
              src={item.image}
              className='w-full h-60 object-cover rounded-xl'
              alt='product'
            />
            <div className='p-4'>
              <div className='text-gray-600 text-xl md:text-2xl'>
                {item.name}
              </div>
              <div className='py-3'>
                <Rating
                  value={item.rating}
                  text={`${item.numReviews} reviews`}
                />
              </div>
              <div className='text-2xl md:text-3xl  text-gray-700 pt-6'>
                {item.price} $
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Card
