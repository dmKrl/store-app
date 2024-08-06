const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');

router.post('/', deviceController);
router.get('/', deviceController);
router.get('/:id', deviceController);

module.exports = router;
