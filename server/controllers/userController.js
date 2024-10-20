const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

function generateJwt(id, email, role) {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
}

class UserController {
  async registration(req, res, next) {
    const { email, password, username, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный адрес или пароль'));
    }
    const candidate = await User.findOne({ where: { email } });
    const candidateUsername = await User.findOne({ where: { username } });
    if (candidate || candidateUsername) {
      return next(
        ApiError.badRequest(
          'Пользователь с таким email или username уже существует'
        )
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      username,
      password: hashPassword,
    });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token, username: user.username, userId: user.id });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(
        ApiError.unauthorized('Пользователь с таким именем не найден')
      );
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.unauthorized('Введён неверный пароль'));
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token, username: user.username, userId: user.id });
  }
  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
