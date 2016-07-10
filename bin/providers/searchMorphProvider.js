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
        global.searchMorphProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class MorphProvider {
        constructor() {
            this.element = null;
            this.state = null;
        }

        getElement(callback) {
            var morph;
            var self = this;
            if (this.element) {
                callback(this.element);
            } else {
                morph = $('md-morph');
                if (morph[0]) {
                    this.element = morph[0];
                    callback(this.element);
                } else {
                    var intervalId = setInterval(function () {
                        morph = $('md-morph');
                        if (morph[0]) {
                            clearInterval(intervalId);
                            self.element = morph[0];
                            callback(morph[0]);
                        }
                    }, 50);
                }
            }
        }

        toggle() {
            var self = this;
            if (this.state) return;
            this.getElement(function (element) {
                element.toggle();
                self.state = 'toggled';
            });
        }

        reset() {
            var self = this;
            if (!this.state) return;
            this.getElement(function (element) {
                element.reset();
                self.state = null;
            });
        }
    }

    _container2.default.registerType('$MorphProvider', new MorphProvider());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zZWFyY2hNb3JwaFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsVUFBTSxhQUFOLENBQW9CO0FBQ2hCLHNCQUFjO0FBQ1YsaUJBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxpQkFBSyxLQUFMLEdBQWEsSUFBYjtBQUNIOztBQUVELG1CQUFXLFFBQVgsRUFBcUI7QUFDakIsZ0JBQUksS0FBSjtBQUNBLGdCQUFJLE9BQU8sSUFBWDtBQUNBLGdCQUFJLEtBQUssT0FBVCxFQUFrQjtBQUNkLHlCQUFTLEtBQUssT0FBZDtBQUNILGFBRkQsTUFFTztBQUNILHdCQUFRLEVBQUUsVUFBRixDQUFSO0FBQ0Esb0JBQUksTUFBTSxDQUFOLENBQUosRUFBYztBQUNWLHlCQUFLLE9BQUwsR0FBZSxNQUFNLENBQU4sQ0FBZjtBQUNBLDZCQUFTLEtBQUssT0FBZDtBQUNILGlCQUhELE1BR087QUFDSCx3QkFBSSxhQUFhLFlBQVksWUFBWTtBQUNyQyxnQ0FBUSxFQUFFLFVBQUYsQ0FBUjtBQUNBLDRCQUFJLE1BQU0sQ0FBTixDQUFKLEVBQWM7QUFDViwwQ0FBYyxVQUFkO0FBQ0EsaUNBQUssT0FBTCxHQUFlLE1BQU0sQ0FBTixDQUFmO0FBQ0EscUNBQVMsTUFBTSxDQUFOLENBQVQ7QUFDSDtBQUNKLHFCQVBnQixFQU9kLEVBUGMsQ0FBakI7QUFRSDtBQUNKO0FBQ0o7O0FBRUQsaUJBQVM7QUFDTCxnQkFBSSxPQUFPLElBQVg7QUFDQSxnQkFBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDaEIsaUJBQUssVUFBTCxDQUFnQixVQUFVLE9BQVYsRUFBbUI7QUFDL0Isd0JBQVEsTUFBUjtBQUNBLHFCQUFLLEtBQUwsR0FBYSxTQUFiO0FBQ0gsYUFIRDtBQUlIOztBQUVELGdCQUFRO0FBQ0osZ0JBQUksT0FBTyxJQUFYO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7QUFDakIsaUJBQUssVUFBTCxDQUFnQixVQUFVLE9BQVYsRUFBbUI7QUFDL0Isd0JBQVEsS0FBUjtBQUNBLHFCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0gsYUFIRDtBQUlIO0FBN0NlOztBQWdEcEIsd0JBQVUsWUFBVixDQUF1QixnQkFBdkIsRUFBeUMsSUFBSSxhQUFKLEVBQXpDIiwiZmlsZSI6InByb3ZpZGVycy9zZWFyY2hNb3JwaFByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuXG5jbGFzcyBNb3JwaFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudChjYWxsYmFjaykge1xuICAgICAgICB2YXIgbW9ycGg7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vcnBoID0gJCgnbWQtbW9ycGgnKTtcbiAgICAgICAgICAgIGlmIChtb3JwaFswXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG1vcnBoWzBdO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3JwaCA9ICQoJ21kLW1vcnBoJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3JwaFswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudCA9IG1vcnBoWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobW9ycGhbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlKSByZXR1cm47XG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC50b2dnbGUoKTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUgPSAndG9nZ2xlZCc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmdldEVsZW1lbnQoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRNb3JwaFByb3ZpZGVyJywgbmV3IE1vcnBoUHJvdmlkZXIoKSk7XG5cbiAiXX0=