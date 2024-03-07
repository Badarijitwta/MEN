const express = require("express");
const Product = require("../models/product.model");

//To get all the products in Database
const getAllproducts = async (req, res) => {
  try {
    let products = await Product.find({});
    return res.send(products);
  } catch (error) {
    res.status(error.status).json({ messgae: error.message });
  }
};

//To get the product by ID parameter
const getProductByID = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ messgae: "product not found" });
    }
    return res.send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Adding the data to database
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//Updating the exisitng data
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json(`Product Not Found`);
    }
    let updatedProduct = await Product.findById(id);
    return res.send(updatedProduct);
  } catch (error) {
    res.status(500).josn(error.message);
  }
};

//Delete the product by ID parameter.
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    let product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ mesaage: "Product Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllproducts,
  deleteById,
  addProduct,
  getProductByID,
  updateProduct,
};
