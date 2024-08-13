const { Device } = require('../models/models');
import { type } from './../node_modules/agent-base/src/index';
const { DeviceInfo } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + 'jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const device = await Device.create({
        name,
        price,
        typeId,
        info,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }
      return res.json(device);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async deleteDevice(req, res, next) {
    try {
      const { id } = req.params;
      await Device.destroy({
        where: { id },
        individualHooks: true,
      });
      return res.json(`Device с id: ${id} удалён из БД`);
    } catch (e) {
      return next(ApiError.badRequest('Не указан ID device'));
    }
  }

  async getAll(req, res, next) {
    try {
      let { typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let devices;
      if (!typeId) {
        devices = await Device.findAndCountAll({
          limit,
          offset,
        });
      }
      if (typeId) {
        devices = await Device.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      return res.json(devices);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
  async getDeviceOnId(req, res, next) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({
        where: { id },
        include: [{ model: DeviceInfo, as: 'info' }],
      });
    } catch (e) {
      return next(ApiError.badRequest('Не указан ID'));
    }
  }
}

module.exports = new DeviceController();
