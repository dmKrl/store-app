const { Device } = require('../models/models');

class DeviceController {
  async create(req, res) {
    const { name } = req.body;
    const device = await Device.create({ name });
    return res.json(device);
  }
  async getAll(req, res) {
    const devices = await Device.findAll();
    return res.json(devices);
  }
}

module.exports = new DeviceController();
