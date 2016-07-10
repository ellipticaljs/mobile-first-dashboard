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
        global.progessService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class Progress {
        start() {
            this.$provider.start();
        }

        end() {
            this.$provider.end();
        }
    }

    _container2.default.mapType('Progress', new Progress(), '$ProgressProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2dlc3NTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsVUFBTSxRQUFOLENBQWU7QUFDWCxnQkFBUTtBQUNKLGlCQUFLLFNBQUwsQ0FBZSxLQUFmO0FBQ0g7O0FBRUQsY0FBTTtBQUNGLGlCQUFLLFNBQUwsQ0FBZSxHQUFmO0FBQ0g7QUFQVTs7QUFVZix3QkFBVSxPQUFWLENBQWtCLFVBQWxCLEVBQThCLElBQUksUUFBSixFQUE5QixFQUE4QyxtQkFBOUMiLCJmaWxlIjoic2VydmljZXMvcHJvZ2Vzc1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5cbmNsYXNzIFByb2dyZXNzIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy4kcHJvdmlkZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIHRoaXMuJHByb3ZpZGVyLmVuZCgpO1xuICAgIH1cbn1cblxuY29udGFpbmVyLm1hcFR5cGUoJ1Byb2dyZXNzJywgbmV3IFByb2dyZXNzKCksICckUHJvZ3Jlc3NQcm92aWRlcicpO1xuXG4gXG4iXX0=