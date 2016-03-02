(function() {
  'use strict';

  module.exports = {
    init: init,
    output: output
  };

  var doc;

  function init(docu) {
    doc = docu;
    doc.body.className += ' logger';
  }

  function output() {
    _forEachArg(arguments, function(arg) {
      doc.write(_logRow(arg));
    });
  }

  function _logRow(data) {
    var output = data;
    var type = typeof data;

    if (type === 'object' || type === 'array') {
      output = JSON.stringify(data);
    }

    return '<div class="log-row">' + output + '</div>';
  }

  function _forEachArg(args, iteratee) {
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      iteratee(arg);
    }
  }
}());
