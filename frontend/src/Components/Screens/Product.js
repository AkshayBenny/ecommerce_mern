import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../products'
import Rating from '../Rating'

function Product({ match }) {
  const product = products.find((item) => item._id === match.params.id)
  return (
    <div className=' md:grid md:grid-cols-3 gap-x-4 px-60 pt-20'>
      <div className='bg-gray-500'>
        <img
          src={product.image}
          alt='product'
          className='object-cover h-96 md:h-full w-screen'
        />
      </div>
      <div className='p-6 '>
        <p className='font-light text-3xl md:font-thin md:text-6xl  pb-10 md:pb-20'>
          {product.name}
        </p>
        <div className='border-t-2 border-b-2 py-4'>
          {' '}
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <div className='border-b-2 py-4 text-4xl font-light text-gray-800'>
          <p>{product.price} $</p>
        </div>

        <div className='py-10 text-left text-lg text-gray-600 leading-8 '>
          <p>{product.description}</p>
        </div>
      </div>

      <div className='md:pt-10 md:w-11/12 md:h-1/2 md:ml-6'>
        <div className='flex item-center justify-between border text-2xl font-thin p-4'>
          <div>
            <p>Price:</p>
          </div>
          <div>
            <p>${product.price}</p>
          </div>
        </div>

        <div className='flex item-center justify-between border text-2xl font-thin p-4'>
          <div>
            <p>Status:</p>
          </div>
          <div>
            <p>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
          </div>
        </div>
        <div className='p-6 flex justify-center items-center border'>
          <div className='flex items-center'>
            <Link to='/cart'>
              <button className='inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-white bg-gray-800  mx-6 border-gray-700 border-2'>
                Add to cart
              </button>
            </Link>

            <Link to='/'>
              <p className='inline-flex items-center justify-center px-9 py-3  text-base font-medium rounded-md text-gray-800 bg-white border-gray-700 border-2 box-border  mx-6'>
                Cancel
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
