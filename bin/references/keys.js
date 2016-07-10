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
        global.keys = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var keys = {
        SERVER_KEY: '',
        MAP_KEY: '',
        PAGE_SIZE: 20,
        GRID_SIZE: 10,
        DISABLE_DATE_RANGE: true,
        USER_MODEL_KEY: 'users',
        ORDER_MODEL_KEY: 'orders',
        DISCOUNT_MODEL_KEY: 'discounts',
        USERS: 500,
        USER_MAX_ORDER_NO: 5,
        ORDER_ID_MAX: 50000,
        ORDER_MIN_PRICE: 20,
        ORDER_MAX_PRICE: 150,
        ORDER_TRANSACTION_ID_LENGTH: 12,
        REPOPULATE: false
    };

    exports.default = keys;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMva2V5cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsUUFBSSxPQUFLO0FBQ0wsb0JBQVcsRUFETjtBQUVMLGlCQUFRLEVBRkg7QUFHTCxtQkFBVSxFQUhMO0FBSUwsbUJBQVUsRUFKTDtBQUtMLDRCQUFtQixJQUxkO0FBTUwsd0JBQWUsT0FOVjtBQU9MLHlCQUFnQixRQVBYO0FBUUwsNEJBQW1CLFdBUmQ7QUFTTCxlQUFNLEdBVEQ7QUFVTCwyQkFBa0IsQ0FWYjtBQVdMLHNCQUFhLEtBWFI7QUFZTCx5QkFBZ0IsRUFaWDtBQWFMLHlCQUFnQixHQWJYO0FBY0wscUNBQTRCLEVBZHZCO0FBZUwsb0JBQVc7QUFmTixLQUFUOztzQkFrQmUsSSIsImZpbGUiOiJyZWZlcmVuY2VzL2tleXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBrZXlzPXtcbiAgICBTRVJWRVJfS0VZOicnLFxuICAgIE1BUF9LRVk6JycsXG4gICAgUEFHRV9TSVpFOjIwLFxuICAgIEdSSURfU0laRToxMCxcbiAgICBESVNBQkxFX0RBVEVfUkFOR0U6dHJ1ZSxcbiAgICBVU0VSX01PREVMX0tFWTondXNlcnMnLFxuICAgIE9SREVSX01PREVMX0tFWTonb3JkZXJzJyxcbiAgICBESVNDT1VOVF9NT0RFTF9LRVk6J2Rpc2NvdW50cycsXG4gICAgVVNFUlM6NTAwLFxuICAgIFVTRVJfTUFYX09SREVSX05POjUsXG4gICAgT1JERVJfSURfTUFYOjUwMDAwLFxuICAgIE9SREVSX01JTl9QUklDRToyMCxcbiAgICBPUkRFUl9NQVhfUFJJQ0U6MTUwLFxuICAgIE9SREVSX1RSQU5TQUNUSU9OX0lEX0xFTkdUSDoxMixcbiAgICBSRVBPUFVMQVRFOmZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlzOyJdfQ==