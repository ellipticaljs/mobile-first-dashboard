(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['../dependencies/container'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('../dependencies/container'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.container);
    global.searchService = mod.exports;
  }
})(this, function (_container) {
  'use strict';

  var _container2 = _interopRequireDefault(_container);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Search = _container2.default.getType('Search');

  _container2.default.mapType('Search', Search, '$SearchProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlYXJjaFNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxNQUFJLFNBQVMsb0JBQVUsT0FBVixDQUFrQixRQUFsQixDQUFiOztBQUVBLHNCQUFVLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsaUJBQXBDIiwiZmlsZSI6InNlcnZpY2VzL3NlYXJjaFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5cbnZhciBTZWFyY2ggPSBjb250YWluZXIuZ2V0VHlwZSgnU2VhcmNoJyk7XG5cbmNvbnRhaW5lci5tYXBUeXBlKCdTZWFyY2gnLCBTZWFyY2gsICckU2VhcmNoUHJvdmlkZXInKTtcblxuICJdfQ==