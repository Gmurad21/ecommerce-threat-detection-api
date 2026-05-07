const express = require('express');
const router = express.Router();

const orders = require('../data/orders');
const products = require('../data/products');
const authMiddleware = require('../middleware/authMiddleware');
const { calculateOrderTotal } = require('../services/orderService');

router.get('/', authMiddleware, (req, res) => {
  res.json(orders);
});

router.post('/', (req, res) => {
  const { user, items } = req.body;

  if (!user || !items || !Array.isArray(items)) {
    return res.status(400).json({
      message: 'Invalid order data'
    });
  }

let total;

try {
  total = calculateOrderTotal(items, products);
} catch (error) {
  return res.status(400).json({
    message: error.message
  });
}

  const newOrder = {
    id: orders.length + 1,
    user,
    items,
    total,
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

module.exports = router;