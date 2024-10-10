const Router = require('express');
const router = Router();
const typeController = require('../controllers/typeController');
// const checkRoleMiddleware = require('../middleware/CheckRoleMiddleware');
// Не корректно работает Middleware. Разобраться(используется в запросах для администратора)

router.post('/', typeController.create);
router.get('/', typeController.getAll);

module.exports = router;
