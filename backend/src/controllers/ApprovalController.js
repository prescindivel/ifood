const Order = require('../models/Order');

module.exports = {
  async store(req, res) {
    const { id } = req.params;

    const order = await Order.findById(id).populate('restaurant');

    order.approved = true;

    await order.save();

    const orderUserSocket = req.connectedUsers[order.user];

    if (orderUserSocket) {
      req.io.to(orderUserSocket).emit('order_response', order);
    }

    return res.json(order);
  }
};
