(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './controllers/helpController', './controllers/homeController', './controllers/orderController', './controllers/profileController', './controllers/promotionController', './controllers/settingsController', './controllers/userController', './controllers/userOrderController'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./controllers/helpController'), require('./controllers/homeController'), require('./controllers/orderController'), require('./controllers/profileController'), require('./controllers/promotionController'), require('./controllers/settingsController'), require('./controllers/userController'), require('./controllers/userOrderController'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.helpController, global.homeController, global.orderController, global.profileController, global.promotionController, global.settingsController, global.userController, global.userOrderController);
        global.startup = mod.exports;
    }
})(this, function (exports, _helpController, _homeController, _orderController, _profileController, _promotionController, _settingsController, _userController, _userOrderController) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _helpController2 = _interopRequireDefault(_helpController);

    var _homeController2 = _interopRequireDefault(_homeController);

    var _orderController2 = _interopRequireDefault(_orderController);

    var _profileController2 = _interopRequireDefault(_profileController);

    var _promotionController2 = _interopRequireDefault(_promotionController);

    var _settingsController2 = _interopRequireDefault(_settingsController);

    var _userController2 = _interopRequireDefault(_userController);

    var _userOrderController2 = _interopRequireDefault(_userOrderController);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = app => {
        //-------controllers------------------------------------------------------------
        new _helpController2.default(app, 'Help', '/@action');
        new _homeController2.default(app, 'Home', '/@action');
        new _orderController2.default(app, 'Order', '/@action/:id');
        new _profileController2.default(app, 'Profile', '/@action');
        new _promotionController2.default(app, 'Promotion', '/@action/:id');
        new _settingsController2.default(app, 'Settings', '/@action');
        new _userController2.default(app, 'User', '/@action/:id');
        new _userOrderController2.default(app, 'UserOrder', '/@action/:userid/:page');
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBU2dCLEdBQUQsSUFBTzs7QUFFbEIscUNBQW1CLEdBQW5CLEVBQXVCLE1BQXZCLEVBQThCLFVBQTlCO0FBQ0EscUNBQW1CLEdBQW5CLEVBQXVCLE1BQXZCLEVBQThCLFVBQTlCO0FBQ0Esc0NBQW9CLEdBQXBCLEVBQXdCLE9BQXhCLEVBQWdDLGNBQWhDO0FBQ0Esd0NBQXNCLEdBQXRCLEVBQTBCLFNBQTFCLEVBQW9DLFVBQXBDO0FBQ0EsMENBQXdCLEdBQXhCLEVBQTRCLFdBQTVCLEVBQXdDLGNBQXhDO0FBQ0EseUNBQXVCLEdBQXZCLEVBQTJCLFVBQTNCLEVBQXNDLFVBQXRDO0FBQ0EscUNBQW1CLEdBQW5CLEVBQXVCLE1BQXZCLEVBQThCLGNBQTlCO0FBQ0EsMENBQXdCLEdBQXhCLEVBQTRCLFdBQTVCLEVBQXdDLHdCQUF4QztBQUVILEsiLCJmaWxlIjoic3RhcnR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxwQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2hlbHBDb250cm9sbGVyJztcbmltcG9ydCBIb21lQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2hvbWVDb250cm9sbGVyJztcbmltcG9ydCBPcmRlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9vcmRlckNvbnRyb2xsZXInO1xuaW1wb3J0IFByb2ZpbGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcHJvZmlsZUNvbnRyb2xsZXInO1xuaW1wb3J0IFByb21vdGlvbkNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wcm9tb3Rpb25Db250cm9sbGVyJztcbmltcG9ydCBTZXR0aW5nc0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9zZXR0aW5nc0NvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXInO1xuaW1wb3J0IFVzZXJPcmRlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91c2VyT3JkZXJDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGFwcCk9PntcbiAgICAvLy0tLS0tLS1jb250cm9sbGVycy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG5ldyBIZWxwQ29udHJvbGxlcihhcHAsJ0hlbHAnLCcvQGFjdGlvbicpO1xuICAgIG5ldyBIb21lQ29udHJvbGxlcihhcHAsJ0hvbWUnLCcvQGFjdGlvbicpO1xuICAgIG5ldyBPcmRlckNvbnRyb2xsZXIoYXBwLCdPcmRlcicsJy9AYWN0aW9uLzppZCcpO1xuICAgIG5ldyBQcm9maWxlQ29udHJvbGxlcihhcHAsJ1Byb2ZpbGUnLCcvQGFjdGlvbicpO1xuICAgIG5ldyBQcm9tb3Rpb25Db250cm9sbGVyKGFwcCwnUHJvbW90aW9uJywnL0BhY3Rpb24vOmlkJyk7XG4gICAgbmV3IFNldHRpbmdzQ29udHJvbGxlcihhcHAsJ1NldHRpbmdzJywnL0BhY3Rpb24nKTtcbiAgICBuZXcgVXNlckNvbnRyb2xsZXIoYXBwLCdVc2VyJywnL0BhY3Rpb24vOmlkJyk7XG4gICAgbmV3IFVzZXJPcmRlckNvbnRyb2xsZXIoYXBwLCdVc2VyT3JkZXInLCcvQGFjdGlvbi86dXNlcmlkLzpwYWdlJyk7XG4gICAgXG59XG4iXX0=