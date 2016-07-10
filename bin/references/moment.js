(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.moment = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    let moment = window.moment;

    Object.defineProperty(window, 'moment', {
        get: function () {
            return moment;
        },
        enumerable: true,
        configurable: true
    });

    exports.default = moment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMvbW9tZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFFBQUksU0FBTyxPQUFPLE1BQWxCOztBQUVBLFdBQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUNwQyxhQUFLLFlBQVc7QUFBRSxtQkFBTyxNQUFQO0FBQWdCLFNBREU7QUFFcEMsb0JBQVksSUFGd0I7QUFHcEMsc0JBQWM7QUFIc0IsS0FBeEM7O3NCQU1lLE0iLCJmaWxlIjoicmVmZXJlbmNlcy9tb21lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgbW9tZW50PXdpbmRvdy5tb21lbnQ7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdtb21lbnQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1vbWVudDsgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbWVudDtcbiJdfQ==