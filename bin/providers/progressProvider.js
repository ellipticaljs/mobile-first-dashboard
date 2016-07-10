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
        global.progressProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var DELAY = 1200;
    var INTERVAL_DELAY = 200;

    class Progress {
        constructor() {
            this.active = false;
            this.terminate = false;
            this.element = null;
            this.maxIntervals = 5;
            this.currentInterval = 0;
            this.value = 0;
        }

        getElement() {
            if (this.element) return this.element;
            var mdProgress = $('md-progress')[0];
            this.element = mdProgress;
            return mdProgress;
        }

        start() {
            var self = this;
            this.active = false;
            this.terminate = false;
            this.currentInterval = 0;
            this.value = 0;
            setTimeout(function () {
                if (!self.terminate) {
                    self.initProgress();
                    self.increment();
                }
            }, DELAY);
        }

        increment() {
            this.active = true;
            this.terminate = false;
            this.runIntervals();
        }

        initProgress() {
            var progress = this.getElement();
            progress.init();
        }

        runIntervals() {
            var progress = this.getElement();
            var self = this;
            this.incrementInterval(progress);
            var intervalId = setInterval(function () {
                if (self.terminate || self.currentInterval === self.maxIntervals) {
                    self.terminate = false;
                    clearInterval(intervalId);
                } else {
                    self.incrementInterval(progress);
                }
            }, INTERVAL_DELAY);
        }

        incrementInterval() {
            var progress = this.getElement();
            this.currentInterval += 1;
            var value = this.getIntervalValue();
            progress.increment(value);
        }

        getIntervalValue() {
            if (this.value === 0) this.value = 30;else this.value += 10;
            return this.value;
        }

        end() {
            this.terminate = true;
            if (this.active) {
                var progress = this.getElement();
                progress.animate();
            }
        }
    }

    _container2.default.registerType('$ProgressProvider', new Progress());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9wcm9ncmVzc1Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsUUFBSSxRQUFRLElBQVo7QUFDQSxRQUFJLGlCQUFpQixHQUFyQjs7QUFFQSxVQUFNLFFBQU4sQ0FBZTtBQUNYLHNCQUFjO0FBQ1YsaUJBQUssTUFBTCxHQUFjLEtBQWQ7QUFDQSxpQkFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsaUJBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsaUJBQUssZUFBTCxHQUF1QixDQUF2QjtBQUNBLGlCQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0g7O0FBRUQscUJBQWE7QUFDVCxnQkFBSSxLQUFLLE9BQVQsRUFBa0IsT0FBTyxLQUFLLE9BQVo7QUFDbEIsZ0JBQUksYUFBYSxFQUFFLGFBQUYsRUFBaUIsQ0FBakIsQ0FBakI7QUFDQSxpQkFBSyxPQUFMLEdBQWUsVUFBZjtBQUNBLG1CQUFPLFVBQVA7QUFDSDs7QUFFRCxnQkFBUTtBQUNKLGdCQUFJLE9BQU8sSUFBWDtBQUNBLGlCQUFLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNBLGlCQUFLLGVBQUwsR0FBdUIsQ0FBdkI7QUFDQSxpQkFBSyxLQUFMLEdBQWEsQ0FBYjtBQUNBLHVCQUFXLFlBQVk7QUFDbkIsb0JBQUksQ0FBQyxLQUFLLFNBQVYsRUFBcUI7QUFDakIseUJBQUssWUFBTDtBQUNBLHlCQUFLLFNBQUw7QUFDSDtBQUNKLGFBTEQsRUFLRyxLQUxIO0FBTUg7O0FBRUQsb0JBQVk7QUFDUixpQkFBSyxNQUFMLEdBQWMsSUFBZDtBQUNBLGlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxpQkFBSyxZQUFMO0FBQ0g7O0FBRUQsdUJBQWU7QUFDWCxnQkFBSSxXQUFXLEtBQUssVUFBTCxFQUFmO0FBQ0EscUJBQVMsSUFBVDtBQUNIOztBQUVELHVCQUFlO0FBQ1gsZ0JBQUksV0FBVyxLQUFLLFVBQUwsRUFBZjtBQUNBLGdCQUFJLE9BQU8sSUFBWDtBQUNBLGlCQUFLLGlCQUFMLENBQXVCLFFBQXZCO0FBQ0EsZ0JBQUksYUFBYSxZQUFZLFlBQVk7QUFDckMsb0JBQUksS0FBSyxTQUFMLElBQWtCLEtBQUssZUFBTCxLQUF5QixLQUFLLFlBQXBELEVBQWtFO0FBQzlELHlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxrQ0FBYyxVQUFkO0FBQ0gsaUJBSEQsTUFHTztBQUNILHlCQUFLLGlCQUFMLENBQXVCLFFBQXZCO0FBQ0g7QUFDSixhQVBnQixFQU9kLGNBUGMsQ0FBakI7QUFRSDs7QUFFRCw0QkFBb0I7QUFDaEIsZ0JBQUksV0FBVyxLQUFLLFVBQUwsRUFBZjtBQUNBLGlCQUFLLGVBQUwsSUFBd0IsQ0FBeEI7QUFDQSxnQkFBSSxRQUFRLEtBQUssZ0JBQUwsRUFBWjtBQUNBLHFCQUFTLFNBQVQsQ0FBbUIsS0FBbkI7QUFDSDs7QUFFRCwyQkFBbUI7QUFDZixnQkFBSSxLQUFLLEtBQUwsS0FBZSxDQUFuQixFQUFzQixLQUFLLEtBQUwsR0FBYSxFQUFiLENBQXRCLEtBQ0ssS0FBSyxLQUFMLElBQWMsRUFBZDtBQUNMLG1CQUFPLEtBQUssS0FBWjtBQUNIOztBQUVELGNBQU07QUFDRixpQkFBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsZ0JBQUksS0FBSyxNQUFULEVBQWlCO0FBQ2Isb0JBQUksV0FBVyxLQUFLLFVBQUwsRUFBZjtBQUNBLHlCQUFTLE9BQVQ7QUFDSDtBQUNKO0FBM0VVOztBQThFZix3QkFBVSxZQUFWLENBQXVCLG1CQUF2QixFQUE0QyxJQUFJLFFBQUosRUFBNUMiLCJmaWxlIjoicHJvdmlkZXJzL3Byb2dyZXNzUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG52YXIgREVMQVkgPSAxMjAwO1xudmFyIElOVEVSVkFMX0RFTEFZID0gMjAwO1xuXG5jbGFzcyBQcm9ncmVzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubWF4SW50ZXJ2YWxzID0gNTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlID0gMDtcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgICAgICB2YXIgbWRQcm9ncmVzcyA9ICQoJ21kLXByb2dyZXNzJylbMF07XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG1kUHJvZ3Jlc3M7XG4gICAgICAgIHJldHVybiBtZFByb2dyZXNzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gMDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFzZWxmLnRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5pdFByb2dyZXNzKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgREVMQVkpO1xuICAgIH1cblxuICAgIGluY3JlbWVudCgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJ1bkludGVydmFscygpO1xuICAgIH1cblxuICAgIGluaXRQcm9ncmVzcygpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIHByb2dyZXNzLmluaXQoKTtcbiAgICB9XG5cbiAgICBydW5JbnRlcnZhbHMoKSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50SW50ZXJ2YWwocHJvZ3Jlc3MpO1xuICAgICAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzZWxmLnRlcm1pbmF0ZSB8fCBzZWxmLmN1cnJlbnRJbnRlcnZhbCA9PT0gc2VsZi5tYXhJbnRlcnZhbHMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5jcmVtZW50SW50ZXJ2YWwocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBJTlRFUlZBTF9ERUxBWSk7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50SW50ZXJ2YWwoKSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCArPSAxO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldEludGVydmFsVmFsdWUoKTtcbiAgICAgICAgcHJvZ3Jlc3MuaW5jcmVtZW50KHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXRJbnRlcnZhbFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gMCkgdGhpcy52YWx1ZSA9IDMwO1xuICAgICAgICBlbHNlIHRoaXMudmFsdWUgKz0gMTA7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGVuZCgpIHtcbiAgICAgICAgdGhpcy50ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgcHJvZ3Jlc3MuYW5pbWF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCckUHJvZ3Jlc3NQcm92aWRlcicsIG5ldyBQcm9ncmVzcygpKTtcblxuIFxuIl19