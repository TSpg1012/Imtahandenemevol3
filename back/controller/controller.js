const Products = require("../model/model");

const getAllProducts = async (req, res) => {
  let allProducts = await Products.find({});
  console.log("get", allProducts);
  res.send(allProducts);
};

const getPostProducts = async (req, res) => {
  const newProduct = new Products(req.body);
  newProduct.save();
};

const getdeleteProducts = async (req, res) => {
  let find = await Products.findOne({ id: req.params.id });
  let deletedProducts = await Products.findByIdAndDelete(find._id);
};

const getProductById = async (req, res) => {
  let id = req.params.id;
  let find = await Products.findOne({ id: id });
  res.send(find);
};

module.exports = {
  getAllProducts,
  getPostProducts,
  getdeleteProducts,
  getProductById,
};
