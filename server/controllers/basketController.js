const { Basket, BasketDevice } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
  async addDevice(req, res, next) {
    try {
      const { deviceId, basketId, quantity } = req.body;
      const basketDevice = await BasketDevice.create({
        deviceId,
        basketId,
        quantity,
      });
      return res.json(basketDevice);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async deleteDeviceAtBasket(req, res, next) {
    try {
      const { id } = req.params;
      await BasketDevice.destroy({ where: { id }, individualHooks: true });
      return res.json(`Device с id: ${id} удалён из корзины`);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res, next) {
    const { userId } = req.body;
    try {
      const basketDevices = await BasketDevice.findAll({
        where: {
          userId: userId,
        },
      });
      return res.json(basketDevices);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
