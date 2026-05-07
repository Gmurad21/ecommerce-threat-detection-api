const express = require('express');
const router = express.Router();

const { readLogs } = require('../services/logService');
const { analyzeTraffic } = require('../services/threatDetectionService');

function extractFeatures(logs) {
  const totalRequests = logs.length;

  if (totalRequests === 0) {
    return {
      repeated401Rate: 0,
      unknownPathRate: 0,
      requestRate: 0,
      avgResponseTime: 0
    };
  }

  const unauthorizedCount = logs.filter(log => log.statusCode === 401).length;
  const notFoundCount = logs.filter(log => log.statusCode === 404).length;

  const totalResponseTime = logs.reduce((sum, log) => {
    return sum + log.responseTime;
  }, 0);

  const averageResponseTime = totalResponseTime / totalRequests;

  return {
    repeated401Rate: Math.min(unauthorizedCount / totalRequests, 1),
    unknownPathRate: Math.min(notFoundCount / totalRequests, 1),
    requestRate: Math.min(totalRequests / 50, 1),
    avgResponseTime: Math.min(averageResponseTime / 1000, 1)
  };
}

router.get('/', (req, res) => {
  const logs = readLogs();

  const features = extractFeatures(logs);

  const report = analyzeTraffic(features);

  res.json({
    message: 'Threat report generated successfully',
    totalLogsAnalyzed: logs.length,
    ...report
  });
});

module.exports = router;