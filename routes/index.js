var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtlr = require('../controllers/index');

/* GET home page. */
router.get('/', indexCtlr.index);
router.get('/dashboard', indexCtlr.dashboard);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
