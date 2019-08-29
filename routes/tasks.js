var express = require('express');
var router = express.Router();
//var passport = require('passport');
var tasksCtlr = require('../controllers/tasks');

router.get('/show/:id',isLoggedIn, tasksCtlr.show);
router.get('/new', isLoggedIn, tasksCtlr.new);
router.post('/new', isLoggedIn, tasksCtlr.create);
router.get('/mytasks', isLoggedIn, tasksCtlr.mytasks);
router.put('/update/:id', isLoggedIn, tasksCtlr.update);
router.get('/edit/:id', isLoggedIn, tasksCtlr.edit);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;