const express = require('express')

const router = express.Router();

//POST
router.post('/', createProduct)

//GET product by ID
router.get('/:id', getProductById)

//UPDATE
router.put('/:id', updateProduct)

//DELETE
router.delete('/:id', deleteProduct)

//GET all product
router.get('/', getAllProduct)


module.exports = router;