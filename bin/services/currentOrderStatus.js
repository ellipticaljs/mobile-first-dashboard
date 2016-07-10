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
        global.currentOrderStatus = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var status = [{ value: 'Open' }, { value: 'Closed' }, { value: 'Completed' }, { value: 'Pending' }, { value: 'Processed' }, { value: 'Cancelled' }, { value: 'Charged' }, { value: 'Authorized' }, { value: 'Recurring' }, { value: 'Routed' }, { value: 'Refunded' }, { value: 'Returned' }, { value: 'Delivered' }, { value: 'PaymentDue' }, { value: 'Current' }, { value: 'Failed' }, { value: 'Expired' }, { value: 'AwaitingPayment' }, { value: 'Shipped' }, { value: 'Other' }];

    class CurrentOrderStatus {
        static get(params, callback) {
            callback(null, status);
        }

        static getAsync() {
            return new Promise(function (resolve, reject) {
                resolve(status);
            });
        }
    }

    _container2.default.registerType('CurrentOrderStatus', CurrentOrderStatus);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2N1cnJlbnRPcmRlclN0YXR1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFFBQUksU0FBUyxDQUNULEVBQUMsT0FBTyxNQUFSLEVBRFMsRUFFVCxFQUFDLE9BQU8sUUFBUixFQUZTLEVBR1QsRUFBQyxPQUFPLFdBQVIsRUFIUyxFQUlULEVBQUMsT0FBTyxTQUFSLEVBSlMsRUFLVCxFQUFDLE9BQU8sV0FBUixFQUxTLEVBTVQsRUFBQyxPQUFPLFdBQVIsRUFOUyxFQU9ULEVBQUMsT0FBTyxTQUFSLEVBUFMsRUFRVCxFQUFDLE9BQU8sWUFBUixFQVJTLEVBU1QsRUFBQyxPQUFPLFdBQVIsRUFUUyxFQVVULEVBQUMsT0FBTyxRQUFSLEVBVlMsRUFXVCxFQUFDLE9BQU8sVUFBUixFQVhTLEVBWVQsRUFBQyxPQUFPLFVBQVIsRUFaUyxFQWFULEVBQUMsT0FBTyxXQUFSLEVBYlMsRUFjVCxFQUFDLE9BQU8sWUFBUixFQWRTLEVBZVQsRUFBQyxPQUFPLFNBQVIsRUFmUyxFQWdCVCxFQUFDLE9BQU8sUUFBUixFQWhCUyxFQWlCVCxFQUFDLE9BQU8sU0FBUixFQWpCUyxFQWtCVCxFQUFDLE9BQU8saUJBQVIsRUFsQlMsRUFtQlQsRUFBQyxPQUFPLFNBQVIsRUFuQlMsRUFvQlQsRUFBQyxPQUFPLE9BQVIsRUFwQlMsQ0FBYjs7QUF1QkEsVUFBTSxrQkFBTixDQUF5QjtBQUNyQixlQUFPLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLFFBQW5CLEVBQTZCO0FBQ3pCLHFCQUFTLElBQVQsRUFBZSxNQUFmO0FBQ0g7O0FBRUQsZUFBTyxRQUFQLEdBQWtCO0FBQ2QsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCO0FBQzFDLHdCQUFRLE1BQVI7QUFDSCxhQUZNLENBQVA7QUFHSDtBQVRvQjs7QUFZekIsd0JBQVUsWUFBVixDQUF1QixvQkFBdkIsRUFBNkMsa0JBQTdDIiwiZmlsZSI6InNlcnZpY2VzL2N1cnJlbnRPcmRlclN0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cbnZhciBzdGF0dXMgPSBbXG4gICAge3ZhbHVlOiAnT3Blbid9LFxuICAgIHt2YWx1ZTogJ0Nsb3NlZCd9LFxuICAgIHt2YWx1ZTogJ0NvbXBsZXRlZCd9LFxuICAgIHt2YWx1ZTogJ1BlbmRpbmcnfSxcbiAgICB7dmFsdWU6ICdQcm9jZXNzZWQnfSxcbiAgICB7dmFsdWU6ICdDYW5jZWxsZWQnfSxcbiAgICB7dmFsdWU6ICdDaGFyZ2VkJ30sXG4gICAge3ZhbHVlOiAnQXV0aG9yaXplZCd9LFxuICAgIHt2YWx1ZTogJ1JlY3VycmluZyd9LFxuICAgIHt2YWx1ZTogJ1JvdXRlZCd9LFxuICAgIHt2YWx1ZTogJ1JlZnVuZGVkJ30sXG4gICAge3ZhbHVlOiAnUmV0dXJuZWQnfSxcbiAgICB7dmFsdWU6ICdEZWxpdmVyZWQnfSxcbiAgICB7dmFsdWU6ICdQYXltZW50RHVlJ30sXG4gICAge3ZhbHVlOiAnQ3VycmVudCd9LFxuICAgIHt2YWx1ZTogJ0ZhaWxlZCd9LFxuICAgIHt2YWx1ZTogJ0V4cGlyZWQnfSxcbiAgICB7dmFsdWU6ICdBd2FpdGluZ1BheW1lbnQnfSxcbiAgICB7dmFsdWU6ICdTaGlwcGVkJ30sXG4gICAge3ZhbHVlOiAnT3RoZXInfVxuXTtcblxuY2xhc3MgQ3VycmVudE9yZGVyU3RhdHVzIHtcbiAgICBzdGF0aWMgZ2V0KHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgc3RhdHVzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QXN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHN0YXR1cyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnQ3VycmVudE9yZGVyU3RhdHVzJywgQ3VycmVudE9yZGVyU3RhdHVzKTtcblxuIFxuXG5cbiJdfQ==