var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// users routes are used to get sub-routes
router.get('/details', function(req, res, next) {
  res.send('respond with a resource details');
});


module.exports = router;
