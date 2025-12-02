const express = require('express')
const { createProduct } = require('../controllers/productControllers')

const router = express.Router();

//POST
router.post('/products', createProduct)

//GET product by ID
router.get('/:id', getProductById)

//UPDATE
router.put('/:id', updateProduct)

//DELETE
router.delete('/:id', deleteProduct)

//GET all product
router.get('/', getAllProduct)


module.exports = router;