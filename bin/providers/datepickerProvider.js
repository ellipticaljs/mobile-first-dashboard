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
        global.datepickerProvider = mod.exports;
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

    var EVENT_NAME = 'db.datapicker.change';
    var FORMATTER = 'MMMM D, YYYY';
    var Location = _container2.default.getType('Location');
    var Event = _container2.default.getType('Event');

    function $DatePicker() {
        this.type = null;
        this.value = null;
        this.dateValue = null;
        this.dateRange = null;

        this.set = function (type, val) {
            var filter = '';
            var url = '/Order/List/1?$filter=';
            var now = (0, _moment2.default)().format('l');
            var _now = (0, _moment2.default)(now);
            var strNow = _now.format(FORMATTER);
            if (type === 'today') {
                filter = this.setToday(now, _now, strNow);
            } else if (type === 'year-to-date') {
                filter = this.setYearToDate(strNow);
            } else if (type === 'month-to-date') {
                filter = this.setMonthToDate(strNow);
            } else if (type === 'range') {
                filter = this.setRange(val);
            }
            url += filter;
            var currentPath = Location.path;
            if (currentPath !== '/') {
                Location.redirect(url);
            } else {
                Event.emit(EVENT_NAME, this.dateValue);
            }
        };

        this.get = function () {
            return this.value;
        };

        this.getDate = function () {
            return this.dateValue;
        };

        this.getType = function () {
            return this.type;
        };

        this._getDateRange = function (obj) {

            var now = (0, _moment2.default)().format('l');
            var _now = (0, _moment2.default)(now);
            var strNow = _now.format(FORMATTER);
            return obj.format(FORMATTER) + ' - ' + strNow;
        };

        this.setToday = function (now, _now, strNow) {
            var filter = 'Date eq ' + now;
            this.value = 'today';
            this.type = 'today';
            this.dateValue = _now;
            this.dateRange = strNow;
            return filter;
        };

        this.setYearToDate = function (strNow) {
            var currentYear = (0, _moment2.default)().format('YYYY');
            var yearDate = '1/1/' + currentYear;
            var filter = 'Date ge ' + yearDate;
            this.value = 'year to date';
            this.type = 'year-to-date';
            this.dateValue = (0, _moment2.default)(yearDate);
            this.dateRange = this.dateValue.format(FORMATTER) + ' - ' + strNow;
            return filter;
        };

        this.setMonthToDate = function (strNow) {
            var currentMonth = (0, _moment2.default)().format('MM');
            var currentYear = (0, _moment2.default)().format('YYYY');
            var monthDate = currentMonth + '/1/' + currentYear;
            var filter = 'Date ge ' + monthDate;
            this.value = 'month to date';
            this.type = 'month-to-date';
            this.dateValue = (0, _moment2.default)(monthDate);
            this.dateRange = this.dateValue.format(FORMATTER) + ' - ' + strNow;
            return filter;
        };

        this.setRange = function (val) {
            var filter = 'Date ge ' + val.start + ' le ' + val.end;
            this.value = val.start + ' - ' + val.end;
            this.type = 'range';
            this.dateValue = {
                start: (0, _moment2.default)(val.start),
                end: (0, _moment2.default)(val.end)
            };
            this.dateRange = this.dateValue.start.format(FORMATTER) + ' - ' + this.dateValue.end.format(FORMATTER);
            return filter;
        };
    }

    _container2.default.registerType('$DatePickerProvider', new $DatePicker());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9kYXRlcGlja2VyUHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFFBQUksYUFBYSxzQkFBakI7QUFDQSxRQUFJLFlBQVksY0FBaEI7QUFDQSxRQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsUUFBSSxRQUFRLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWjs7QUFFQSxhQUFTLFdBQVQsR0FBdUI7QUFDbkIsYUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsSUFBakI7O0FBRUEsYUFBSyxHQUFMLEdBQVcsVUFBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCO0FBQzVCLGdCQUFJLFNBQVMsRUFBYjtBQUNBLGdCQUFJLE1BQU0sd0JBQVY7QUFDQSxnQkFBSSxNQUFNLHdCQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsQ0FBVjtBQUNBLGdCQUFJLE9BQU8sc0JBQU8sR0FBUCxDQUFYO0FBQ0EsZ0JBQUksU0FBUyxLQUFLLE1BQUwsQ0FBWSxTQUFaLENBQWI7QUFDQSxnQkFBSSxTQUFTLE9BQWIsRUFBc0I7QUFDbEIseUJBQVMsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixJQUFuQixFQUF5QixNQUF6QixDQUFUO0FBRUgsYUFIRCxNQUdPLElBQUksU0FBUyxjQUFiLEVBQTZCO0FBQ2hDLHlCQUFTLEtBQUssYUFBTCxDQUFtQixNQUFuQixDQUFUO0FBRUgsYUFITSxNQUdBLElBQUksU0FBUyxlQUFiLEVBQThCO0FBQ2pDLHlCQUFTLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUFUO0FBRUgsYUFITSxNQUdBLElBQUksU0FBUyxPQUFiLEVBQXNCO0FBQ3pCLHlCQUFTLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBVDtBQUNIO0FBQ0QsbUJBQU8s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QixLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLE1BQXJCLENBQTRCLFNBQTVCLElBQXlDLEtBQXpDLEdBQWlELEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBbUIsTUFBbkIsQ0FBMEIsU0FBMUIsQ0FBbEU7QUFDQSxtQkFBTyxNQUFQO0FBQ0gsU0FWRDtBQVdIOztBQUVELHdCQUFVLFlBQVYsQ0FBdUIscUJBQXZCLEVBQThDLElBQUksV0FBSixFQUE5QyIsImZpbGUiOiJwcm92aWRlcnMvZGF0ZXBpY2tlclByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcbmltcG9ydCBtb21lbnQgZnJvbSAnLi4vcmVmZXJlbmNlcy9tb21lbnQnO1xuXG52YXIgRVZFTlRfTkFNRSA9ICdkYi5kYXRhcGlja2VyLmNoYW5nZSc7XG52YXIgRk9STUFUVEVSID0gJ01NTU0gRCwgWVlZWSc7XG52YXIgTG9jYXRpb24gPSBjb250YWluZXIuZ2V0VHlwZSgnTG9jYXRpb24nKTtcbnZhciBFdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdFdmVudCcpO1xuXG5mdW5jdGlvbiAkRGF0ZVBpY2tlcigpIHtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuZGF0ZVZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmRhdGVSYW5nZSA9IG51bGw7XG5cbiAgICB0aGlzLnNldCA9IGZ1bmN0aW9uICh0eXBlLCB2YWwpIHtcbiAgICAgICAgdmFyIGZpbHRlciA9ICcnO1xuICAgICAgICB2YXIgdXJsID0gJy9PcmRlci9MaXN0LzE/JGZpbHRlcj0nO1xuICAgICAgICB2YXIgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdsJyk7XG4gICAgICAgIHZhciBfbm93ID0gbW9tZW50KG5vdyk7XG4gICAgICAgIHZhciBzdHJOb3cgPSBfbm93LmZvcm1hdChGT1JNQVRURVIpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5zZXRUb2RheShub3csIF9ub3csIHN0ck5vdyk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneWVhci10by1kYXRlJykge1xuICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5zZXRZZWFyVG9EYXRlKHN0ck5vdyk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbW9udGgtdG8tZGF0ZScpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuc2V0TW9udGhUb0RhdGUoc3RyTm93KVxuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICAgICAgZmlsdGVyID0gdGhpcy5zZXRSYW5nZSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHVybCArPSBmaWx0ZXI7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IExvY2F0aW9uLnBhdGg7XG4gICAgICAgIGlmIChjdXJyZW50UGF0aCAhPT0gJy8nKSB7XG4gICAgICAgICAgICBMb2NhdGlvbi5yZWRpcmVjdCh1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRXZlbnQuZW1pdChFVkVOVF9OQU1FLCB0aGlzLmRhdGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG5cbiAgICB0aGlzLmdldERhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGVWYWx1ZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH07XG5cbiAgICB0aGlzLl9nZXREYXRlUmFuZ2UgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgXG4gICAgICAgIHZhciBub3cgPSBtb21lbnQoKS5mb3JtYXQoJ2wnKTtcbiAgICAgICAgdmFyIF9ub3cgPSBtb21lbnQobm93KTtcbiAgICAgICAgdmFyIHN0ck5vdyA9IF9ub3cuZm9ybWF0KEZPUk1BVFRFUik7XG4gICAgICAgIHJldHVybiBvYmouZm9ybWF0KEZPUk1BVFRFUikgKyAnIC0gJyArIHN0ck5vdztcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRUb2RheSA9IGZ1bmN0aW9uIChub3csIF9ub3csIHN0ck5vdykge1xuICAgICAgICB2YXIgZmlsdGVyID0gJ0RhdGUgZXEgJyArIG5vdztcbiAgICAgICAgdGhpcy52YWx1ZSA9ICd0b2RheSc7XG4gICAgICAgIHRoaXMudHlwZSA9ICd0b2RheSc7XG4gICAgICAgIHRoaXMuZGF0ZVZhbHVlID0gX25vdztcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2UgPSBzdHJOb3c7XG4gICAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0WWVhclRvRGF0ZSA9IGZ1bmN0aW9uIChzdHJOb3cpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZJyk7XG4gICAgICAgIHZhciB5ZWFyRGF0ZSA9ICcxLzEvJyArIGN1cnJlbnRZZWFyO1xuICAgICAgICB2YXIgZmlsdGVyID0gJ0RhdGUgZ2UgJyArIHllYXJEYXRlO1xuICAgICAgICB0aGlzLnZhbHVlID0gJ3llYXIgdG8gZGF0ZSc7XG4gICAgICAgIHRoaXMudHlwZSA9ICd5ZWFyLXRvLWRhdGUnO1xuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IG1vbWVudCh5ZWFyRGF0ZSk7XG4gICAgICAgIHRoaXMuZGF0ZVJhbmdlID0gdGhpcy5kYXRlVmFsdWUuZm9ybWF0KEZPUk1BVFRFUikgKyAnIC0gJyArIHN0ck5vdztcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRNb250aFRvRGF0ZSA9IGZ1bmN0aW9uIChzdHJOb3cpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRNb250aCA9IG1vbWVudCgpLmZvcm1hdCgnTU0nKTtcbiAgICAgICAgdmFyIGN1cnJlbnRZZWFyID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZJyk7XG4gICAgICAgIHZhciBtb250aERhdGUgPSBjdXJyZW50TW9udGggKyAnLzEvJyArIGN1cnJlbnRZZWFyO1xuICAgICAgICB2YXIgZmlsdGVyID0gJ0RhdGUgZ2UgJyArIG1vbnRoRGF0ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICdtb250aCB0byBkYXRlJztcbiAgICAgICAgdGhpcy50eXBlID0gJ21vbnRoLXRvLWRhdGUnO1xuICAgICAgICB0aGlzLmRhdGVWYWx1ZSA9IG1vbWVudChtb250aERhdGUpO1xuICAgICAgICB0aGlzLmRhdGVSYW5nZSA9IHRoaXMuZGF0ZVZhbHVlLmZvcm1hdChGT1JNQVRURVIpICsgJyAtICcgKyBzdHJOb3c7XG4gICAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfTtcblxuICAgIHRoaXMuc2V0UmFuZ2UgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciBmaWx0ZXIgPSAnRGF0ZSBnZSAnICsgdmFsLnN0YXJ0ICsgJyBsZSAnICsgdmFsLmVuZDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbC5zdGFydCArICcgLSAnICsgdmFsLmVuZDtcbiAgICAgICAgdGhpcy50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgdGhpcy5kYXRlVmFsdWUgPSB7XG4gICAgICAgICAgICBzdGFydDogbW9tZW50KHZhbC5zdGFydCksXG4gICAgICAgICAgICBlbmQ6IG1vbWVudCh2YWwuZW5kKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGVSYW5nZSA9IHRoaXMuZGF0ZVZhbHVlLnN0YXJ0LmZvcm1hdChGT1JNQVRURVIpICsgJyAtICcgKyB0aGlzLmRhdGVWYWx1ZS5lbmQuZm9ybWF0KEZPUk1BVFRFUik7XG4gICAgICAgIHJldHVybiBmaWx0ZXI7XG4gICAgfTtcbn1cblxuY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJERhdGVQaWNrZXJQcm92aWRlcicsIG5ldyAkRGF0ZVBpY2tlcigpKTtcblxuICAgIl19