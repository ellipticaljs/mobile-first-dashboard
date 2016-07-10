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
        global.menuService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class MenuService {
        constructor() {
            this.element = null;
            this.$provider = null;
        }

        show(params) {
            this.$provider.show(params);
        }

        setElement(element) {
            this.$provider.setElement(element);
        }
    }

    _container2.default.mapType('MenuService', new MenuService(), '$MenuProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsVUFBTSxXQUFOLENBQWtCO0FBQ2Qsc0JBQWM7QUFDVixpQkFBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDSDs7QUFFRCxhQUFLLE1BQUwsRUFBYTtBQUNULGlCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLE1BQXBCO0FBQ0g7O0FBRUQsbUJBQVcsT0FBWCxFQUFvQjtBQUNoQixpQkFBSyxTQUFMLENBQWUsVUFBZixDQUEwQixPQUExQjtBQUNIO0FBWmE7O0FBZWxCLHdCQUFVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsSUFBSSxXQUFKLEVBQWpDLEVBQW9ELGVBQXBEIiwiZmlsZSI6InNlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuXG5jbGFzcyBNZW51U2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHByb3ZpZGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzaG93KHBhcmFtcykge1xuICAgICAgICB0aGlzLiRwcm92aWRlci5zaG93KHBhcmFtcyk7XG4gICAgfVxuXG4gICAgc2V0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHByb3ZpZGVyLnNldEVsZW1lbnQoZWxlbWVudCk7XG4gICAgfVxufVxuXG5jb250YWluZXIubWFwVHlwZSgnTWVudVNlcnZpY2UnLCBuZXcgTWVudVNlcnZpY2UoKSwgJyRNZW51UHJvdmlkZXInKTtcblxuICAiXX0=