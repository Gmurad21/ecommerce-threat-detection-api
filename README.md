# Cloud-Based E-Commerce REST API with Threat Detection

## Project Description

This project is a cloud-ready e-commerce REST API built using Node.js and Express.js.

The system simulates a simple online store backend and includes:

- Product catalogue API
- Orders API
- JWT authentication
- Protected routes
- Environment variables
- Global error handling
- Request logging
- Unit testing with Jest
- Neural network threat detection using brain.js

The application collects request logs and analyzes traffic behavior using a simple neural network model.

The system is able to detect suspicious activity patterns such as:

- repeated 401 Unauthorized responses
- repeated 404 unknown path requests
- unusually high request rates
- abnormal traffic behavior

The neural network produces a verdict:

- normal
- suspicious

This project was created as an educational cybersecurity and backend development project.

---

# Technologies Used

- Node.js
- Express.js
- JWT (jsonwebtoken)
- dotenv
- Jest
- brain.js
- Thunder Client / Postman

---

# Project Structure

```text
ecommerce-threat-api/
│
├── logs/
│   └── requests.json
│
├── src/
│   ├── data/
│   │   ├── orders.js
│   │   ├── products.js
│   │   └── users.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   └── requestLogger.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── logRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── threatRoutes.js
│   │
│   ├── services/
│   │   ├── logService.js
│   │   ├── orderService.js
│   │   └── threatDetectionService.js
│   │
│   ├── utils/
│   │   └── AppError.js
│   │
│   ├── app.js
│   └── server.js
│
├── tests/
│   └── orderService.test.js
│
├── .env
├── package.json
└── README.md
```

---

# Installation

## Step 1 — Clone or download the project

```bash
git clone <repository-url>
```

Or download the ZIP archive manually.

---

## Step 2 — Open project folder

Open the project in:

- VS Code
- Visual Studio Code

---

## Step 3 — Install dependencies

Run:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000
JWT_SECRET=supersecretkey
```

---

# Run the Project

Start the server:

```bash
node src/server.js
```

Server will run on:

```text
http://localhost:3000
```

---

# Run Unit Tests

Run tests using Jest:

```bash
npm test
```

---

# API Endpoints

# Authentication

## Login

```http
POST /login
```

Example body:

```json
{
  "username": "admin",
  "password": "password123"
}
```

Example response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

# Products API

## Get all products

```http
GET /products
```

---

## Get product by ID

```http
GET /products/:id
```

Example:

```http
GET /products/1
```

---

# Orders API

## Create order

```http
POST /orders
```

Example body:

```json
{
  "user": "murad",
  "items": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 3,
      "quantity": 1
    }
  ]
}
```

---

## Get all orders (Protected Route)

```http
GET /orders
```

Authorization header example:

```text
Authorization: Bearer YOUR_TOKEN
```

---

# Logs API

## Get all logs

```http
GET /logs
```

Logs are stored in:

```text
logs/requests.json
```

---

# Threat Detection API

## Generate threat report

```http
GET /threat-report
```

Example response:

```json
{
  "message": "Threat report generated successfully",
  "totalLogsAnalyzed": 25,
  "verdict": "suspicious",
  "scores": {
    "normal": 0.12,
    "suspicious": 0.91
  },
  "features": {
    "repeated401Rate": 0.8,
    "unknownPathRate": 0.6,
    "requestRate": 0.9,
    "avgResponseTime": 0.2
  }
}
```

---

# Neural Network Threat Detection

This project uses a simple neural network built with brain.js.

The neural network is trained using hand-crafted training data.

The goal is educational demonstration only and not production-grade AI.

The application follows this pipeline:

```text
logs → feature extraction → model prediction → verdict
```

The model analyzes:

- repeated401Rate
- unknownPathRate
- requestRate
- avgResponseTime

The model predicts whether traffic is:

- normal
- suspicious

---

# Logging System

Every incoming request is logged automatically.

Logged information includes:

- timestamp
- HTTP method
- request path
- status code
- IP address
- response time
- user-agent

Example log entry:

```json
{
  "timestamp": "2026-05-07T10:20:00.000Z",
  "method": "GET",
  "path": "/products",
  "statusCode": 200,
  "ip": "::1",
  "responseTime": 12,
  "userAgent": "Mozilla/5.0"
}
```

---

# Global Error Handling

The application includes centralized error handling middleware.

Handled errors include:

- 404 errors
- validation errors
- authentication errors
- unexpected server errors

Example error response:

```json
{
  "success": false,
  "message": "Product not found"
}
```

---

# Authentication

JWT authentication is implemented.

Protected routes require:

```text
Authorization: Bearer TOKEN
```

If token is missing or invalid:

```json
{
  "message": "No token provided"
}
```

or

```json
{
  "message": "Invalid token"
}
```

---

# Unit Testing

Unit tests are implemented using Jest.

Tested functionality:

- order total calculation
- invalid product validation
- empty order validation

Example:

```bash
PASS tests/orderService.test.js
```

---

# Screenshots Included in Report

The final report includes screenshots of:

- project structure
- running server
- products API
- orders API
- authentication
- protected routes
- logging system
- Jest tests
- threat detection endpoint
- README file

---

# Educational Purpose

This project was created for educational purposes to demonstrate:

- REST API development
- backend security basics
- authentication
- logging and monitoring
- simple machine learning integration
- threat analysis concepts

---

# Author

Murad Guliyev 68988
