// Generated by CoffeeScript 1.6.3
(function() {
  var fs, leituraAsync;

  fs = require('fs');

  leituraAsync = function(arquivo) {
    var fim, inicio;
    console.log('leitura async');
    inicio = new Date().getTime();
    fs.readFile(arquivo);
    fim = new Date().getTime();
    return console.log("Bloqueio assincrono " + (fim - inicio) + " ms");
  };

  module.exports = leituraAsync;

}).call(this);
