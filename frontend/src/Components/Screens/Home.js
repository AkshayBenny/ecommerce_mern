import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
import { listProducts } from '../../actions/productActions'
import Loader from '../Loader'
import Message from '../Message'

function Home() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { products, loading, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <main className='h-full bg-gray-200 px-60 py-3   md:grid md:grid-cols-2 md:gap-10 xl:grid xl:grid-cols-3'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        products.map((item) => {
          return (
            <Link to={`/product/${item._id}`}>
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
            </Link>
          )
        })
      )}
    </main>
  )
}

export default Home
