import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../Rating'
import { listProductDetails } from '../../actions/productActions'
import Loader from '../Loader'
import Message from '../Message'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

function Product({ history, match }) {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.productDetails)
  const { product, loading, error } = productDetails
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push('/cart/' + match.params.id + '?qty=' + qty)
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className=' md:grid md:grid-cols-3 gap-x-4 md:px-60 md:pt-20'>
          <div className='bg-gray-500'>
            <img
              src={product.image}
              alt='product'
              className='object-cover h-96 md:h-full w-screen'
            />
          </div>
          <div className='p-6'>
            <p className='font-light text-3xl md:font-thin md:text-6xl  pb-10 md:pb-20'>
              {product.name}
            </p>
            <div className='border-t-2 border-b-2 py-4'>
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

            <div className='flex item-center justify-between border text-2xl font-thin p-4'>
              <div>
                <p>Select quantity:</p>
              </div>
              <div>
                <p>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => {
                              setQty(e.target.value)
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                </p>
              </div>
            </div>

            <div className='p-6 flex justify-center items-center border'>
              <div className='flex items-center'>
                <button
                  onClick={addToCartHandler}
                  className='inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-white bg-gray-800  mx-6 border-gray-700 border-2'
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </button>

                <Link to='/'>
                  <p className='inline-flex items-center justify-center px-9 py-3  text-base font-medium rounded-md text-gray-800 bg-white border-gray-700 border-2 box-border  mx-6'>
                    Go Back
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
