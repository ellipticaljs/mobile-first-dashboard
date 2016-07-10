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
        global.confirmDialogProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    class ConfirmDialogProvider {
        constructor() {
            this.element = null;
        }

        getElement() {
            if (this.element) return this.element;else {
                this.element = $('md-confirm')[0];
                return this.element;
            }
        }

        show(fn) {
            var element = this.getElement();
            element.show(fn);
        }

        setContent(title, message) {
            var element = this.getElement();
            element.setContent(title, message, false);
        }
    }

    _container2.default.registerType('$ConfirmDialogProvider', new ConfirmDialogProvider());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9jb25maXJtRGlhbG9nUHJvdmlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxVQUFNLHFCQUFOLENBQTRCO0FBQ3hCLHNCQUFjO0FBQ1YsaUJBQUssT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFFRCxxQkFBYTtBQUNULGdCQUFJLEtBQUssT0FBVCxFQUFrQixPQUFPLEtBQUssT0FBWixDQUFsQixLQUNLO0FBQ0QscUJBQUssT0FBTCxHQUFlLEVBQUUsWUFBRixFQUFnQixDQUFoQixDQUFmO0FBQ0EsdUJBQU8sS0FBSyxPQUFaO0FBQ0g7QUFDSjs7QUFFRCxhQUFLLEVBQUwsRUFBUztBQUNMLGdCQUFJLFVBQVUsS0FBSyxVQUFMLEVBQWQ7QUFDQSxvQkFBUSxJQUFSLENBQWEsRUFBYjtBQUNIOztBQUVELG1CQUFXLEtBQVgsRUFBa0IsT0FBbEIsRUFBMkI7QUFDdkIsZ0JBQUksVUFBVSxLQUFLLFVBQUwsRUFBZDtBQUNBLG9CQUFRLFVBQVIsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsRUFBbUMsS0FBbkM7QUFDSDtBQXJCdUI7O0FBd0I1Qix3QkFBVSxZQUFWLENBQXVCLHdCQUF2QixFQUFpRCxJQUFJLHFCQUFKLEVBQWpEIiwiZmlsZSI6InByb3ZpZGVycy9jb25maXJtRGlhbG9nUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5jbGFzcyBDb25maXJtRGlhbG9nUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gJCgnbWQtY29uZmlybScpWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coZm4pIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgZWxlbWVudC5zaG93KGZuKTtcbiAgICB9XG5cbiAgICBzZXRDb250ZW50KHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0Q29udGVudCh0aXRsZSwgbWVzc2FnZSwgZmFsc2UpO1xuICAgIH1cbn1cblxuY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJENvbmZpcm1EaWFsb2dQcm92aWRlcicsIG5ldyBDb25maXJtRGlhbG9nUHJvdmlkZXIoKSk7XG4iXX0=