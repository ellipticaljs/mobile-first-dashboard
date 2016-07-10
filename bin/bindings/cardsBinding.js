(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../references/elliptical', '../dependencies/container', '../references/keys'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../references/elliptical'), require('../dependencies/container'), require('../references/keys'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.elliptical, global.container, global.keys);
        global.cardsBinding = mod.exports;
    }
})(this, function (_elliptical, _container, _keys) {
    'use strict';

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    var _keys2 = _interopRequireDefault(_keys);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var EVENT_NAME = 'db.datapicker.change'; /// binds the Dashboard icon cards


    _elliptical2.default.binding('cards', function (node) {
        var $node = $(node);
        var Report = _container2.default.getType('Report');
        var Event = _container2.default.getType('Event');
        var isDisabled = _keys2.default.DISABLE_DATE_RANGE;
        var DatePicker = null;
        var handle = Event.on(EVENT_NAME, populate);

        function init() {
            populate();
        }

        function populate() {
            Report.get({}, updateDom);
        }

        function updateDom(err, data) {
            if (err) return;
            var orders = $node.find('[data-id="orders"]');
            orders.text(data.orders);
            var sales = $node.find('[data-id="sales"]');
            sales.text(data.sales);
            var users = $node.find('[data-id="users"]');
            users.text(data.users);
            var visits = $node.find('[data-id="visits"]');
            visits.text(data.visits);
            updateDateRange();
        }

        function updateDateRange() {
            var span = $('[data-id="date-range"]');
            if (isDisabled) {
                span.text('N/A');
                return;
            }
            var range = DatePicker.getDateRange();
            if (range) {
                span.text(range);
            }
        }

        init();

        this.dispose = () => {
            Event.off(handle);
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NhcmRzQmluZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFJLGFBQWEsc0JBQWpCLEM7OztBQUdBLHlCQUFXLE9BQVgsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVSxJQUFWLEVBQWdCO0FBQ3hDLFlBQUksUUFBUSxFQUFFLElBQUYsQ0FBWjtBQUNBLFlBQUksU0FBUyxvQkFBVSxPQUFWLENBQWtCLFFBQWxCLENBQWI7QUFDQSxZQUFJLFFBQVEsb0JBQVUsT0FBVixDQUFrQixPQUFsQixDQUFaO0FBQ0EsWUFBSSxhQUFXLGVBQUssa0JBQXBCO0FBQ0EsWUFBSSxhQUFhLElBQWpCO0FBQ0EsWUFBSSxTQUFTLE1BQU0sRUFBTixDQUFTLFVBQVQsRUFBcUIsUUFBckIsQ0FBYjs7QUFFQSxpQkFBUyxJQUFULEdBQWdCO0FBQ1o7QUFDSDs7QUFFRCxpQkFBUyxRQUFULEdBQW9CO0FBQ2hCLG1CQUFPLEdBQVAsQ0FBVyxFQUFYLEVBQWUsU0FBZjtBQUNIOztBQUVELGlCQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0JBQUksR0FBSixFQUFTO0FBQ1QsZ0JBQUksU0FBUyxNQUFNLElBQU4sQ0FBVyxvQkFBWCxDQUFiO0FBQ0EsbUJBQU8sSUFBUCxDQUFZLEtBQUssTUFBakI7QUFDQSxnQkFBSSxRQUFRLE1BQU0sSUFBTixDQUFXLG1CQUFYLENBQVo7QUFDQSxrQkFBTSxJQUFOLENBQVcsS0FBSyxLQUFoQjtBQUNBLGdCQUFJLFFBQVEsTUFBTSxJQUFOLENBQVcsbUJBQVgsQ0FBWjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxLQUFLLEtBQWhCO0FBQ0EsZ0JBQUksU0FBUyxNQUFNLElBQU4sQ0FBVyxvQkFBWCxDQUFiO0FBQ0EsbUJBQU8sSUFBUCxDQUFZLEtBQUssTUFBakI7QUFDQTtBQUNIOztBQUVELGlCQUFTLGVBQVQsR0FBMkI7QUFDdkIsZ0JBQUksT0FBTyxFQUFFLHdCQUFGLENBQVg7QUFDQSxnQkFBSSxVQUFKLEVBQWdCO0FBQ1oscUJBQUssSUFBTCxDQUFVLEtBQVY7QUFDQTtBQUNIO0FBQ0QsZ0JBQUksUUFBUSxXQUFXLFlBQVgsRUFBWjtBQUNBLGdCQUFJLEtBQUosRUFBVztBQUNQLHFCQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0g7QUFDSjs7QUFFRDs7QUFFQSxhQUFLLE9BQUwsR0FBZSxNQUFLO0FBQ2hCLGtCQUFNLEdBQU4sQ0FBVSxNQUFWO0FBQ0gsU0FGRDtBQUdILEtBOUNEIiwiZmlsZSI6ImJpbmRpbmdzL2NhcmRzQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyBiaW5kcyB0aGUgRGFzaGJvYXJkIGljb24gY2FyZHNcbmltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuaW1wb3J0IGtleXMgZnJvbSAnLi4vcmVmZXJlbmNlcy9rZXlzJztcblxudmFyIEVWRU5UX05BTUUgPSAnZGIuZGF0YXBpY2tlci5jaGFuZ2UnO1xuXG5cbmVsbGlwdGljYWwuYmluZGluZygnY2FyZHMnLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciAkbm9kZSA9ICQobm9kZSk7XG4gICAgdmFyIFJlcG9ydCA9IGNvbnRhaW5lci5nZXRUeXBlKCdSZXBvcnQnKTtcbiAgICB2YXIgRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRXZlbnQnKTtcbiAgICB2YXIgaXNEaXNhYmxlZD1rZXlzLkRJU0FCTEVfREFURV9SQU5HRTtcbiAgICB2YXIgRGF0ZVBpY2tlciA9IG51bGw7XG4gICAgdmFyIGhhbmRsZSA9IEV2ZW50Lm9uKEVWRU5UX05BTUUsIHBvcHVsYXRlKTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHBvcHVsYXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGUoKSB7XG4gICAgICAgIFJlcG9ydC5nZXQoe30sIHVwZGF0ZURvbSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRG9tKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm47XG4gICAgICAgIHZhciBvcmRlcnMgPSAkbm9kZS5maW5kKCdbZGF0YS1pZD1cIm9yZGVyc1wiXScpO1xuICAgICAgICBvcmRlcnMudGV4dChkYXRhLm9yZGVycyk7XG4gICAgICAgIHZhciBzYWxlcyA9ICRub2RlLmZpbmQoJ1tkYXRhLWlkPVwic2FsZXNcIl0nKTtcbiAgICAgICAgc2FsZXMudGV4dChkYXRhLnNhbGVzKTtcbiAgICAgICAgdmFyIHVzZXJzID0gJG5vZGUuZmluZCgnW2RhdGEtaWQ9XCJ1c2Vyc1wiXScpO1xuICAgICAgICB1c2Vycy50ZXh0KGRhdGEudXNlcnMpO1xuICAgICAgICB2YXIgdmlzaXRzID0gJG5vZGUuZmluZCgnW2RhdGEtaWQ9XCJ2aXNpdHNcIl0nKTtcbiAgICAgICAgdmlzaXRzLnRleHQoZGF0YS52aXNpdHMpO1xuICAgICAgICB1cGRhdGVEYXRlUmFuZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEYXRlUmFuZ2UoKSB7XG4gICAgICAgIHZhciBzcGFuID0gJCgnW2RhdGEtaWQ9XCJkYXRlLXJhbmdlXCJdJyk7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBzcGFuLnRleHQoJ04vQScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByYW5nZSA9IERhdGVQaWNrZXIuZ2V0RGF0ZVJhbmdlKCk7XG4gICAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICAgICAgc3Bhbi50ZXh0KHJhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKTtcblxuICAgIHRoaXMuZGlzcG9zZSA9ICgpPT4ge1xuICAgICAgICBFdmVudC5vZmYoaGFuZGxlKTtcbiAgICB9O1xufSk7XG5cblxuICJdfQ==