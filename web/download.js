const fs = require('fs');
const { ReS } = require('./services/util.service');

module.exports = function download(req, res) {
    var file = __dirname + '/files/private/' + req.params['file'];
    res.download(file);
};

