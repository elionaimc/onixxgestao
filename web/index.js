'use strict'
/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Setup everything for the app
*/
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 1982;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('uploads'));

const router = require('./config/routes.js');
app.use('/', router);

app.listen(port, () => {
  //Samantha tells that the system is up and running
  console.log('_FNORD » The past is just a story we tell ourselves on port ' + port + '.');
});
