(function() {
  'use strict';

  var expect = require('expect');

  describe('logger', function() {
    var logger;
    var document;

    beforeEach(function() {
      logger = require('../src/logger');

      document = {
        body: {
          className: ''
        },
        write: expect.createSpy()
      };
    });

    describe('init', function() {
      it('should add a class to the body', function() {
        logger.init(document);
        expect(document.body.className).toBe(' logger');
      });
    });

    describe('output', function() {
      beforeEach(function() {
        logger.init(document);
      });

      it('should output a dom node for logging', function() {
        logger.output('FOO');
        expect(document.write).toHaveBeenCalledWith('<div class="log-row">FOO</div>');
      });

      it('should handle objecs', function() {
        logger.output({a: 1, b: '2'});
        expect(document.write).toHaveBeenCalledWith('<div class="log-row">{"a":1,"b":"2"}</div>');
      });

      it('should handle arrays', function() {
        logger.output([1, '2', 3, 4, 5.1]);
        expect(document.write).toHaveBeenCalledWith('<div class="log-row">[1,"2",3,4,5.1]</div>');
      });

      it('should handle multiple arguments', function() {
        logger.output('foo', 'bar');
        expect(document.write).toHaveBeenCalledWith('<div class="log-row">foo</div>');
        expect(document.write).toHaveBeenCalledWith('<div class="log-row">bar</div>');
      });
    });
  });
}());

