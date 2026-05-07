const {
  calculateOrderTotal
} = require('../src/services/orderService');

describe('calculateOrderTotal', () => {
  const products = [
    {
      id: 1,
      name: 'Mouse',
      price: 50
    },
    {
      id: 2,
      name: 'Keyboard',
      price: 100
    }
  ];

  test('should calculate correct total', () => {
    const items = [
      {
        productId: 1,
        quantity: 2
      },
      {
        productId: 2,
        quantity: 1
      }
    ];

    const total = calculateOrderTotal(items, products);

    expect(total).toBe(200);
  });

  test('should throw error for missing product', () => {
    const items = [
      {
        productId: 999,
        quantity: 1
      }
    ];

    expect(() => {
      calculateOrderTotal(items, products);
    }).toThrow('Product with id 999 not found');
  });

  test('should throw error for empty items', () => {
    expect(() => {
      calculateOrderTotal([], products);
    }).toThrow('Order items are required');
  });
});