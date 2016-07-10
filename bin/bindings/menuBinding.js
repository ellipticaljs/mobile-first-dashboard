(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../references/elliptical', '../dependencies/container'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../references/elliptical'), require('../dependencies/container'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.elliptical, global.container);
        global.menuBinding = mod.exports;
    }
})(this, function (_elliptical, _container) {
    'use strict';

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /// Handles setting the correct menu path on page load
    /// also handles menu 404--menu can't match menu item to a route(applies mainly to history events, i.e back button)


    _elliptical2.default.binding('menu', function (node) {
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event($(document), 'md.menu.url.404', onUrl404);

        var menuService = _container2.default.getType('MenuService');
        menuService.setElement($(node));
        var Location = _container2.default.getType('Location');
        var path = Location.path;
        menuService.show(path);

        function onUrl404(event, data) {}

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL21lbnVCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEseUJBQVcsT0FBWCxDQUFtQixNQUFuQixFQUEyQixVQUFVLElBQVYsRUFBZ0I7QUFDdkMsWUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFlBQUksTUFBTSxJQUFJLFFBQUosQ0FBYSxJQUFiLEVBQW1CLElBQW5CLENBQVY7QUFDQSxZQUFJLEtBQUosQ0FBVSxFQUFFLFFBQUYsQ0FBVixFQUF1QixpQkFBdkIsRUFBMEMsUUFBMUM7O0FBRUEsWUFBSSxjQUFjLG9CQUFVLE9BQVYsQ0FBa0IsYUFBbEIsQ0FBbEI7QUFDQSxvQkFBWSxVQUFaLENBQXVCLEVBQUUsSUFBRixDQUF2QjtBQUNBLFlBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7QUFDQSxZQUFJLE9BQU8sU0FBUyxJQUFwQjtBQUNBLG9CQUFZLElBQVosQ0FBaUIsSUFBakI7O0FBRUEsaUJBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixJQUF6QixFQUErQixDQUU5Qjs7QUFFRCxhQUFLLE9BQUwsR0FBZSxNQUFLO0FBQ2hCLGdCQUFJLE1BQUo7QUFDSCxTQUZEO0FBSUgsS0FuQkQiLCJmaWxlIjoiYmluZGluZ3MvbWVudUJpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gSGFuZGxlcyBzZXR0aW5nIHRoZSBjb3JyZWN0IG1lbnUgcGF0aCBvbiBwYWdlIGxvYWRcbi8vLyBhbHNvIGhhbmRsZXMgbWVudSA0MDQtLW1lbnUgY2FuJ3QgbWF0Y2ggbWVudSBpdGVtIHRvIGEgcm91dGUoYXBwbGllcyBtYWlubHkgdG8gaGlzdG9yeSBldmVudHMsIGkuZSBiYWNrIGJ1dHRvbilcbmltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5cbmVsbGlwdGljYWwuYmluZGluZygnbWVudScsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIERvbUV2ZW50ID0gY29udGFpbmVyLmdldFR5cGUoJ0RvbUV2ZW50Jyk7XG4gICAgdmFyIGRvbSA9IG5ldyBEb21FdmVudChub2RlLCB0aGlzKTtcbiAgICBkb20uZXZlbnQoJChkb2N1bWVudCksICdtZC5tZW51LnVybC40MDQnLCBvblVybDQwNCk7XG5cbiAgICB2YXIgbWVudVNlcnZpY2UgPSBjb250YWluZXIuZ2V0VHlwZSgnTWVudVNlcnZpY2UnKTtcbiAgICBtZW51U2VydmljZS5zZXRFbGVtZW50KCQobm9kZSkpO1xuICAgIHZhciBMb2NhdGlvbiA9IGNvbnRhaW5lci5nZXRUeXBlKCdMb2NhdGlvbicpO1xuICAgIHZhciBwYXRoID0gTG9jYXRpb24ucGF0aDtcbiAgICBtZW51U2VydmljZS5zaG93KHBhdGgpO1xuXG4gICAgZnVuY3Rpb24gb25Vcmw0MDQoZXZlbnQsIGRhdGEpIHtcblxuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zZSA9ICgpPT4ge1xuICAgICAgICBkb20udW5iaW5kKCk7XG4gICAgfTtcblxufSk7XG5cblxuICAgIl19