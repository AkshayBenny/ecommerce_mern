import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../products'
import Rating from '../Rating'

function Product({ match }) {
  const product = products.find((item) => item._id === match.params.id)
  return (
    <div>
      <img src={product.image} alt='product' />
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.rating}</p>
    </div>
  )
}

export default Product
