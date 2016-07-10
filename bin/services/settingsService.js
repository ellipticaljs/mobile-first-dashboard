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
        global.settingsService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Store = _container2.default.getType('Store');

    class Settings extends Store {
        static getDashboard(key) {
            return this.$provider.getDashboard(key);
        }

        static setDashboard(key, value) {
            this.$provider.setDashboard(key, value);
        }

        static getDisplayModel() {
            return this.$provider.getDisplayModel();
        }

        getDashboard(key) {
            return this.constructor.getDashboard(key);
        }

        setDashboard(key, value) {
            this.constructor.setDashboard(key, value);
        }

        getDisplayModel() {
            return this.constructor.getDisplayModel();
        }
    }

    _container2.default.mapType('Settings', Settings, '$Settings');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NldHRpbmdzU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFFBQUksUUFBUSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7O0FBRUEsVUFBTSxRQUFOLFNBQXVCLEtBQXZCLENBQTZCO0FBQ3pCLGVBQU8sWUFBUCxDQUFvQixHQUFwQixFQUF5QjtBQUNyQixtQkFBTyxLQUFLLFNBQUwsQ0FBZSxZQUFmLENBQTRCLEdBQTVCLENBQVA7QUFDSDs7QUFFRCxlQUFPLFlBQVAsQ0FBb0IsR0FBcEIsRUFBeUIsS0FBekIsRUFBZ0M7QUFDNUIsaUJBQUssU0FBTCxDQUFlLFlBQWYsQ0FBNEIsR0FBNUIsRUFBaUMsS0FBakM7QUFDSDs7QUFFRCxlQUFPLGVBQVAsR0FBeUI7QUFDckIsbUJBQU8sS0FBSyxTQUFMLENBQWUsZUFBZixFQUFQO0FBQ0g7O0FBRUQscUJBQWEsR0FBYixFQUFrQjtBQUNkLG1CQUFPLEtBQUssV0FBTCxDQUFpQixZQUFqQixDQUE4QixHQUE5QixDQUFQO0FBQ0g7O0FBRUQscUJBQWEsR0FBYixFQUFrQixLQUFsQixFQUF5QjtBQUNyQixpQkFBSyxXQUFMLENBQWlCLFlBQWpCLENBQThCLEdBQTlCLEVBQW1DLEtBQW5DO0FBQ0g7O0FBRUQsMEJBQWtCO0FBQ2QsbUJBQU8sS0FBSyxXQUFMLENBQWlCLGVBQWpCLEVBQVA7QUFDSDtBQXZCd0I7O0FBMEI3Qix3QkFBVSxPQUFWLENBQWtCLFVBQWxCLEVBQThCLFFBQTlCLEVBQXdDLFdBQXhDIiwiZmlsZSI6InNlcnZpY2VzL3NldHRpbmdzU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cbnZhciBTdG9yZSA9IGNvbnRhaW5lci5nZXRUeXBlKCdTdG9yZScpO1xuXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0RGFzaGJvYXJkKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcHJvdmlkZXIuZ2V0RGFzaGJvYXJkKGtleSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldERhc2hib2FyZChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJHByb3ZpZGVyLnNldERhc2hib2FyZChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXREaXNwbGF5TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRwcm92aWRlci5nZXREaXNwbGF5TW9kZWwoKVxuICAgIH1cblxuICAgIGdldERhc2hib2FyZChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0RGFzaGJvYXJkKGtleSk7XG4gICAgfVxuXG4gICAgc2V0RGFzaGJvYXJkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXREYXNoYm9hcmQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0RGlzcGxheU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXREaXNwbGF5TW9kZWwoKTtcbiAgICB9XG59XG5cbmNvbnRhaW5lci5tYXBUeXBlKCdTZXR0aW5ncycsIFNldHRpbmdzLCAnJFNldHRpbmdzJyk7XG5cbiAgICJdfQ==