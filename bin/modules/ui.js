(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../dependencies/container'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../dependencies/container'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.container);
    global.ui = mod.exports;
  }
})(this, function (exports, _container) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Label = exports.Morph = exports.Progress = undefined;

  var _container2 = _interopRequireDefault(_container);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Progress = exports.Progress = _container2.default.getType('Progress');
  const Morph = exports.Morph = _container2.default.getType('Morph');
  const Label = exports.Label = _container2.default.getType('Label');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvdWkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLFFBQU0sOEJBQVMsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsUUFBTSx3QkFBTSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7QUFDQSxRQUFNLHdCQUFNLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWiIsImZpbGUiOiJtb2R1bGVzL3VpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5leHBvcnQgY29uc3QgUHJvZ3Jlc3M9Y29udGFpbmVyLmdldFR5cGUoJ1Byb2dyZXNzJyk7XG5leHBvcnQgY29uc3QgTW9ycGg9Y29udGFpbmVyLmdldFR5cGUoJ01vcnBoJyk7XG5leHBvcnQgY29uc3QgTGFiZWw9Y29udGFpbmVyLmdldFR5cGUoJ0xhYmVsJyk7XG5cblxuIl19