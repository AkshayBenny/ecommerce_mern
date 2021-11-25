import express from 'express'
import Product from '../models/productModel.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

app.get('/:id', (req, res) => {
  const product = products.find((item) => item._id === req.params.id)
  res.json(product)
})

export default router
