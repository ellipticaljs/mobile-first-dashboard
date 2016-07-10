(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "../references/elliptical"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("../references/elliptical"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical);
        global.helpController = mod.exports;
    }
})(this, function (exports, _elliptical) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class Controller extends _elliptical2.default.Controller {
        Index(req, res, next) {
            res.render();
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL2hlbHBDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVlLFVBQU0sVUFBTixTQUF5QixxQkFBVyxVQUFwQyxDQUErQztBQUMxRCxjQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLElBQWhCLEVBQXNCO0FBQ2xCLGdCQUFJLE1BQUo7QUFDSDtBQUh5RDtzQkFBekMsVSIsImZpbGUiOiJjb250cm9sbGVycy9oZWxwQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGxpcHRpY2FsIGZyb20gXCIuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIGVsbGlwdGljYWwuQ29udHJvbGxlciB7XG4gICAgSW5kZXgocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgcmVzLnJlbmRlcigpO1xuICAgIH1cbn1cbiAgICBcblxuXG5cblxuXG5cbiJdfQ==