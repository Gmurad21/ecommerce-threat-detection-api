const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

const users = require('../data/users');

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message: 'Invalid username or password'
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );

  res.json({
    message: 'Login successful',
    token
  });
});

module.exports = router;