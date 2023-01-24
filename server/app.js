const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");

const bookRouter = require('./routes/User/books');
const journalRouter = require('./routes/User/journal');

const app = express();

mongoose.connect("mongodb+srv://aadith:123@cluster0.mj2tf8n.mongodb.net/?retryWrites=true&w=majority") 
// this url should be in .env




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};



app.use(cors(corsOptions));
app.use('/', bookRouter);
app.use('/', journalRouter);


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

app.listen(5000,((data)=>{
  // console.log(data);
}))




module.exports = app;
