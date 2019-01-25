/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/
const express = require( 'express' );
const router = express.Router();

router.get('/', (req, res, next) => res.json(
  { message: '_FNORD » OnixxApp is up and running!' }
));

// Any other GET request will fall here
router.get('*', (req, res, next) => res.json(
  { message: '_FNORD » It is a ∑ꞦꞦꝊꝶ <404> message::' }
));

module.exports = router;
