const brain = require('brain.js');

const network = new brain.NeuralNetwork();

const trainingData = [
  {
    input: {
      repeated401Rate: 0.0,
      unknownPathRate: 0.0,
      requestRate: 0.2,
      avgResponseTime: 0.2
    },
    output: {
      normal: 1
    }
  },
  {
    input: {
      repeated401Rate: 0.1,
      unknownPathRate: 0.1,
      requestRate: 0.3,
      avgResponseTime: 0.3
    },
    output: {
      normal: 1
    }
  },
  {
    input: {
      repeated401Rate: 0.9,
      unknownPathRate: 0.8,
      requestRate: 0.9,
      avgResponseTime: 0.7
    },
    output: {
      suspicious: 1
    }
  },
  {
    input: {
      repeated401Rate: 0.8,
      unknownPathRate: 0.9,
      requestRate: 1.0,
      avgResponseTime: 0.8
    },
    output: {
      suspicious: 1
    }
  }
];

network.train(trainingData);

function analyzeTraffic(features) {
  const result = network.run(features);

  const normalScore = result.normal || 0;
  const suspiciousScore = result.suspicious || 0;

  const verdict =
    suspiciousScore > normalScore
      ? 'suspicious'
      : 'normal';

  return {
    verdict,
    scores: {
      normal: normalScore,
      suspicious: suspiciousScore
    },
    features
  };
}

module.exports = {
  analyzeTraffic
};