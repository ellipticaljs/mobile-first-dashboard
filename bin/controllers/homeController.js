(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical', '../dependencies/container', '../modules/ui'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'), require('../dependencies/container'), require('../modules/ui'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container, global.ui);
        global.homeController = mod.exports;
    }
})(this, function (exports, _elliptical, _container, _ui) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Settings = _container2.default.getType('Settings');

    class Controller extends _elliptical2.default.Controller {
        Index(req, res, next) {
            try {
                let dashboard;
                if (this._app.context.disableDashboard && this._app.context.disableDashboard !== undefined) {
                    dashboard = null;
                } else {
                    dashboard = Settings.getDisplayModel();
                }
                let context = { dashboard };
                res.render(context);
            } catch (err) {
                next(err);
            }
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2hvbWVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsUUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjs7QUFFZSxVQUFNLFVBQU4sU0FBeUIscUJBQVcsVUFBcEMsQ0FBK0M7QUFDMUQsY0FBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQjtBQUNsQixnQkFBSTtBQUNBLG9CQUFJLFNBQUo7QUFDQSxvQkFBSSxLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGdCQUFsQixJQUFzQyxLQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGdCQUFsQixLQUF1QyxTQUFqRixFQUE0RjtBQUN4RixnQ0FBWSxJQUFaO0FBQ0gsaUJBRkQsTUFFTztBQUNILGdDQUFZLFNBQVMsZUFBVCxFQUFaO0FBQ0g7QUFDRCxvQkFBSSxVQUFVLEVBQUMsU0FBRCxFQUFkO0FBQ0Esb0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSCxhQVRELENBU0UsT0FBTyxHQUFQLEVBQVk7QUFDVixxQkFBSyxHQUFMO0FBQ0g7QUFDSjtBQWR5RDtzQkFBekMsVSIsImZpbGUiOiJjb250cm9sbGVycy9ob21lQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuaW1wb3J0IHtQcm9ncmVzcywgTW9ycGgsIExhYmVsfSBmcm9tICcuLi9tb2R1bGVzL3VpJztcblxudmFyIFNldHRpbmdzID0gY29udGFpbmVyLmdldFR5cGUoJ1NldHRpbmdzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBlbGxpcHRpY2FsLkNvbnRyb2xsZXIge1xuICAgIEluZGV4KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgZGFzaGJvYXJkO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FwcC5jb250ZXh0LmRpc2FibGVEYXNoYm9hcmQgJiYgdGhpcy5fYXBwLmNvbnRleHQuZGlzYWJsZURhc2hib2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkID0gU2V0dGluZ3MuZ2V0RGlzcGxheU1vZGVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHtkYXNoYm9hcmR9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgXG5cbiJdfQ==