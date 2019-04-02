const fs = require('fs');
// const PDFKit = require('pdfkit');
// const pdf = new PDFKit();

const pdf = require('html-pdf');

const authorization = (req, res) => {
    // res.setHeader('Content-disposition', 'attachment; filename="' + req.params['code'] + '.pdf"');
    // res.setHeader('Content-type', 'application/pdf');
    // const file = __dirname + '/files/private/' + req.params['code'] + ".pdf";
    // pdf.text('O código de autorização foi: ' + req.params['code']);
    // pdf.end();
    // pdf.pipe(res, { end: true });

    const file = __dirname + '/files/private/' + req.params['code'] + ".pdf";
    let head = `
    <head>
      <title>Comprovante de autorização - ONIXX GESTOR</title>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>`;

    let htmlBody = `${head} <div clas="row cols"><div class="col-xs-12"><div class="container-fluid text-center">`;
    htmlBody += `<div class="panel bg-primary justify-content-center"><img src="file:///${__dirname}/files/public/assets/img/bomjesusrn.png" title="Prefeitura" alt="logo da prefeitura" /></div>`;
    htmlBody += `<h3 class="text-center">Autorização de Despesa</h3>`;
    htmlBody += `<small>Para assegurar que esta despesa permanece autorizada, <br/>acesse http://onixgestor.com.br e informe o seguinte código: <strong>${req.params['code']}</strong></small></div></div></div>`;
    let htmlOptions = {
        format: 'Letter',
        border: '1cm'
    }

    pdf.create(htmlBody, htmlOptions)
    .toFile(file, (error, success) => {
        if (error)
            res.json({ data: error })
        else
            res.json({ data: success })
    });


};
module.exports = authorization;

