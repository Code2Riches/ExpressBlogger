// This block is where we require the node_module libraries needed to run express 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// !Important: This is where we require in the routes for our express app
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Requiring the blogs.js router
var blogsRouter = require('./routes/blogs');

// This line is initializing express for us
var app = express();

// This block is setting up the new engine. Do not need to worry about that 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// This block is the middleware functions for express
app.use(logger('dev'));
app.use(express.json()); // This line and the next
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// !Important: This block is where we invoke the router we create
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Include blogs router in server routes
app.use('/blogs', blogsRouter);

// This code is for creating 404 error pages when the URL in the request does not match a path
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// This block is for catching and handling errors
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// This code exports the app from the file
module.exports = app;
