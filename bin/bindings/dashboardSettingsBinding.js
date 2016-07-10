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
        global.dashboardSettingsBinding = mod.exports;
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

    ///Dashboard Settings Binding: Listens for changes in the switch settings in Settings > Dashboard and calls the Settings service
    /// to update the persistence store


    _elliptical2.default.binding('dashboard-settings', function (node) {
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event($(document), 'md.switch.change', onChange);

        function onChange(event, data) {
            var Settings = _container2.default.getType('Settings');
            var component = Settings.getDashboard(data.id);
            component.active = data.checked;
            Settings.setDashboard(data.id, component);
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2Rhc2hib2FyZFNldHRpbmdzQmluZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLHlCQUFXLE9BQVgsQ0FBbUIsb0JBQW5CLEVBQXlDLFVBQVUsSUFBVixFQUFnQjtBQUNyRCxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxNQUFNLElBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBVjtBQUNBLFlBQUksS0FBSixDQUFVLEVBQUUsUUFBRixDQUFWLEVBQXVCLGtCQUF2QixFQUEyQyxRQUEzQzs7QUFFQSxpQkFBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCLElBQXpCLEVBQStCO0FBQzNCLGdCQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsZ0JBQUksWUFBWSxTQUFTLFlBQVQsQ0FBc0IsS0FBSyxFQUEzQixDQUFoQjtBQUNBLHNCQUFVLE1BQVYsR0FBbUIsS0FBSyxPQUF4QjtBQUNBLHFCQUFTLFlBQVQsQ0FBc0IsS0FBSyxFQUEzQixFQUErQixTQUEvQjtBQUNIOztBQUVELGFBQUssT0FBTCxHQUFlLE1BQUs7QUFDaEIsZ0JBQUksTUFBSjtBQUNILFNBRkQ7QUFHSCxLQWZEIiwiZmlsZSI6ImJpbmRpbmdzL2Rhc2hib2FyZFNldHRpbmdzQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vL0Rhc2hib2FyZCBTZXR0aW5ncyBCaW5kaW5nOiBMaXN0ZW5zIGZvciBjaGFuZ2VzIGluIHRoZSBzd2l0Y2ggc2V0dGluZ3MgaW4gU2V0dGluZ3MgPiBEYXNoYm9hcmQgYW5kIGNhbGxzIHRoZSBTZXR0aW5ncyBzZXJ2aWNlXG4vLy8gdG8gdXBkYXRlIHRoZSBwZXJzaXN0ZW5jZSBzdG9yZVxuaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cblxuZWxsaXB0aWNhbC5iaW5kaW5nKCdkYXNoYm9hcmQtc2V0dGluZ3MnLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBEb21FdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdEb21FdmVudCcpO1xuICAgIHZhciBkb20gPSBuZXcgRG9tRXZlbnQobm9kZSwgdGhpcyk7XG4gICAgZG9tLmV2ZW50KCQoZG9jdW1lbnQpLCAnbWQuc3dpdGNoLmNoYW5nZScsIG9uQ2hhbmdlKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHZhciBTZXR0aW5ncyA9IGNvbnRhaW5lci5nZXRUeXBlKCdTZXR0aW5ncycpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gU2V0dGluZ3MuZ2V0RGFzaGJvYXJkKGRhdGEuaWQpO1xuICAgICAgICBjb21wb25lbnQuYWN0aXZlID0gZGF0YS5jaGVja2VkO1xuICAgICAgICBTZXR0aW5ncy5zZXREYXNoYm9hcmQoZGF0YS5pZCwgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSAoKT0+IHtcbiAgICAgICAgZG9tLnVuYmluZCgpO1xuICAgIH07XG59KTtcblxuXG4gICJdfQ==