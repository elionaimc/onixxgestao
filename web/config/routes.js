/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/

const express = require( 'express' );
const router = express.Router();
//const categories = require('../app_modules/categories.js');
//const movies = require('../app_modules/movies.js');

router.get('/', (req, res) => res.json({ message: '_FNORD » OnixxApp is up and running!' }));

// router.get('/categories/populate', categories.populate);
// router.get('/categories/:id?', categories.list);
//
// router.get('/movies/populate', movies.populate);
// router.get('/movies/:id?', movies.list);

router.get('*', (req, res) => res.send('//TODO: página de erro 404!'));
module.exports = router;
