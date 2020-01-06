var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {
res.render('login', { title: 'LOGIN' });
});




// testing form submittion
/*
router.post('/login', (req, res, next) => {
        //User is the model created in app.js of this project
    var newUser = userModel({
          email: req.body.email,
          password: req.body.password         
    });
    
    console.log(newUser);
    // save the user
    newUser.save(function(err) {
      if (err) throw err;

      console.log('User created!');
    });


});

*/

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'dashboard' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

router.get('/register', (req, res) => {
res.render('register');
});


module.exports = router;
