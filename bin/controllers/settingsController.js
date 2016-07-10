(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical', '../dependencies/container'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'), require('../dependencies/container'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container);
        global.settingsController = mod.exports;
    }
})(this, function (exports, _elliptical, _container) {
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
            let settings = Settings.getDashboard();
            let disableSwitch = 'disabled';
            let context = { settings, disableSwitch };
            res.render(context);
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3NldHRpbmdzQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFFBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7O0FBRWUsVUFBTSxVQUFOLFNBQXlCLHFCQUFXLFVBQXBDLENBQStDO0FBQzFELGNBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0I7QUFDbEIsZ0JBQUksV0FBVyxTQUFTLFlBQVQsRUFBZjtBQUNBLGdCQUFJLGdCQUFnQixVQUFwQjtBQUNBLGdCQUFJLFVBQVUsRUFBQyxRQUFELEVBQVcsYUFBWCxFQUFkO0FBQ0EsZ0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSDtBQU55RDtzQkFBekMsVSIsImZpbGUiOiJjb250cm9sbGVycy9zZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxudmFyIFNldHRpbmdzID0gY29udGFpbmVyLmdldFR5cGUoJ1NldHRpbmdzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBlbGxpcHRpY2FsLkNvbnRyb2xsZXIge1xuICAgIEluZGV4KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGxldCBzZXR0aW5ncyA9IFNldHRpbmdzLmdldERhc2hib2FyZCgpO1xuICAgICAgICBsZXQgZGlzYWJsZVN3aXRjaCA9ICdkaXNhYmxlZCc7XG4gICAgICAgIGxldCBjb250ZXh0ID0ge3NldHRpbmdzLCBkaXNhYmxlU3dpdGNofTtcbiAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICB9XG59XG4gICAgXG4gICAgXG4gICBcblxuICAiXX0=