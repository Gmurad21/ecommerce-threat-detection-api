const fs = require('fs');
const path = require('path');

const logsFilePath = path.join(__dirname, '../../logs/requests.json');

function readLogs() {
  if (!fs.existsSync(logsFilePath)) {
    return [];
  }

  const fileContent = fs.readFileSync(logsFilePath, 'utf-8');

  if (!fileContent) {
    return [];
  }

  return JSON.parse(fileContent);
}

function saveLog(logEntry) {
  const logs = readLogs();

  logs.push(logEntry);

  fs.writeFileSync(logsFilePath, JSON.stringify(logs, null, 2));
}

module.exports = {
  readLogs,
  saveLog
};