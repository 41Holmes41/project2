var express = require('express');
var router = express.Router();
var usersCtlr = require('../controllers/users');

/* GET users listing. */
router.get('/show/:id', isLoggedIn, usersCtlr.show);
router.get('/assigntask/:id', isLoggedIn, usersCtlr.assignTask)
router.get('/removetask/:id', isLoggedIn, usersCtlr.removeTask)
router.get('/completetask/:id', isLoggedIn, usersCtlr.completeTask)


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
