var express = require('express');
var router = express.Router();
var groupsCtlr = require('../controllers/groups');

/* GET users listing. */
router.get('/new', groupsCtlr.new);
router.post('/create', groupsCtlr.create);


module.exports = router;