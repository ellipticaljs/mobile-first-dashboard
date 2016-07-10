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
        global.searchMorphService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class MorphService {
        toggle() {
            this.$provider.toggle();
        }

        reset() {
            this.$provider.reset();
        }
    }

    _container2.default.mapType('Morph', new MorphService(), '$MorphProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlYXJjaE1vcnBoU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFVBQU0sWUFBTixDQUFtQjtBQUNmLGlCQUFTO0FBQ0wsaUJBQUssU0FBTCxDQUFlLE1BQWY7QUFDSDs7QUFFRCxnQkFBUTtBQUNKLGlCQUFLLFNBQUwsQ0FBZSxLQUFmO0FBQ0g7QUFQYzs7QUFVbkIsd0JBQVUsT0FBVixDQUFrQixPQUFsQixFQUEyQixJQUFJLFlBQUosRUFBM0IsRUFBK0MsZ0JBQS9DIiwiZmlsZSI6InNlcnZpY2VzL3NlYXJjaE1vcnBoU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cblxuY2xhc3MgTW9ycGhTZXJ2aWNlIHtcbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuJHByb3ZpZGVyLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiRwcm92aWRlci5yZXNldCgpO1xuICAgIH1cbn1cblxuY29udGFpbmVyLm1hcFR5cGUoJ01vcnBoJywgbmV3IE1vcnBoU2VydmljZSgpLCAnJE1vcnBoUHJvdmlkZXInKTtcblxuICAgICJdfQ==