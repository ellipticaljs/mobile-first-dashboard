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
        global.confirmDialogService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class ConfirmDialog {
        show(fn) {
            return this.constructor.show(fn);
        }

        setContent(title, message) {
            return this.constructor.setContent(title, message);
        }

        static show(fn) {
            return this.$provider.show(fn);
        }

        static setContent(title, message) {
            return this.$provider.setContent(title, message);
        }
    }

    _container2.default.mapType('ConfirmDialog', ConfirmDialog, '$ConfirmDialogProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbmZpcm1EaWFsb2dTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsVUFBTSxhQUFOLENBQW9CO0FBQ2hCLGFBQUssRUFBTCxFQUFTO0FBQ0wsbUJBQU8sS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLEVBQXRCLENBQVA7QUFDSDs7QUFFRCxtQkFBVyxLQUFYLEVBQWtCLE9BQWxCLEVBQTJCO0FBQ3ZCLG1CQUFPLEtBQUssV0FBTCxDQUFpQixVQUFqQixDQUE0QixLQUE1QixFQUFtQyxPQUFuQyxDQUFQO0FBQ0g7O0FBRUQsZUFBTyxJQUFQLENBQVksRUFBWixFQUFnQjtBQUNaLG1CQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsRUFBcEIsQ0FBUDtBQUNIOztBQUVELGVBQU8sVUFBUCxDQUFrQixLQUFsQixFQUF5QixPQUF6QixFQUFrQztBQUM5QixtQkFBTyxLQUFLLFNBQUwsQ0FBZSxVQUFmLENBQTBCLEtBQTFCLEVBQWlDLE9BQWpDLENBQVA7QUFDSDtBQWZlOztBQWtCcEIsd0JBQVUsT0FBVixDQUFrQixlQUFsQixFQUFtQyxhQUFuQyxFQUFrRCx3QkFBbEQiLCJmaWxlIjoic2VydmljZXMvY29uZmlybURpYWxvZ1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5cbmNsYXNzIENvbmZpcm1EaWFsb2cge1xuICAgIHNob3coZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iuc2hvdyhmbik7XG4gICAgfVxuXG4gICAgc2V0Q29udGVudCh0aXRsZSwgbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5zZXRDb250ZW50KHRpdGxlLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvdyhmbikge1xuICAgICAgICByZXR1cm4gdGhpcy4kcHJvdmlkZXIuc2hvdyhmbik7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldENvbnRlbnQodGl0bGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHByb3ZpZGVyLnNldENvbnRlbnQodGl0bGUsIG1lc3NhZ2UpO1xuICAgIH1cbn1cblxuY29udGFpbmVyLm1hcFR5cGUoJ0NvbmZpcm1EaWFsb2cnLCBDb25maXJtRGlhbG9nLCAnJENvbmZpcm1EaWFsb2dQcm92aWRlcicpO1xuXG4gICJdfQ==