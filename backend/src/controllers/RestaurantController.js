const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

module.exports = {
  async addRestaurant(req, res) {
    const { userId } = req;
    const { filename } = req.file;
    const { name, city, state, address, foodType } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: 'Usuário não existe' });
    }

    if (!name) {
      return res.status(400).json({ message: 'Nome é obrigatório' });
    }

    try {
      const restaurant = await Restaurant.create({
        user: userId,
        name,
        city,
        state,
        address,
        foodType,
        thumbnail: filename
      });

      return res.json(restaurant);
    } catch (err) {
      return res.status(400).json({ message: 'Aconteceu um erro inesperado' });
    }
  },

  async viewRestaurant(req, res) {
    const { userId } = req;
    const { id } = req.params;

    try {
      const restaurant = await Restaurant.findOne({ user: userId, _id: id });

      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }

      return res.json(restaurant);
    } catch (error) {
      return res.status(400).json({ message: 'Esse restaurante não existe' });
    }
  },

  async updateRestaurant(req, res) {
    const { userId } = req;
    const { id } = req.params;
    const { filename } = req.file;
    const { name, city, state, address, foodType } = req.body;

    try {
      await Restaurant.findOneAndUpdate(
        { user: userId, _id: id },
        {
          name,
          city,
          state,
          address,
          foodType,
          thumbnail: filename
        }
      );

      const restaurant = await Restaurant.findOne({ user: userId, _id: id });

      if (!restaurant) {
        return res.status(404).json({ message: 'Esse restaurante não existe' });
      }

      return res.json(restaurant);
    } catch (error) {
      return res.status(400).json({ message: 'A' });
    }
  },

  async deleteRestaurant(req, res) {
    const { userId } = req;
    const { id } = req.params;

    try {
      const restaurant = await Restaurant.findOneAndDelete({
        user: userId,
        _id: id
      });

      if (!restaurant) {
        return res.status(404).json({ message: 'Esse restaurante não existe' });
      }

      return res.json({
        error: `Restaurant ${restaurant.name} was deleted`
      });
    } catch (error) {
      return res.status(400).json({ message: 'Aconteceu um erro inesperado' });
    }
  },

  async fetchRestaurantsByUser(req, res) {
    const { userId } = req;

    try {
      const restaurants = await Restaurant.find({ user: userId });

      return res.json(restaurants || []);
    } catch (error) {
      return res.status(400).json({ message: 'Aconteceu um erro inesperado' });
    }
  },

  async fetchRestaurants(req, res) {
    try {
      const restaurants = await Restaurant.find();

      return res.json(restaurants || []);
    } catch (error) {
      return res.status(400).json({ message: 'Aconteceu um erro inesperado' });
    }
  }
};
