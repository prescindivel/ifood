const Order = require('../models/Order');

module.exports = {
  async order(req, res) {
    const { userId } = req;
    const { id } = req.params;
    const { name } = req.body;

    try {
      const order = await Order.create({ user: userId, restaurant: id, name });

      await order
        .populate('restaurant')
        .populate('user')
        .execPopulate();

      const ownerSocket = req.connectedUsers[order.restaurant.user];

      if (ownerSocket) {
        req.io.to(ownerSocket).emit('order_request', order);
      }

      return res.json(order);
    } catch (error) {
      console.log(error);
    }
  }
};
