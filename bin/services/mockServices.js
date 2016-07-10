(function (global, factory) {
   if (typeof define === "function" && define.amd) {
      define(['../references/elliptical', '../dependencies/container'], factory);
   } else if (typeof exports !== "undefined") {
      factory(require('../references/elliptical'), require('../dependencies/container'));
   } else {
      var mod = {
         exports: {}
      };
      factory(global.elliptical, global.container);
      global.mockServices = mod.exports;
   }
})(this, function (_elliptical, _container) {
   'use strict';

   var _elliptical2 = _interopRequireDefault(_elliptical);

   var _container2 = _interopRequireDefault(_container);

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
         default: obj
      };
   }

   class Order extends _elliptical2.default.Service {}
   class User extends _elliptical2.default.Service {}
   class UserOrder extends _elliptical2.default.Service {}
   class UserResetPassword extends _elliptical2.default.Service {}
   class UserAlert extends _elliptical2.default.Service {}
   class Report extends _elliptical2.default.Service {}
   class OrderStatus extends _elliptical2.default.Service {}
   class OrderAlert extends _elliptical2.default.Service {}
   class Discount extends _elliptical2.default.Service {}
   class DiscountValidate extends _elliptical2.default.Service {}

   _container2.default.mapType('User', User, '$UserRepository');
   _container2.default.mapType('Order', Order, '$OrderRepository');
   _container2.default.mapType('UserOrder', UserOrder, '$UserOrderRepository');
   _container2.default.mapType('Report', Report, '$ReportRepository');
   _container2.default.mapType('UserResetPassword', UserResetPassword, '$UserResetPasswordProvider');
   _container2.default.mapType('UserAlert', UserAlert, '$UserAlertProvider');
   _container2.default.mapType('OrderStatus', OrderStatus, '$OrderStatusProvider');
   _container2.default.mapType('OrderAlert', OrderAlert, '$OrderAlertProvider');
   _container2.default.mapType('Discount', Discount, '$DiscountRepository');
   _container2.default.mapType('DiscountValidate', DiscountValidate, '$DiscountValidateProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21vY2tTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsU0FBTSxLQUFOLFNBQW9CLHFCQUFXLE9BQS9CLENBQXNDO0FBQ3RDLFNBQU0sSUFBTixTQUFtQixxQkFBVyxPQUE5QixDQUFzQztBQUN0QyxTQUFNLFNBQU4sU0FBd0IscUJBQVcsT0FBbkMsQ0FBMkM7QUFDM0MsU0FBTSxpQkFBTixTQUFnQyxxQkFBVyxPQUEzQyxDQUFtRDtBQUNuRCxTQUFNLFNBQU4sU0FBd0IscUJBQVcsT0FBbkMsQ0FBMkM7QUFDM0MsU0FBTSxNQUFOLFNBQXFCLHFCQUFXLE9BQWhDLENBQXVDO0FBQ3ZDLFNBQU0sV0FBTixTQUEwQixxQkFBVyxPQUFyQyxDQUE0QztBQUM1QyxTQUFNLFVBQU4sU0FBeUIscUJBQVcsT0FBcEMsQ0FBMkM7QUFDM0MsU0FBTSxRQUFOLFNBQXVCLHFCQUFXLE9BQWxDLENBQXlDO0FBQ3pDLFNBQU0sZ0JBQU4sU0FBK0IscUJBQVcsT0FBMUMsQ0FBaUQ7O0FBR2pELHVCQUFVLE9BQVYsQ0FBa0IsTUFBbEIsRUFBMEIsSUFBMUIsRUFBZ0MsaUJBQWhDO0FBQ0EsdUJBQVUsT0FBVixDQUFrQixPQUFsQixFQUEyQixLQUEzQixFQUFrQyxrQkFBbEM7QUFDQSx1QkFBVSxPQUFWLENBQWtCLFdBQWxCLEVBQStCLFNBQS9CLEVBQTBDLHNCQUExQztBQUNBLHVCQUFVLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIsTUFBNUIsRUFBb0MsbUJBQXBDO0FBQ0EsdUJBQVUsT0FBVixDQUFrQixtQkFBbEIsRUFBdUMsaUJBQXZDLEVBQTBELDRCQUExRDtBQUNBLHVCQUFVLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0IsU0FBL0IsRUFBMEMsb0JBQTFDO0FBQ0EsdUJBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxXQUFqQyxFQUE4QyxzQkFBOUM7QUFDQSx1QkFBVSxPQUFWLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBQTRDLHFCQUE1QztBQUNBLHVCQUFVLE9BQVYsQ0FBa0IsVUFBbEIsRUFBOEIsUUFBOUIsRUFBd0MscUJBQXhDO0FBQ0EsdUJBQVUsT0FBVixDQUFrQixrQkFBbEIsRUFBc0MsZ0JBQXRDLEVBQXdELDJCQUF4RCIsImZpbGUiOiJzZXJ2aWNlcy9tb2NrU2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBlbGxpcHRpY2FsLlNlcnZpY2V7fVxuY2xhc3MgVXNlciBleHRlbmRzIGVsbGlwdGljYWwuU2VydmljZSB7fVxuY2xhc3MgVXNlck9yZGVyIGV4dGVuZHMgZWxsaXB0aWNhbC5TZXJ2aWNlIHt9XG5jbGFzcyBVc2VyUmVzZXRQYXNzd29yZCBleHRlbmRzIGVsbGlwdGljYWwuU2VydmljZSB7fVxuY2xhc3MgVXNlckFsZXJ0IGV4dGVuZHMgZWxsaXB0aWNhbC5TZXJ2aWNlIHt9XG5jbGFzcyBSZXBvcnQgZXh0ZW5kcyBlbGxpcHRpY2FsLlNlcnZpY2V7fVxuY2xhc3MgT3JkZXJTdGF0dXMgZXh0ZW5kcyBlbGxpcHRpY2FsLlNlcnZpY2V7fVxuY2xhc3MgT3JkZXJBbGVydCBleHRlbmRzIGVsbGlwdGljYWwuU2VydmljZXt9XG5jbGFzcyBEaXNjb3VudCBleHRlbmRzIGVsbGlwdGljYWwuU2VydmljZXt9XG5jbGFzcyBEaXNjb3VudFZhbGlkYXRlIGV4dGVuZHMgZWxsaXB0aWNhbC5TZXJ2aWNle31cblxuXG5jb250YWluZXIubWFwVHlwZSgnVXNlcicsIFVzZXIsICckVXNlclJlcG9zaXRvcnknKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdPcmRlcicsIE9yZGVyLCAnJE9yZGVyUmVwb3NpdG9yeScpO1xuY29udGFpbmVyLm1hcFR5cGUoJ1VzZXJPcmRlcicsIFVzZXJPcmRlciwgJyRVc2VyT3JkZXJSZXBvc2l0b3J5Jyk7XG5jb250YWluZXIubWFwVHlwZSgnUmVwb3J0JywgUmVwb3J0LCAnJFJlcG9ydFJlcG9zaXRvcnknKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdVc2VyUmVzZXRQYXNzd29yZCcsIFVzZXJSZXNldFBhc3N3b3JkLCAnJFVzZXJSZXNldFBhc3N3b3JkUHJvdmlkZXInKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdVc2VyQWxlcnQnLCBVc2VyQWxlcnQsICckVXNlckFsZXJ0UHJvdmlkZXInKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdPcmRlclN0YXR1cycsIE9yZGVyU3RhdHVzLCAnJE9yZGVyU3RhdHVzUHJvdmlkZXInKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdPcmRlckFsZXJ0JywgT3JkZXJBbGVydCwgJyRPcmRlckFsZXJ0UHJvdmlkZXInKTtcbmNvbnRhaW5lci5tYXBUeXBlKCdEaXNjb3VudCcsIERpc2NvdW50LCAnJERpc2NvdW50UmVwb3NpdG9yeScpO1xuY29udGFpbmVyLm1hcFR5cGUoJ0Rpc2NvdW50VmFsaWRhdGUnLCBEaXNjb3VudFZhbGlkYXRlLCAnJERpc2NvdW50VmFsaWRhdGVQcm92aWRlcicpO1xuXG4gICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==