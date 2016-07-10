(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../dependencies/container', '../references/moment'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../dependencies/container'), require('../references/moment'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.container, global.moment);
        global.datepickerService = mod.exports;
    }
})(this, function (_container, _moment) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    ///DatePicker Service:
    /// Sets Dates and Date Ranges from Selections made by the FAB Dashboard Datepicker
    /// Also returns the current selections, get-->returns a text label for the selected range. getDate-->returns a valid JS date/date range
    /// If get returns nothing, the service will set a default 'month-to-date' date range
    /// the service will also update Settings values from an injected $Settings provider. This is to allow persistence across sessions
    /// Finally, the service will set the Url filter string and notify any listeners of updated values


    var FORMATTER = 'MMMM D, YYYY';
    var Settings = _container2.default.getType('$Settings');

    function DatePicker() {
        this.$provider = this.constructor.$provider;
        this.set = function (type, val) {
            this.$provider.set(type, val);
            var value = this.$provider.value;
            var dateValue = this.$provider.dateValue;
            var dateRange = this.$provider.dateRange;
            var _type = this.$provider.type;
            var now = (0, _moment2.default)();
            Settings.set('range', value);
            Settings.set('dateValue', dateValue);
            Settings.set('dateRange', dateRange);
            Settings.set('now', now);
            Settings.set('type', _type);
        };
        this.get = function () {
            return this.$provider.get();
        };
        this.getDate = function () {
            ///return dateValue
            var value = this.$provider.getDate();
            var type = Settings.get('type');

            ///if range and value, return value (range is not dependent on a 'to-date' to today calculation)
            if (value && type === 'range') {
                return value;
            } else if (type === 'range') {
                var _dateValue = Settings.get('dateValue');
                if (_dateValue) {
                    var start_ = (0, _moment2.default)(_dateValue.start);
                    var end_ = (0, _moment2.default)(_dateValue.end);
                    return { start: start_, end: end_ };
                }
            }

            var invalidNow = true;
            var now = (0, _moment2.default)().format('l');
            var _now = (0, _moment2.default)(now);
            var strNow = _now.format(FORMATTER);
            var settingsNow = Settings.get('now');
            if (settingsNow) {
                settingsNow = (0, _moment2.default)(settingsNow);
                invalidNow = _now === settingsNow;
            }

            ///if settings now is a valid now and value exists, return value
            if (value && !invalidNow) {
                return value;
            }

            //if no type in settings, defaults to 'month-to-date'
            if (!type) {
                type = 'month-to-date';
            }
            ///else, we need to update the settings now
            ///e.g., avoid Datepicker set for 'today', login a week later and getting 'today' as last week's value
            switch (type) {
                case 'today':
                    {
                        this.$provider.setToday(now, _now, strNow);
                        return this.$provider.dateValue;
                    }
                case 'month-to-date':
                    {
                        this.$provider.setMonthToDate(strNow);
                        return this.$provider.dateValue;
                    }
                case 'year-to-date':
                    {
                        this.$provider.setYearToDate(strNow);
                        return this.$provider.dateValue;
                    }

            }

            return null;
        };

        this.getType = function () {
            var type = this.$provider.type;
            if (!type) {
                type = Settings.get('type');
                if (!type) {
                    return 'month-to-date';
                } else {
                    return type;
                }
            } else {
                return type;
            }
        };

        this.getDateRange = function () {
            var range = this.$provider.dateRange;
            if (range) {
                return range;
            } else {
                range = Settings.get('dateRange');
                if (range) {
                    this.$provider.dateRange = range;
                }
                return range;
            }
        };
    }

    _container2.default.mapType('DatePicker', new DatePicker(), '$DatePickerProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGVwaWNrZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLFFBQUksWUFBWSxjQUFoQjtBQUNBLFFBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFdBQWxCLENBQWY7O0FBRUEsYUFBUyxVQUFULEdBQXNCO0FBQ2xCLGFBQUssU0FBTCxHQUFpQixLQUFLLFdBQUwsQ0FBaUIsU0FBbEM7QUFDQSxhQUFLLEdBQUwsR0FBVyxVQUFVLElBQVYsRUFBZ0IsR0FBaEIsRUFBcUI7QUFDNUIsaUJBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsSUFBbkIsRUFBeUIsR0FBekI7QUFDQSxnQkFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLEtBQTNCO0FBQ0EsZ0JBQUksWUFBWSxLQUFLLFNBQUwsQ0FBZSxTQUEvQjtBQUNBLGdCQUFJLFlBQVksS0FBSyxTQUFMLENBQWUsU0FBL0I7QUFDQSxnQkFBSSxRQUFRLEtBQUssU0FBTCxDQUFlLElBQTNCO0FBQ0EsZ0JBQUksTUFBTSx1QkFBVjtBQUNBLHFCQUFTLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLEtBQXRCO0FBQ0EscUJBQVMsR0FBVCxDQUFhLFdBQWIsRUFBMEIsU0FBMUI7QUFDQSxxQkFBUyxHQUFULENBQWEsV0FBYixFQUEwQixTQUExQjtBQUNBLHFCQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CLEdBQXBCO0FBQ0EscUJBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsS0FBckI7QUFDSCxTQVpEO0FBYUEsYUFBSyxHQUFMLEdBQVcsWUFBWTtBQUNuQixtQkFBTyxLQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQVA7QUFDSCxTQUZEO0FBR0EsYUFBSyxPQUFMLEdBQWUsWUFBWTs7QUFFdkIsZ0JBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxPQUFmLEVBQVo7QUFDQSxnQkFBSSxPQUFPLFNBQVMsR0FBVCxDQUFhLE1BQWIsQ0FBWDs7O0FBR0EsZ0JBQUksU0FBUyxTQUFTLE9BQXRCLEVBQStCO0FBQzNCLHVCQUFPLEtBQVA7QUFDSCxhQUZELE1BRU8sSUFBSSxTQUFTLE9BQWIsRUFBc0I7QUFDekIsb0JBQUksYUFBYSxTQUFTLEdBQVQsQ0FBYSxXQUFiLENBQWpCO0FBQ0Esb0JBQUksVUFBSixFQUFnQjtBQUNaLHdCQUFJLFNBQVMsc0JBQU8sV0FBVyxLQUFsQixDQUFiO0FBQ0Esd0JBQUksT0FBTyxzQkFBTyxXQUFXLEdBQWxCLENBQVg7QUFDQSwyQkFBTyxFQUFDLE9BQU8sTUFBUixFQUFnQixLQUFLLElBQXJCLEVBQVA7QUFDSDtBQUNKOztBQUVELGdCQUFJLGFBQWEsSUFBakI7QUFDQSxnQkFBSSxNQUFNLHdCQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLGdCQUFJLE9BQU8sc0JBQU8sR0FBUCxDQUFYO0FBQ0EsZ0JBQUksU0FBUyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQWI7QUFDQSxnQkFBSSxjQUFjLFNBQVMsR0FBVCxDQUFhLEtBQWIsQ0FBbEI7QUFDQSxnQkFBSSxXQUFKLEVBQWlCO0FBQ2IsOEJBQWMsc0JBQU8sV0FBUCxDQUFkO0FBQ0EsNkJBQWMsU0FBUyxXQUF2QjtBQUNIOzs7QUFHRCxnQkFBSSxTQUFTLENBQUMsVUFBZCxFQUEwQjtBQUN0Qix1QkFBTyxLQUFQO0FBQ0g7OztBQUdELGdCQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsdUJBQU8sZUFBUDtBQUNIOzs7QUFHRCxvQkFBUSxJQUFSO0FBQ0kscUJBQUssT0FBTDtBQUNBO0FBQ0ksNkJBQUssU0FBTCxDQUFlLFFBQWYsQ0FBd0IsR0FBeEIsRUFBNkIsSUFBN0IsRUFBbUMsTUFBbkM7QUFDQSwrQkFBTyxLQUFLLFNBQUwsQ0FBZSxTQUF0QjtBQUNIO0FBQ0QscUJBQUssZUFBTDtBQUNBO0FBQ0ksNkJBQUssU0FBTCxDQUFlLGNBQWYsQ0FBOEIsTUFBOUI7QUFDQSwrQkFBTyxLQUFLLFNBQUwsQ0FBZSxTQUF0QjtBQUNIO0FBQ0QscUJBQUssY0FBTDtBQUNBO0FBQ0ksNkJBQUssU0FBTCxDQUFlLGFBQWYsQ0FBNkIsTUFBN0I7QUFDQSwrQkFBTyxLQUFLLFNBQUwsQ0FBZSxTQUF0QjtBQUNIOztBQWZMOztBQW1CQSxtQkFBTyxJQUFQO0FBQ0gsU0ExREQ7O0FBNERBLGFBQUssT0FBTCxHQUFlLFlBQVk7QUFDdkIsZ0JBQUksT0FBTyxLQUFLLFNBQUwsQ0FBZSxJQUExQjtBQUNBLGdCQUFJLENBQUMsSUFBTCxFQUFXO0FBQ1AsdUJBQU8sU0FBUyxHQUFULENBQWEsTUFBYixDQUFQO0FBQ0Esb0JBQUksQ0FBQyxJQUFMLEVBQVc7QUFDUCwyQkFBTyxlQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNILDJCQUFPLElBQVA7QUFDSDtBQUNKLGFBUEQsTUFPTztBQUNILHVCQUFPLElBQVA7QUFDSDtBQUNKLFNBWkQ7O0FBY0EsYUFBSyxZQUFMLEdBQW9CLFlBQVk7QUFDNUIsZ0JBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxTQUEzQjtBQUNBLGdCQUFJLEtBQUosRUFBVztBQUNQLHVCQUFPLEtBQVA7QUFDSCxhQUZELE1BRU87QUFDSCx3QkFBUSxTQUFTLEdBQVQsQ0FBYSxXQUFiLENBQVI7QUFDQSxvQkFBSSxLQUFKLEVBQVc7QUFDUCx5QkFBSyxTQUFMLENBQWUsU0FBZixHQUEyQixLQUEzQjtBQUNIO0FBQ0QsdUJBQU8sS0FBUDtBQUNIO0FBQ0osU0FYRDtBQVlIOztBQUVELHdCQUFVLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsSUFBSSxVQUFKLEVBQWhDLEVBQWtELHFCQUFsRCIsImZpbGUiOiJzZXJ2aWNlcy9kYXRlcGlja2VyU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vL0RhdGVQaWNrZXIgU2VydmljZTpcbi8vLyBTZXRzIERhdGVzIGFuZCBEYXRlIFJhbmdlcyBmcm9tIFNlbGVjdGlvbnMgbWFkZSBieSB0aGUgRkFCIERhc2hib2FyZCBEYXRlcGlja2VyXG4vLy8gQWxzbyByZXR1cm5zIHRoZSBjdXJyZW50IHNlbGVjdGlvbnMsIGdldC0tPnJldHVybnMgYSB0ZXh0IGxhYmVsIGZvciB0aGUgc2VsZWN0ZWQgcmFuZ2UuIGdldERhdGUtLT5yZXR1cm5zIGEgdmFsaWQgSlMgZGF0ZS9kYXRlIHJhbmdlXG4vLy8gSWYgZ2V0IHJldHVybnMgbm90aGluZywgdGhlIHNlcnZpY2Ugd2lsbCBzZXQgYSBkZWZhdWx0ICdtb250aC10by1kYXRlJyBkYXRlIHJhbmdlXG4vLy8gdGhlIHNlcnZpY2Ugd2lsbCBhbHNvIHVwZGF0ZSBTZXR0aW5ncyB2YWx1ZXMgZnJvbSBhbiBpbmplY3RlZCAkU2V0dGluZ3MgcHJvdmlkZXIuIFRoaXMgaXMgdG8gYWxsb3cgcGVyc2lzdGVuY2UgYWNyb3NzIHNlc3Npb25zXG4vLy8gRmluYWxseSwgdGhlIHNlcnZpY2Ugd2lsbCBzZXQgdGhlIFVybCBmaWx0ZXIgc3RyaW5nIGFuZCBub3RpZnkgYW55IGxpc3RlbmVycyBvZiB1cGRhdGVkIHZhbHVlc1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnLi4vcmVmZXJlbmNlcy9tb21lbnQnO1xuXG52YXIgRk9STUFUVEVSID0gJ01NTU0gRCwgWVlZWSc7XG52YXIgU2V0dGluZ3MgPSBjb250YWluZXIuZ2V0VHlwZSgnJFNldHRpbmdzJyk7XG5cbmZ1bmN0aW9uIERhdGVQaWNrZXIoKSB7XG4gICAgdGhpcy4kcHJvdmlkZXIgPSB0aGlzLmNvbnN0cnVjdG9yLiRwcm92aWRlcjtcbiAgICB0aGlzLnNldCA9IGZ1bmN0aW9uICh0eXBlLCB2YWwpIHtcbiAgICAgICAgdGhpcy4kcHJvdmlkZXIuc2V0KHR5cGUsIHZhbCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuJHByb3ZpZGVyLnZhbHVlO1xuICAgICAgICB2YXIgZGF0ZVZhbHVlID0gdGhpcy4kcHJvdmlkZXIuZGF0ZVZhbHVlO1xuICAgICAgICB2YXIgZGF0ZVJhbmdlID0gdGhpcy4kcHJvdmlkZXIuZGF0ZVJhbmdlO1xuICAgICAgICB2YXIgX3R5cGUgPSB0aGlzLiRwcm92aWRlci50eXBlO1xuICAgICAgICB2YXIgbm93ID0gbW9tZW50KCk7XG4gICAgICAgIFNldHRpbmdzLnNldCgncmFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgIFNldHRpbmdzLnNldCgnZGF0ZVZhbHVlJywgZGF0ZVZhbHVlKTtcbiAgICAgICAgU2V0dGluZ3Muc2V0KCdkYXRlUmFuZ2UnLCBkYXRlUmFuZ2UpO1xuICAgICAgICBTZXR0aW5ncy5zZXQoJ25vdycsIG5vdyk7XG4gICAgICAgIFNldHRpbmdzLnNldCgndHlwZScsIF90eXBlKTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcHJvdmlkZXIuZ2V0KCk7XG4gICAgfTtcbiAgICB0aGlzLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vL3JldHVybiBkYXRlVmFsdWVcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy4kcHJvdmlkZXIuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgdHlwZSA9IFNldHRpbmdzLmdldCgndHlwZScpO1xuXG4gICAgICAgIC8vL2lmIHJhbmdlIGFuZCB2YWx1ZSwgcmV0dXJuIHZhbHVlIChyYW5nZSBpcyBub3QgZGVwZW5kZW50IG9uIGEgJ3RvLWRhdGUnIHRvIHRvZGF5IGNhbGN1bGF0aW9uKVxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgICAgICAgIHZhciBfZGF0ZVZhbHVlID0gU2V0dGluZ3MuZ2V0KCdkYXRlVmFsdWUnKTtcbiAgICAgICAgICAgIGlmIChfZGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0XyA9IG1vbWVudChfZGF0ZVZhbHVlLnN0YXJ0KTtcbiAgICAgICAgICAgICAgICB2YXIgZW5kXyA9IG1vbWVudChfZGF0ZVZhbHVlLmVuZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtzdGFydDogc3RhcnRfLCBlbmQ6IGVuZF99O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGludmFsaWROb3cgPSB0cnVlO1xuICAgICAgICB2YXIgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdsJyk7XG4gICAgICAgIHZhciBfbm93ID0gbW9tZW50KG5vdyk7XG4gICAgICAgIHZhciBzdHJOb3cgPSBfbm93LmZvcm1hdChGT1JNQVRURVIpO1xuICAgICAgICB2YXIgc2V0dGluZ3NOb3cgPSBTZXR0aW5ncy5nZXQoJ25vdycpO1xuICAgICAgICBpZiAoc2V0dGluZ3NOb3cpIHtcbiAgICAgICAgICAgIHNldHRpbmdzTm93ID0gbW9tZW50KHNldHRpbmdzTm93KTtcbiAgICAgICAgICAgIGludmFsaWROb3cgPSAoX25vdyA9PT0gc2V0dGluZ3NOb3cpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8vaWYgc2V0dGluZ3Mgbm93IGlzIGEgdmFsaWQgbm93IGFuZCB2YWx1ZSBleGlzdHMsIHJldHVybiB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUgJiYgIWludmFsaWROb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgbm8gdHlwZSBpbiBzZXR0aW5ncywgZGVmYXVsdHMgdG8gJ21vbnRoLXRvLWRhdGUnXG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9ICdtb250aC10by1kYXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLy9lbHNlLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgc2V0dGluZ3Mgbm93XG4gICAgICAgIC8vL2UuZy4sIGF2b2lkIERhdGVwaWNrZXIgc2V0IGZvciAndG9kYXknLCBsb2dpbiBhIHdlZWsgbGF0ZXIgYW5kIGdldHRpbmcgJ3RvZGF5JyBhcyBsYXN0IHdlZWsncyB2YWx1ZVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvZGF5JzpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRwcm92aWRlci5zZXRUb2RheShub3csIF9ub3csIHN0ck5vdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHByb3ZpZGVyLmRhdGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ21vbnRoLXRvLWRhdGUnOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuJHByb3ZpZGVyLnNldE1vbnRoVG9EYXRlKHN0ck5vdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHByb3ZpZGVyLmRhdGVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3llYXItdG8tZGF0ZSc6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvdmlkZXIuc2V0WWVhclRvRGF0ZShzdHJOb3cpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRwcm92aWRlci5kYXRlVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0eXBlID0gdGhpcy4kcHJvdmlkZXIudHlwZTtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICB0eXBlID0gU2V0dGluZ3MuZ2V0KCd0eXBlJyk7XG4gICAgICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ21vbnRoLXRvLWRhdGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RGF0ZVJhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmFuZ2UgPSB0aGlzLiRwcm92aWRlci5kYXRlUmFuZ2U7XG4gICAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2UgPSBTZXR0aW5ncy5nZXQoJ2RhdGVSYW5nZScpO1xuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcHJvdmlkZXIuZGF0ZVJhbmdlID0gcmFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2U7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5jb250YWluZXIubWFwVHlwZSgnRGF0ZVBpY2tlcicsIG5ldyBEYXRlUGlja2VyKCksICckRGF0ZVBpY2tlclByb3ZpZGVyJyk7XG5cbiAiXX0=