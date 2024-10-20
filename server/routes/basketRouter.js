const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');

router.post('/', basketController.addDevice);
router.get('/', basketController.getAll);
router.delete('/', basketController.deleteDeviceAtBasket);

module.exports = router;
