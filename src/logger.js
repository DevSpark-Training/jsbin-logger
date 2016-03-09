(function() {
  'use strict';

  var dom;

  function init(doc) {
    dom = doc;
  }

  function log() {
    _forEachArg(arguments, function(arg) {
      dom.write(_logRow(arg));
    });
  }

  function _logRow(data) {
    var output = data;
    var type = typeof data;

    if (type === 'object' || type === 'array') {
      output = JSON.stringify(data);
    }

    return '<div class="logger-row">' + output + '</div>';
  }

  function _forEachArg(args, iteratee) {
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      iteratee(arg);
    }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
      init: init,
      output: log
    };
  } else {
    window.logger = {
      init: init,
      log: log
    };
  }

}());
