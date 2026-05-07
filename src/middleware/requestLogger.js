const { saveLog } = require('../services/logService');

function requestLogger(req, res, next) {
  const startTime = Date.now();

  res.on('finish', () => {
    const responseTime = Date.now() - startTime;

    const logEntry = {
      timestamp: new Date().toISOString(),
      method: req.method,
      path: req.originalUrl,
      statusCode: res.statusCode,
      ip: req.ip,
      responseTime,
      userAgent: req.headers['user-agent'] || 'unknown'
    };

    saveLog(logEntry);
  });

  next();
}

module.exports = requestLogger;