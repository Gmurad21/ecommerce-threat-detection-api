const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const requestLogger = require('./middleware/requestLogger');
const logRoutes = require('./routes/logRoutes');
const threatRoutes = require('./routes/threatRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.json({
    message: 'E-commerce Threat Detection API is running'
  });
});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/', authRoutes);
app.use('/logs', logRoutes);
app.use('/threat-report', threatRoutes);

app.use(errorMiddleware);

module.exports = app;