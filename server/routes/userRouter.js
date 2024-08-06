const Router = require('express');
const router = Router();
const userController = require('../controllers/userController');


router.post('/registration', userController);
router.post('/login', userController);
router.get('/auth', userController);

module.exports = router;
