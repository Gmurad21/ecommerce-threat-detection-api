function calculateOrderTotal(items, products) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Order items are required');
  }

  let total = 0;

  for (const item of items) {
    const product = products.find(
      p => p.id === item.productId
    );

    if (!product) {
      throw new Error(
        `Product with id ${item.productId} not found`
      );
    }

    total += product.price * item.quantity;
  }

  return total;
}

module.exports = {
  calculateOrderTotal
};