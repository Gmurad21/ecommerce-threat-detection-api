const express = require('express');
const router = express.Router();

const products = require('../data/products');
const AppError = require('../utils/AppError');

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res, next) => {
  const productId = Number(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
  return next(new AppError('Product not found', 404));
}

  res.json(product);
});

module.exports = router;