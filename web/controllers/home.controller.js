/*
* @author Elionai Moura Cordeiro
* @version 1.0.0
* @description Router module for outgo_test app
*/
const { ReS } = require('../services/util.service');

const dashboard = (req, res) => {
	return ReS(res, {success:true, message: '_FNORD » OnixxAPI is up and running!'});
}
module.exports.dashboard = dashboard
