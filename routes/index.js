var express = require('express');
var router = express.Router();


const indexController = require('../controllers/indexController');


/* GET home page. */
router.get('/', indexController.getMessages);
router.post('/:id/delete', indexController.deleteMessagePost);

module.exports = router;
