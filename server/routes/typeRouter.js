const Router = require('express');
const router = Router();
const typeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');

router.post('/', checkRoleMiddleware, typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
