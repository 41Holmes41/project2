var express = require('express');
var router = express.Router();
//var passport = require('passport');
var tasksCtlr = require('../controllers/tasks');

router.get('/show/:id', tasksCtlr.show);
router.get('/new', tasksCtlr.new);
router.post('/new', tasksCtlr.create);
router.get('/mytasks', tasksCtlr.mytasks);



module.exports = router;