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
        global.settingsProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var $Local = elliptical.$Local;

    function _get(model, key) {
        return _.find(model, function (obj) {
            return obj.key === key;
        });
    }

    function _replace(model, key, newObj) {
        var old = _get(model, key);
        for (var k in old) {
            if (old.hasOwnProperty(k)) {
                if (newObj[k] !== undefined) {
                    old[k] = newObj[k];
                }
            }
        }
    }

    class _Settings {
        init() {
            var model = {
                range: 'month-to-date',
                type: 'month-to-date',
                dateValue: null,
                dateRange: null,
                now: null,
                dashboard: []
            };

            model.dashboard.push(this.createComponent('StatisticsGraph', 'Statistics Graph', true));
            model.dashboard.push(this.createComponent('TrendsGraph', 'Trends Graph', true));
            model.dashboard.push(this.createComponent('RealTimeGraph', 'Real Time Graph', true));
            model.dashboard.push(this.createComponent('SocialGraph', 'Social Graph', true));
            model.dashboard.push(this.createComponent('BrowserUsage', 'Browser Usage', true));
            model.dashboard.push(this.createComponent('DeviceUsage', 'Device Usage', true));

            return model;
        }

        createComponent(key, name, active) {
            return {
                key: key,
                name: name,
                active: active
            };
        }
    }

    class Settings {
        constructor() {
            this.constructor.key = 'Settings';
        }

        create() {
            var settings = new _Settings();
            var obj = settings.init();
            $Local.set(this.key, obj);
            return obj;
        }

        get(key) {
            var settings = $Local.get(this.key);
            if (!settings && settings !== undefined) settings = this.create();
            if (key) return settings[key];else return settings;
        }

        set(key, value) {
            var settings = this.get();
            settings[key] = value;
            $Local.set(this.key, settings);
        }

        getDashboard(key) {
            var settings = this.get();
            if (key === undefined) return settings.dashboard;else {
                return _.find(settings.dashboard, function (obj) {
                    return obj.key === key;
                });
            }
        }

        setDashboard(key, value) {
            var settings = this.get();
            var dashboard = settings.dashboard;
            _replace(dashboard, key, value);
            $Local.set(this.key, settings);
        }

        getDisplayModel() {
            var settings = this.get();
            var dashboard = settings.dashboard;
            var display = {};
            for (var i = 0; i < dashboard.length; i++) {
                display[dashboard[i].key] = dashboard[i].active ? {} : '';
            }

            return display;
        }

    }

    _container2.default.registerType('$Settings', new Settings());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zZXR0aW5nc1Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsUUFBSSxTQUFTLFdBQVcsTUFBeEI7O0FBRUEsYUFBUyxJQUFULENBQWMsS0FBZCxFQUFxQixHQUFyQixFQUEwQjtBQUN0QixlQUFPLEVBQUUsSUFBRixDQUFPLEtBQVAsRUFBYyxVQUFVLEdBQVYsRUFBZTtBQUNoQyxtQkFBTyxJQUFJLEdBQUosS0FBWSxHQUFuQjtBQUNILFNBRk0sQ0FBUDtBQUdIOztBQUVELGFBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QixNQUE5QixFQUFzQztBQUNsQyxZQUFJLE1BQU0sS0FBSyxLQUFMLEVBQVksR0FBWixDQUFWO0FBQ0EsYUFBSyxJQUFJLENBQVQsSUFBYyxHQUFkLEVBQW1CO0FBQ2YsZ0JBQUksSUFBSSxjQUFKLENBQW1CLENBQW5CLENBQUosRUFBMkI7QUFDdkIsb0JBQUksT0FBTyxDQUFQLE1BQWMsU0FBbEIsRUFBNkI7QUFDekIsd0JBQUksQ0FBSixJQUFTLE9BQU8sQ0FBUCxDQUFUO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsVUFBTSxTQUFOLENBQWdCO0FBQ1osZUFBTztBQUNILGdCQUFJLFFBQVE7QUFDUix1QkFBTyxlQURDO0FBRVIsc0JBQU0sZUFGRTtBQUdSLDJCQUFXLElBSEg7QUFJUiwyQkFBVyxJQUpIO0FBS1IscUJBQUssSUFMRztBQU1SLDJCQUFXO0FBTkgsYUFBWjs7QUFTQSxrQkFBTSxTQUFOLENBQWdCLElBQWhCLENBQXFCLEtBQUssZUFBTCxDQUFxQixpQkFBckIsRUFBd0Msa0JBQXhDLEVBQTRELElBQTVELENBQXJCO0FBQ0Esa0JBQU0sU0FBTixDQUFnQixJQUFoQixDQUFxQixLQUFLLGVBQUwsQ0FBcUIsYUFBckIsRUFBb0MsY0FBcEMsRUFBb0QsSUFBcEQsQ0FBckI7QUFDQSxrQkFBTSxTQUFOLENBQWdCLElB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxudmFyICRMb2NhbCA9IGVsbGlwdGljYWwuJExvY2FsO1xuXG5mdW5jdGlvbiBfZ2V0KG1vZGVsLCBrZXkpIHtcbiAgICByZXR1cm4gXy5maW5kKG1vZGVsLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmoua2V5ID09PSBrZXk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gX3JlcGxhY2UobW9kZWwsIGtleSwgbmV3T2JqKSB7XG4gICAgdmFyIG9sZCA9IF9nZXQobW9kZWwsIGtleSk7XG4gICAgZm9yICh2YXIgayBpbiBvbGQpIHtcbiAgICAgICAgaWYgKG9sZC5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgaWYgKG5ld09ialtrXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb2xkW2tdID0gbmV3T2JqW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBfU2V0dGluZ3Mge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHtcbiAgICAgICAgICAgIHJhbmdlOiAnbW9udGgtdG8tZGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnbW9udGgtdG8tZGF0ZScsXG4gICAgICAgICAgICBkYXRlVmFsdWU6IG51bGwsXG4gICAgICAgICAgICBkYXRlUmFuZ2U6IG51bGwsXG4gICAgICAgICAgICBub3c6IG51bGwsXG4gICAgICAgICAgICBkYXNoYm9hcmQ6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kZWwuZGFzaGJvYXJkLnB1c2godGhpcy5jcmVhdGVDb21wb25lbnQoJ1N0YXRpc3RpY3NHcmFwaCcsICdTdGF0aXN0aWNzIEdyYXBoJywgdHJ1ZSkpO1xuICAgICAgICBtb2RlbC5kYXNoYm9hcmQucHVzaCh0aGlzLmNyZWF0ZUNvbXBvbmVudCgnVHJlbmRzR3JhcGgnLCAnVHJlbmRzIEdyYXBoJywgdHJ1ZSkpO1xuICAgICAgICBtb2RlbC5kYXNoYm9hcmQucHVzaCh0aGlzLmNyZWF0ZUNvbXBvbmVudCgnUmVhbFRpbWVHcmFwaCcsICdSZWFsIFRpbWUgR3JhcGgnLCB0cnVlKSk7XG4gICAgICAgIG1vZGVsLmRhc2hib2FyZC5wdXNoKHRoaXMuY3JlYXRlQ29tcG9uZW50KCdTb2NpYWxHcmFwaCcsICdTb2NpYWwgR3JhcGgnLCB0cnVlKSk7XG4gICAgICAgIG1vZGVsLmRhc2hib2FyZC5wdXNoKHRoaXMuY3JlYXRlQ29tcG9uZW50KCdCcm93c2VyVXNhZ2UnLCAnQnJvd3NlciBVc2FnZScsIHRydWUpKTtcbiAgICAgICAgbW9kZWwuZGFzaGJvYXJkLnB1c2godGhpcy5jcmVhdGVDb21wb25lbnQoJ0RldmljZVVzYWdlJywgJ0RldmljZSBVc2FnZScsIHRydWUpKTtcblxuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGtleSwgbmFtZSwgYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iua2V5ID0gJ1NldHRpbmdzJztcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IG5ldyBfU2V0dGluZ3MoKTtcbiAgICAgICAgdmFyIG9iaiA9IHNldHRpbmdzLmluaXQoKTtcbiAgICAgICAgJExvY2FsLnNldCh0aGlzLmtleSwgb2JqKTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICRMb2NhbC5nZXQodGhpcy5rZXkpO1xuICAgICAgICBpZiAoIXNldHRpbmdzICYmIHNldHRpbmdzICE9PSB1bmRlZmluZWQpIHNldHRpbmdzID0gdGhpcy5jcmVhdGUoKTtcbiAgICAgICAgaWYgKGtleSkgcmV0dXJuIHNldHRpbmdzW2tleV07XG4gICAgICAgIGVsc2UgcmV0dXJuIHNldHRpbmdzO1xuICAgIH1cblxuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIHNldHRpbmdzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgJExvY2FsLnNldCh0aGlzLmtleSwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGdldERhc2hib2FyZChrZXkpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5nZXQoKTtcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc2V0dGluZ3MuZGFzaGJvYXJkO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLmZpbmQoc2V0dGluZ3MuZGFzaGJvYXJkLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5rZXkgPT09IGtleTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGFzaGJvYXJkKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5nZXQoKTtcbiAgICAgICAgdmFyIGRhc2hib2FyZCA9IHNldHRpbmdzLmRhc2hib2FyZDtcbiAgICAgICAgX3JlcGxhY2UoZGFzaGJvYXJkLCBrZXksIHZhbHVlKTtcbiAgICAgICAgJExvY2FsLnNldCh0aGlzLmtleSwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGdldERpc3BsYXlNb2RlbCgpIHtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gdGhpcy5nZXQoKTtcbiAgICAgICAgdmFyIGRhc2hib2FyZCA9IHNldHRpbmdzLmRhc2hib2FyZDtcbiAgICAgICAgdmFyIGRpc3BsYXkgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXNoYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpc3BsYXlbZGFzaGJvYXJkW2ldLmtleV0gPSAoZGFzaGJvYXJkW2ldLmFjdGl2ZSkgPyB7fSA6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpc3BsYXk7XG4gICAgfVxuXG59XG5cbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRTZXR0aW5ncycsIG5ldyBTZXR0aW5ncygpKTtcblxuIl19