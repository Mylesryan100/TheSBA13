const Product = require("../model/Product");

//CREATE
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

     res.status(200).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { createProduct };
