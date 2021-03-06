// Generated by CoffeeScript 1.6.3
(function() {
  var arquivo, download, fs, http, leituraAsync, leituraSync, stream;

  http = require('http');

  fs = require('fs');

  leituraAsync = require('./leitura_async');

  leituraSync = require('./leitura_sync');

  arquivo = './node.zip';

  stream = fs.createWriteStream(arquivo);

  download = "http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz";

  http.get(download, function(response) {
    console.log('Download do nodejs');
    response.on('data', function(data) {
      return stream.write(data);
    });
    return response.on('end', function() {
      stream.end();
      console.log('Download DONE');
      leituraAsync(arquivo);
      return leituraSync(arquivo);
    });
  });

}).call(this);
