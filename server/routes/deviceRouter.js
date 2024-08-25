const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
// const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getDeviceOnId);

module.exports = router;
