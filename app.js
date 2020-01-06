var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();






// for getting data from form field
app.use(require('body-parser')());

app.post('/login', function(req, res){
  
  console.log('Name (from visible form field): ' + req.body.email);
  console.log('Email (from visible form field): ' + req.body.password);
  res.redirect(303, '/login');
  });






  // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});










//set database connection
mongoose.connect('mongodb://localhost:27017/users');
mongoose.connection.on('error',function(){
   console.log('MongoDB Connection Error. Please make sure that MongoDB is running');
    process.exit(1);
});
mongoose.connection.once('open',function(callback){
   console.log('Connected to Database');
   
});

var userSchema = new mongoose.Schema({
   email:{type:String,uppercase:true},
   password:String
},{collection:'userList'});

//make model
var userModel = mongoose.model('userModel',userSchema);




module.exports = app;
