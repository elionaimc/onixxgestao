const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');
const { ReS } = require('./services/util.service');

module.exports = function upload(req, res) {
  console.log('campo', req);
  var form = new IncomingForm();
  let readStream;
  form.on('file', (expense, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.name);
   
  });
  form.on('expense', (expense) => {
    console.log('despesa:', expense);
  });
  form.on('end', () => {
    ReS(res, form);
  });
  form.parse(req);
};
