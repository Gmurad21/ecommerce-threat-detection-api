const express = require('express');
const router = express.Router();

const { readLogs } = require('../services/logService');

router.get('/', (req, res) => {
  const logs = readLogs();

  res.json(logs);
});

module.exports = router;