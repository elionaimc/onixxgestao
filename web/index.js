/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/

//Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');

//Definitions for routing and connection
const wpa = require('./config/routes.wpa');
const api = require('./config/routes.api');
const app = express();
const CONFIG = require('./config/globals');

//Initializing enviroment
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());

//Connect to database and load models
const models = require("./models");
models.sequelize.authenticate().then(() => {
    console.log("_FNORD » Onixx App is connected to database: ", CONFIG.db_name);
})
.catch(err => {
  //HAL explains error on database connection
  console.error("_FNORD » I´m sorry Dave. I´m afraid I can´t connect to database: ",CONFIG.db_name);
});
if(CONFIG.app==='dev'){
    models.sequelize.sync();
}

//CORS
app.use(cors());

//Routes and errors handling
app.use('/api', api);

app.use('/', wpa);

//GET requests not planned will fall here
function handleRedirect(req, res) {
  const targetUrl = CONFIG.targetUrl;
  res.redirect(targetUrl);
}
app.get('*', handleRedirect);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;

//Promise handler
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});

//Just run, server, RUN!
app.listen(CONFIG.port, () => {
  //Samantha tells that the system is up and running
  console.log('_FNORD » The past is just a story we tell ourselves on port ' + CONFIG.port + '.');
});
