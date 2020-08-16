const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product =require('../models/product');

router.get("/:id", async (req, res) => {
  try{
    const product = await Product.findOne({ _id: req.params.id })
    res.send(product)
  }catch {
    res.status(404)
    res.send({ error: "Product doesn't exist!" })
  }
})

router.post("/", async (req, res) => {
  const product = new Product({
    //Product._id = mongoose.Types.ObjectId('000000000000000000000001'),
    name: req.body.name,
    price: req.body.price,
    barid: req.body.barid
  })
  await product.save()
  res.send(product)
})

module.exports = router;
