const Product = require('../model/Product')


//CREATE
const createProduct =  async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}