var express = require('express');
var router = express.Router();
var usersCtlr = require('../controllers/users');

/* GET users listing. */
router.get('/show/:id', usersCtlr.show);
router.get('/assigntask/:id', usersCtlr.assignTask)
router.get('/removetask/:id', usersCtlr.removeTask)
router.get('/completetask/:id', usersCtlr.completeTask)

module.exports = router;
