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
        global.menuHistory = mod.exports;
    }
})(this, function (exports, _container) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = app => {
        var menuService = _container2.default.getType('MenuService');
        var Location = _container2.default.getType('Location');

        app.onHistory(params => {
            var route = params.route;
            menuService.show(route);
        });

        $(document).on('md.menu.ready', onReady);

        function onReady() {
            var delay = app.PRELOAD_DELAY ? app.PRELOAD_DELAY : 1100;
            var route = Location.path;
            route += Location.search;
            setTimeout(function () {
                menuService.show(route);
                off();
            }, delay);
        }

        function off() {
            $(document).off('md.menu.ready', onReady);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvbWVudUhpc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQUVnQixHQUFELElBQU87QUFDbEIsWUFBSSxjQUFZLG9CQUFVLE9BQVYsQ0FBa0IsYUFBbEIsQ0FBaEI7QUFDQSxZQUFJLFdBQVMsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFiOztBQUVBLFlBQUksU0FBSixDQUFlLE1BQUQsSUFBVTtBQUNwQixnQkFBSSxRQUFNLE9BQU8sS0FBakI7QUFDQSx3QkFBWSxJQUFaLENBQWlCLEtBQWpCO0FBQ0gsU0FIRDs7QUFLQSxVQUFFLFFBQUYsRUFBWSxFQUFaLENBQWUsZUFBZixFQUErQixPQUEvQjs7QUFFQSxpQkFBUyxPQUFULEdBQWtCO0FBQ2QsZ0JBQUksUUFBTyxJQUFJLGFBQUwsR0FBc0IsSUFBSSxhQUExQixHQUEwQyxJQUFwRDtBQUNBLGdCQUFJLFFBQU0sU0FBUyxJQUFuQjtBQUNBLHFCQUFPLFNBQVMsTUFBaEI7QUFDQSx1QkFBVyxZQUFVO0FBQ2pCLDRCQUFZLElBQVosQ0FBaUIsS0FBakI7QUFDQTtBQUNILGFBSEQsRUFHRSxLQUhGO0FBS0g7O0FBRUQsaUJBQVMsR0FBVCxHQUFjO0FBQ1YsY0FBRSxRQUFGLEVBQVksR0FBWixDQUFnQixlQUFoQixFQUFnQyxPQUFoQztBQUNIO0FBQ0osSyIsImZpbGUiOiJtb2R1bGVzL21lbnVIaXN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCk9PntcbiAgICB2YXIgbWVudVNlcnZpY2U9Y29udGFpbmVyLmdldFR5cGUoJ01lbnVTZXJ2aWNlJyk7XG4gICAgdmFyIExvY2F0aW9uPWNvbnRhaW5lci5nZXRUeXBlKCdMb2NhdGlvbicpO1xuICAgIFxuICAgIGFwcC5vbkhpc3RvcnkoKHBhcmFtcyk9PntcbiAgICAgICAgdmFyIHJvdXRlPXBhcmFtcy5yb3V0ZTtcbiAgICAgICAgbWVudVNlcnZpY2Uuc2hvdyhyb3V0ZSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWQubWVudS5yZWFkeScsb25SZWFkeSk7XG5cbiAgICBmdW5jdGlvbiBvblJlYWR5KCl7XG4gICAgICAgIHZhciBkZWxheT0oYXBwLlBSRUxPQURfREVMQVkpID8gYXBwLlBSRUxPQURfREVMQVkgOiAxMTAwO1xuICAgICAgICB2YXIgcm91dGU9TG9jYXRpb24ucGF0aDtcbiAgICAgICAgcm91dGUrPUxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgbWVudVNlcnZpY2Uuc2hvdyhyb3V0ZSk7XG4gICAgICAgICAgICBvZmYoKTtcbiAgICAgICAgfSxkZWxheSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvZmYoKXtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdtZC5tZW51LnJlYWR5JyxvblJlYWR5KTtcbiAgICB9XG59XG5cbiJdfQ==