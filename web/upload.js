const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const { ReS } = require('./services/util.service');

module.exports = function upload(req, res) {
  var form = new IncomingForm();
  let myFile = '';
  form.on('field', (f, field) => {
    myFile += field;
  }).on('fileBegin', (f, file) => {
      file.path = __dirname + '/files/private/' + myFile;
  }).on('end', () => {
    ReS(res, form);
  });
  form.parse(req);
};

