module.exports = function (role = 'ADMIN') {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        res
          .status(401)
          .json({ status: 401, message: 'Пользователь не авторизован' });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        res.status(403).json({ status: 403, message: 'Нет доступа' });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res
        .status(401)
        .json({ status: 401, message: 'Пользователь не авторизован' });
    }
  };
};
// Не корректно работает Middleware. Разобраться(используется в запросах для администратора)
