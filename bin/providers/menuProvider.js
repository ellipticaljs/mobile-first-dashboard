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
        global.menuProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class MenuProvider {
        constructor() {
            this.element = null;
        }

        show(url) {
            var element = this.getElement();
            element[0].show(url);
        }

        setElement(element) {
            this.element = element;
        }

        getElement() {
            if (!this.element) {
                this.element = $('md-menu');
                return this.element;
            } else return this.element;
        }
    }

    _container2.default.registerType('$MenuProvider', new MenuProvider());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9tZW51UHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxVQUFNLFlBQU4sQ0FBbUI7QUFDZixzQkFBYztBQUNWLGlCQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBRUQsYUFBSyxHQUFMLEVBQVU7QUFDTixnQkFBSSxVQUFVLEtBQUssVUFBTCxFQUFkO0FBQ0Esb0JBQVEsQ0FBUixFQUFXLElBQVgsQ0FBZ0IsR0FBaEI7QUFDSDs7QUFFRCxtQkFBVyxPQUFYLEVBQW9CO0FBQ2hCLGlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7O0FBRUQscUJBQWE7QUFDVCxnQkFBSSxDQUFDLEtBQUssT0FBVixFQUFtQjtBQUNmLHFCQUFLLE9BQUwsR0FBZSxFQUFFLFNBQUYsQ0FBZjtBQUNBLHVCQUFPLEtBQUssT0FBWjtBQUNILGFBSEQsTUFHTyxPQUFPLEtBQUssT0FBWjtBQUNWO0FBbkJjOztBQXNCbkIsd0JBQVUsWUFBVixDQUF1QixlQUF2QixFQUF3QyxJQUFJLFlBQUosRUFBeEMiLCJmaWxlIjoicHJvdmlkZXJzL21lbnVQcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cblxuY2xhc3MgTWVudVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzaG93KHVybCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICBlbGVtZW50WzBdLnNob3codXJsKTtcbiAgICB9XG5cbiAgICBzZXRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gJCgnbWQtbWVudScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufVxuXG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCckTWVudVByb3ZpZGVyJywgbmV3IE1lbnVQcm92aWRlcigpKTtcblxuICAiXX0=