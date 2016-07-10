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
        global.labelService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class Label {
        static get(query) {
            var keys = Object.keys(query);
            var q;
            if (keys[0] && keys[0] !== '$orderBy' && keys[0] !== '$orderByDesc') {
                q = query[keys[0]];
                var decoded = decodeURIComponent(q);
                return ' match "' + decoded + '"';
            } else return '';
        }
    }

    _container2.default.registerType('Label', Label);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xhYmVsU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFVBQU0sS0FBTixDQUFZO0FBQ1IsZUFBTyxHQUFQLENBQVcsS0FBWCxFQUFrQjtBQUNkLGdCQUFJLE9BQU8sT0FBTyxJQUFQLENBQVksS0FBWixDQUFYO0FBQ0EsZ0JBQUksQ0FBSjtBQUNBLGdCQUFJLEtBQUssQ0FBTCxLQUFXLEtBQUssQ0FBTCxNQUFZLFVBQXZCLElBQXFDLEtBQUssQ0FBTCxNQUFZLGNBQXJELEVBQXFFO0FBQ2pFLG9CQUFJLE1BQU0sS0FBSyxDQUFMLENBQU4sQ0FBSjtBQUNBLG9CQUFJLFVBQVUsbUJBQW1CLENBQW5CLENBQWQ7QUFDQSx1QkFBTyxhQUFhLE9BQWIsR0FBdUIsR0FBOUI7QUFDSCxhQUpELE1BSU8sT0FBTyxFQUFQO0FBQ1Y7QUFUTzs7QUFZWix3QkFBVSxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLEtBQWhDIiwiZmlsZSI6InNlcnZpY2VzL2xhYmVsU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cbmNsYXNzIExhYmVsIHtcbiAgICBzdGF0aWMgZ2V0KHF1ZXJ5KSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuICAgICAgICB2YXIgcTtcbiAgICAgICAgaWYgKGtleXNbMF0gJiYga2V5c1swXSAhPT0gJyRvcmRlckJ5JyAmJiBrZXlzWzBdICE9PSAnJG9yZGVyQnlEZXNjJykge1xuICAgICAgICAgICAgcSA9IHF1ZXJ5W2tleXNbMF1dO1xuICAgICAgICAgICAgdmFyIGRlY29kZWQgPSBkZWNvZGVVUklDb21wb25lbnQocSk7XG4gICAgICAgICAgICByZXR1cm4gJyBtYXRjaCBcIicgKyBkZWNvZGVkICsgJ1wiJztcbiAgICAgICAgfSBlbHNlIHJldHVybiAnJztcbiAgICB9XG59XG5cbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJ0xhYmVsJywgTGFiZWwpO1xuXG4gICJdfQ==