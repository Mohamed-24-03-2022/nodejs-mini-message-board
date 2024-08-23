var express = require('express');
var router = express.Router();

const newController = require('../controllers/newController');

/* GET users listing. */
router.get('/', newController.get);
router.post('/', newController.post);

module.exports = router;
