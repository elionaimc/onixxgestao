/*
* @author Elionai Moura Cordeiro
* @version 1.3.0
* @description setup and mashing up everything for the app come alive
*/

// dependencies
const express = require('express');
const upload = require('./upload');
const bodyParser = require('body-parser');
const passport = require('passport');
const pe = require('parse-error');
const cors = require('cors');
const { ReE } = require('./services/util.service');

// const generateHash = require('random-hash');
// console.log(generateHash.generateHash({ length: 8 }));

// definitions for routing and connection
const wpa = require('./config/routes.wpa');
const api = require('./config/routes.api');
const app = express();
const CONFIG = require('./config/globals');

// initializing enviroment
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// passport
app.use(passport.initialize());

// connect to database and load models
const models = require("./models");

// // database tests for connect and sync
// models.sequelize.authenticate()
// .catch(err => {
//   // HAL explains error on database connection
//   console.error("_FNORD » I´m sorry Dave. I´m afraid I can´t connect to database: ", CONFIG.db_name);
// });

// // at development enviroment, syncronize database
// if(CONFIG.app==='dev'){
//     models.sequelize.sync();
// }

// CORS enabled
app.use(cors());

// routes and errors handling
app.use('/api', api);
app.post('/upload', upload);

app.get('*', wpa);

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

  return ReE(res, err.message, err.status);
});

module.exports = app;

// promise handler
process.on('unhandledRejection', error => {
    console.error('Erro não esperado ', pe(error));
});

// just run, server, RUN!
app.listen(CONFIG.port, () => {
  // Samantha tells that the system is up and running
  console.log('_FNORD » The past is just a story we tell ourselves on port ' + CONFIG.port + '.');
});
