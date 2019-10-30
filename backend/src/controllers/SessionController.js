const User = require('../models/User');

module.exports = {
  async register(req, res) {
    const { email } = await req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }

      const user = await User.create(req.body);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ message: 'Aconteceu um erro inesperado' });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: 'Usuário não existe' });
      }

      if (!(await user.compareHash(password))) {
        return res.status(401).json({ message: 'Senha inválida' });
      }

      return res.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      return res.status(401).json({ message: 'Autenticação falhou' });
    }
  },

  async profile(req, res) {
    try {
      const { userId } = req;

      const user = await User.findById(userId);

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ message: "Can't get user information" });
    }
  }
};
