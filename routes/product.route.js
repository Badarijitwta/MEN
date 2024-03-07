const express = require("express");
const {
  addProduct,
  getAllproducts,
  updateProduct,
  getProductByID,
  deleteById,
} = require("../controllers/product.controller");
const productRouter = express.Router();
//Get product By ID
productRouter.get("/", getAllproducts);
//Fetch all products in database
productRouter.get("/:id", getProductByID);
//Add the product to db
productRouter.post("/add", addProduct);
//Update the product data
productRouter.put("/:id", updateProduct);
//Delete product using ID parameter
productRouter.delete("/:id", deleteById);

module.exports = productRouter;
