(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../references/elliptical', '../dependencies/container', '../references/keys'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../references/elliptical'), require('../dependencies/container'), require('../references/keys'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.elliptical, global.container, global.keys);
        global.mockRepositories = mod.exports;
    }
})(this, function (_elliptical, _container, _keys) {
    'use strict';

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    var _keys2 = _interopRequireDefault(_keys);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var random = _elliptical2.default.utils.random; /// Mock Repositories for User,Order,UserOrder services

    var date = _elliptical2.default.utils.date;
    var currency = _elliptical2.default.utils.currency;
    var GenericRepository = _elliptical2.default.GenericRepository;

    var USER_KEY = _keys2.default.USER_MODEL_KEY;
    var ORDER_KEY = _keys2.default.ORDER_MODEL_KEY;
    var DISCOUNT_KEY = _keys2.default.DISCOUNT_MODEL_KEY;
    var USER_TOTAL = _keys2.default.USERS;
    var ORDER_ID_MAX = _keys2.default.ORDER_ID_MAX;
    var USER_MAX_ORDER_NO = _keys2.default.USER_MAX_ORDER_NO;
    var ORDER_MIN_PRICE = _keys2.default.ORDER_MIN_PRICE;
    var ORDER_MAX_PRICE = _keys2.default.ORDER_MAX_PRICE;
    var ORDER_TRANSACTION_ID_LENGTH = _keys2.default.ORDER_TRANSACTION_ID_LENGTH;
    var REPOPULATE = _keys2.default.REPOPULATE;
    var USER_MODEL = null;
    var ORDER_MODEL = null;
    var DISCOUNT_MODEL = null;

    var $Local = _container2.default.getType('$Local');

    //common helper function
    var getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    //user repository --------------------------------------------------------------------------------------------------
    function userRepository() {

        var generateModel = function (MAX) {
            var _model = [];
            for (var i = 0; i < MAX; i++) {
                var user = {
                    id: faker.random.uuid(),
                    avatar: faker.image.avatar(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.stateAbbr(),
                    zipCode: faker.address.zipCode(),
                    phoneNumber: faker.phone.phoneNumber(),
                    signUpDate: faker.date.recent(365).toLocaleDateString(),
                    active: true,
                    orderCount: 0
                };
                _model.push(user);
            }

            return _model;
        };

        USER_MODEL = $Local.get(USER_KEY);
        if (!USER_MODEL || REPOPULATE) {
            REPOPULATE = false;
            USER_MODEL = generateModel(USER_TOTAL);
            $Local.set(USER_KEY, USER_MODEL);
        }

        var repo = new GenericRepository(USER_MODEL);

        //handle onChange for persistence
        repo.onChange = function (model) {
            $Local.set(USER_KEY, model);
        };

        repo.query = function (filter, asEnumerable) {
            var keys = Object.keys(filter);
            filter = filter[keys[0]];
            filter = filter.toLowerCase();
            var result = this.Enumerable().Where(function (x) {
                return x.firstName.toLowerCase().indexOf(filter) == 0 || x.lastName.toLowerCase().indexOf(filter) == 0 || x.city.toLowerCase().indexOf(filter) == 0;
            });
            return asEnumerable ? result : result.ToArray();
        };

        _container2.default.registerType('$UserRepository', repo);
    }

    //-- order repository ----------------------------------------------------------------------------------------------
    function orderRepository() {

        function generatePrice() {
            return getRandomInt(ORDER_MIN_PRICE, ORDER_MAX_PRICE);
        }

        var generatePaymentFields = function () {
            return [{ key: 'cardNumber', value: 'xxxx-xxxx-xxxx-1234' }, { key: 'cardCvv', value: 'xx1' }, { key: 'cardExpirationDate', value: faker.date.recent(365).toLocaleDateString() }];
        };

        var generateResponseFields = function () {
            return [{ key: 'transactionId', 'value': random.id(ORDER_TRANSACTION_ID_LENGTH) }];
        };

        var generateOrderItems = function () {
            var total = 0;
            var max = getRandomInt(1, 4);
            var items = [];

            for (var i = 0; i < max; i++) {
                var price = generatePrice();
                total += price;
                var item = {
                    sku: 'sku' + 1,
                    name: 'item description ' + i,
                    description: [],
                    price: price,
                    quantity: 1,
                    total: price
                };

                items.push(item);
            }

            return {
                items: items,
                total: total

            };
        };

        var generateUserOrders = function (MAX, user) {
            for (var i = 0; i < MAX; i++) {
                var order = {
                    id: faker.random.number({ min: 100, max: ORDER_ID_MAX }),
                    userId: user.id,
                    userAvatar: faker.image.avatar(),
                    billingAddress: {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        street: user.street,
                        city: user.city,
                        state: user.state,
                        zipCode: user.zipCode,
                        phoneNumber: user.phoneNumber
                    }
                };
                var shippingAddress = {
                    firstName: order.billingAddress.firstName,
                    lastName: order.billingAddress.lastName,
                    email: order.billingAddress.email,
                    street: order.billingAddress.street,
                    city: order.billingAddress.city,
                    state: order.billingAddress.state,
                    zipCode: order.billingAddress.zipCode,
                    phoneNumber: order.billingAddress.phoneNumber
                };
                order.shippingAddress = shippingAddress;
                var orderItems = generateOrderItems();
                user.orderCount = MAX;
                order.items = orderItems.items;
                order.subtotal = orderItems.total;
                order.tax = 0;
                order.total = order.subtotal;
                order.orderDate = faker.date.recent(365).toLocaleDateString();
                order.orderStatus = {
                    status: 'Closed',
                    notifications: []
                };
                order.shipping = 0;
                order.discount = 0;
                order.payment = {
                    paymentType: 'Credit Card',
                    paymentFields: generatePaymentFields(),
                    responseFields: generateResponseFields()
                };
                order.shippingMethod = {
                    id: 'UPS',
                    description: 'Ground Shipping',
                    charge: 0
                };
                order.discountItems = [];
                order.isAuthenticatedUser = true;

                ORDER_MODEL.push(order);
            }
        };

        ORDER_MODEL = $Local.get(ORDER_KEY);

        if (!ORDER_MODEL || REPOPULATE) {
            ORDER_MODEL = [];
            USER_MODEL.forEach(function (user, index) {
                if (index % 4 === 0) {
                    var max = getRandomInt(1, USER_MAX_ORDER_NO);
                    generateUserOrders(max, user);
                }
            });

            $Local.set(ORDER_KEY, ORDER_MODEL);
            $Local.set(USER_KEY, USER_MODEL);
        }

        var repo = new GenericRepository(ORDER_MODEL);

        //handle underlying model onChange for persistence
        repo.onChange = function (model) {
            $Local.set(ORDER_KEY, model);
        };

        repo.query = function (filter, asEnumerable) {
            var keys = Object.keys(filter);
            filter = filter[keys[0]];
            filter = filter.toLowerCase();
            var _filter = function (List, filter) {
                return List.Where(function (x) {
                    var firstName = x.billingAddress.firstName;
                    firstName = firstName.toLowerCase();
                    var lastName = x.billingAddress.lastName;
                    lastName = lastName.toLowerCase();
                    var id = x.id.toString();
                    var result = firstName.indexOf(filter) === 0 || lastName.indexOf(filter) === 0 || id.indexOf(filter) === 0;
                    if (result) {
                        return true;
                    } else {
                        var words = filter.split(' ');
                        if (words.length < 2) {
                            return false;
                        }
                        return firstName.indexOf(words[0]) === 0 && lastName.indexOf(words[1]) === 0;
                    }
                });
            };

            var _filterByUserId = function (List, userId) {
                return List.Where("$.userId == '" + userId + "'");
            };

            var List = this.Enumerable();
            var result;
            if (keys[0] === 'userId') {
                result = _filterByUserId(List, filter);
                return asEnumerable ? result : result.ToArray();
            } else {
                result = _filter(List, filter);
                return asEnumerable ? result : result.ToArray();
            }
        };

        _container2.default.registerType('$OrderRepository', repo);
    }

    //-- user order repository -----------------------------------------------------------------------------------------

    function userOrderRepository() {
        function UserOrder() {
            this.get = function (params, resource, query, callback) {
                var orderRepo = _container2.default.getType('$OrderRepository');
                var model = orderRepo.query({ userId: params.id });
                var repo = new GenericRepository(model);
                repo.get({}, resource, query, callback);
            };
        }

        _container2.default.registerType('$UserOrderRepository', new UserOrder());
    }

    //-- report repository ---------------------------------------------------------------------------------------------

    function reportRepository() {
        var orderRepo = _container2.default.getType('$OrderRepository');

        function Report() {
            this.get = function (params, resoure, query, callback) {
                var result = {
                    orders: ORDER_MODEL.length,
                    users: USER_MODEL.length,
                    sales: 0,
                    visits: 'N/A'
                };
                var List = orderRepo.Enumerable();
                result.sales = List.Select(function (x) {
                    return x.total;
                }).Sum();

                result.sales = currency.format(result.sales);
                callback(null, result);
            };
        }

        _container2.default.registerType('$ReportRepository', new Report());
    }

    // ------ profile repository ---------------------------------------------------------------------------------------

    function profileRepository() {
        var profile = {
            id: 1,
            username: 'admin',
            password: 'admin',
            name: 'Admin'
        };

        function $ProfileProvider() {
            this.post = function (params, resource, callback) {
                if (params.username === profile.username && params.password === profile.password) {
                    callback(null, profile);
                } else {
                    callback({ statusCode: 401, message: 'Invalid Login' }, null);
                }
            };
        }

        _container2.default.registerType('$ProfileProvider', new $ProfileProvider());
    }

    // --------- user reset password -----------------------------------------------------------------------------------
    function userResetPasswordRepository() {

        function $UserResetPassword() {
            this.post = function (params, resource, callback) {
                callback(null, params);
            };
        }

        _container2.default.registerType('$UserResetPasswordProvider', new $UserResetPassword());
    }

    // --------- user alert -----------------------------------------------------------------------------------
    function userAlertRepository() {

        function $UserAlert() {
            this.post = function (params, resource, callback) {
                callback(null, params);
            };
        }

        _container2.default.registerType('$UserAlertProvider', new $UserAlert());
    }

    //-- order status repository ---------------------------------------------------------------------------------------

    function orderStatusRepository() {
        var orderRepo = _container2.default.getType('$OrderRepository');

        function OrderStatus() {
            this.post = function (params, resoure, callback) {
                var order = orderRepo.get({ id: params.id });
                order.orderStatus.status = params.key;
                var notification = {
                    key: params.key,
                    value: params.value,
                    date: date.current()

                };

                order.orderStatus.notifications.push(notification);
                orderRepo.put(order);
                callback(null, params);
            };
        }

        _container2.default.registerType('$OrderStatusProvider', new OrderStatus());
    }

    //-- order alert repository ----------------------------------------------------------------------------------------

    function orderAlertRepository() {
        var orderRepo = _container2.default.getType('$OrderRepository');

        function OrderAlert() {
            this.post = function (params, resoure, callback) {
                var order = orderRepo.get({ id: params.id });
                var notification = {
                    key: params.key,
                    value: params.value,
                    date: date.current()
                };

                order.orderStatus.notifications.push(notification);
                orderRepo.put(order);
                callback(null, params);
            };
        }

        _container2.default.registerType('$OrderAlertProvider', new OrderAlert());
    }

    //-- discount repository -------------------------------------------------------------------------------------------

    function discountRepository() {
        DISCOUNT_MODEL = $Local.get(DISCOUNT_KEY);
        if (!DISCOUNT_MODEL || REPOPULATE) {
            REPOPULATE = false;
            DISCOUNT_MODEL = [];
            $Local.set(DISCOUNT_KEY, DISCOUNT_MODEL);
        }

        var repo = new GenericRepository(DISCOUNT_MODEL);
        repo.get = function (params, resource, query, callback) {
            if (query.paginate) return repo._get(params, query, callback);
            var code = params.id;
            var List = this.Enumerable();
            var promo = List.Where(function (x) {
                return x.code.toLowerCase() == code.toLowerCase();
            }).FirstOrDefault();
            callback(null, promo);
        };
        //handle onChange for persistence
        repo.onChange = function (model) {
            $Local.set(DISCOUNT_KEY, model);
        };

        _container2.default.registerType('$DiscountRepository', repo);
    }

    //-- discount validate repository ----------------------------------------------------------------------------------

    function discountValidateRepository() {
        var discountRepo = _container2.default.getType('$DiscountRepository');

        function DiscountValidate() {
            this.get = function (params, resoure, query, callback) {
                var List = discountRepo.Enumerable();
                var code = params.code.toLowerCase();
                var exists = List.Where(function (x) {
                    return x.code.toLowerCase() === code;
                });

                if (exists) callback({ message: 'duplicate code' }, null);else callback(null, {});
            };
        }

        _container2.default.registerType('$DiscountValidateProvider', new DiscountValidate());
    }

    userRepository();
    orderRepository();
    userOrderRepository();
    reportRepository();
    profileRepository();
    userResetPasswordRepository();
    userAlertRepository();
    orderStatusRepository();
    orderAlertRepository();
    discountRepository();
    discountValidateRepository();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9tb2NrUmVwb3NpdG9yaWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFFBQUksU0FBUyxxQkFBVyxLQUFYLENBQWlCLE1BQTlCLEM7O0FBQ0EsUUFBSSxPQUFPLHFCQUFXLEtBQVgsQ0FBaUIsSUFBNUI7QUFDQSxRQUFJLFdBQVcscUJBQVcsS0FBWCxDQUFpQixRQUFoQztBQUNBLFFBQUksb0JBQW9CLHFCQUFXLGlCQUFuQzs7QUFHQSxRQUFJLFdBQVUsZUFBSyxjQUFuQjtBQUNBLFFBQUksWUFBWSxlQUFLLGVBQXJCO0FBQ0EsUUFBSSxlQUFlLGVBQUssa0JBQXhCO0FBQ0EsUUFBSSxhQUFXLGVBQUssS0FBcEI7QUFDQSxRQUFJLGVBQWEsZUFBSyxZQUF0QjtBQUNBLFFBQUksb0JBQWtCLGVBQUssaUJBQTNCO0FBQ0EsUUFBSSxrQkFBZ0IsZUFBSyxlQUF6QjtBQUNBLFFBQUksa0JBQWdCLGVBQUssZUFBekI7QUFDQSxRQUFJLDhCQUE0QixlQUFLLDJCQUFyQztBQUNBLFFBQUksYUFBYSxlQUFLLFVBQXRCO0FBQ0EsUUFBSSxhQUFhLElBQWpCO0FBQ0EsUUFBSSxjQUFjLElBQWxCO0FBQ0EsUUFBSSxpQkFBaUIsSUFBckI7O0FBRUEsUUFBSSxTQUFTLG9CQUFVLE9BQVYsQ0FBa0IsUUFBbEIsQ0FBYjs7O0FBSUEsUUFBSSxlQUFlLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0I7QUFDbkMsZUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4QyxHQUFyRDtBQUNILEtBRkQ7OztBQU1BLGFBQVMsY0FBVCxHQUEwQjs7QUFFdEIsWUFBSSxnQkFBZ0IsVUFBVSxHQUFWLEVBQWU7QUFDL0IsZ0JBQUksU0FBUyxFQUFiO0FBQ0EsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxHQUFwQixFQUF5QixHQUF6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O0FBQ2xDLFlBQUksZUFBZSxvQkFBVSxPQUFWLENBQWtCLHFCQUFsQixDQUFuQjs7QUFFQSxpQkFBUyxnQkFBVCxHQUE0QjtBQUN4QixpQkFBSyxHQUFMLEdBQVcsVUFBVSxNQUFWLEVBQWtCLE9BQWxCLEVBQTJCLEtBQTNCLEVBQWtDLFFBQWxDLEVBQTRDO0FBQ25ELG9CQUFJLE9BQU8sYUFBYSxVQUFiLEVBQVg7QUFDQSxvQkFBSSxPQUFPLE9BQU8sSUFBUCxDQUFZLFdBQVosRUFBWDtBQUNBLG9CQUFJLFNBQVMsS0FBSyxLQUFMLENBQVcsVUFBVSxDQUFWLEVBQWE7QUFDakMsMkJBQU8sRUFBRSxJQUFGLENBQU8sV0FBUCxPQUF5QixJQUFoQztBQUNILGlCQUZZLENBQWI7O0FBSUEsb0JBQUksTUFBSixFQUFZLFNBQVMsRUFBQyxTQUFTLGdCQUFWLEVBQVQsRUFBc0MsSUFBdEMsRUFBWixLQUNLLFNBQVMsSUFBVCxFQUFlLEVBQWY7QUFDUixhQVREO0FBVUg7O0FBRUQsNEJBQVUsWUFBVixDQUF1QiwyQkFBdkIsRUFBb0QsSUFBSSxnQkFBSixFQUFwRDtBQUNIOztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicHJvdmlkZXJzL21vY2tSZXBvc2l0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gTW9jayBSZXBvc2l0b3JpZXMgZm9yIFVzZXIsT3JkZXIsVXNlck9yZGVyIHNlcnZpY2VzXG5cblxuaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5pbXBvcnQga2V5cyBmcm9tICcuLi9yZWZlcmVuY2VzL2tleXMnO1xuXG52YXIgcmFuZG9tID0gZWxsaXB0aWNhbC51dGlscy5yYW5kb207XG52YXIgZGF0ZSA9IGVsbGlwdGljYWwudXRpbHMuZGF0ZTtcbnZhciBjdXJyZW5jeSA9IGVsbGlwdGljYWwudXRpbHMuY3VycmVuY3k7XG52YXIgR2VuZXJpY1JlcG9zaXRvcnkgPSBlbGxpcHRpY2FsLkdlbmVyaWNSZXBvc2l0b3J5O1xuXG5cbnZhciBVU0VSX0tFWSA9a2V5cy5VU0VSX01PREVMX0tFWTtcbnZhciBPUkRFUl9LRVkgPSBrZXlzLk9SREVSX01PREVMX0tFWTtcbnZhciBESVNDT1VOVF9LRVkgPSBrZXlzLkRJU0NPVU5UX01PREVMX0tFWTtcbnZhciBVU0VSX1RPVEFMPWtleXMuVVNFUlM7XG52YXIgT1JERVJfSURfTUFYPWtleXMuT1JERVJfSURfTUFYO1xudmFyIFVTRVJfTUFYX09SREVSX05PPWtleXMuVVNFUl9NQVhfT1JERVJfTk87XG52YXIgT1JERVJfTUlOX1BSSUNFPWtleXMuT1JERVJfTUlOX1BSSUNFO1xudmFyIE9SREVSX01BWF9QUklDRT1rZXlzLk9SREVSX01BWF9QUklDRTtcbnZhciBPUkRFUl9UUkFOU0FDVElPTl9JRF9MRU5HVEg9a2V5cy5PUkRFUl9UUkFOU0FDVElPTl9JRF9MRU5HVEg7XG52YXIgUkVQT1BVTEFURSA9IGtleXMuUkVQT1BVTEFURTtcbnZhciBVU0VSX01PREVMID0gbnVsbDtcbnZhciBPUkRFUl9NT0RFTCA9IG51bGw7XG52YXIgRElTQ09VTlRfTU9ERUwgPSBudWxsO1xuXG52YXIgJExvY2FsID0gY29udGFpbmVyLmdldFR5cGUoJyRMb2NhbCcpO1xuXG5cbi8vY29tbW9uIGhlbHBlciBmdW5jdGlvblxudmFyIGdldFJhbmRvbUludCA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufTtcblxuXG4vL3VzZXIgcmVwb3NpdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gdXNlclJlcG9zaXRvcnkoKSB7XG5cbiAgICB2YXIgZ2VuZXJhdGVNb2RlbCA9IGZ1bmN0aW9uIChNQVgpIHtcbiAgICAgICAgdmFyIF9tb2RlbCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE1BWDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmFrZXIucmFuZG9tLnV1aWQoKSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGZha2VyLmltYWdlLmF2YXRhcigpLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogZmFrZXIubmFtZS5maXJzdE5hbWUoKSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogZmFrZXIubmFtZS5sYXN0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBmYWtlci5pbnRlcm5ldC5lbWFpbCgpLFxuICAgICAgICAgICAgICAgIHN0cmVldDogZmFrZXIuYWRkcmVzcy5zdHJlZXRBZGRyZXNzKCksXG4gICAgICAgICAgICAgICAgY2l0eTogZmFrZXIuYWRkcmVzcy5jaXR5KCksXG4gICAgICAgICAgICAgICAgc3RhdGU6IGZha2VyLmFkZHJlc3Muc3RhdGVBYmJyKCksXG4gICAgICAgICAgICAgICAgemlwQ29kZTogZmFrZXIuYWRkcmVzcy56aXBDb2RlKCksXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGZha2VyLnBob25lLnBob25lTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgc2lnblVwRGF0ZTogZmFrZXIuZGF0ZS5yZWNlbnQoMzY1KS50b0xvY2FsZURhdGVTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3JkZXJDb3VudDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9tb2RlbC5wdXNoKHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9tb2RlbDtcbiAgICB9O1xuXG4gICAgVVNFUl9NT0RFTCA9ICRMb2NhbC5nZXQoVVNFUl9LRVkpO1xuICAgIGlmICghVVNFUl9NT0RFTCB8fCBSRVBPUFVMQVRFKSB7XG4gICAgICAgIFJFUE9QVUxBVEUgPSBmYWxzZTtcbiAgICAgICAgVVNFUl9NT0RFTCA9IGdlbmVyYXRlTW9kZWwoVVNFUl9UT1RBTCk7XG4gICAgICAgICRMb2NhbC5zZXQoVVNFUl9LRVksIFVTRVJfTU9ERUwpO1xuICAgIH1cblxuICAgIHZhciByZXBvID0gbmV3IEdlbmVyaWNSZXBvc2l0b3J5KFVTRVJfTU9ERUwpO1xuXG4gICAgLy9oYW5kbGUgb25DaGFuZ2UgZm9yIHBlcnNpc3RlbmNlXG4gICAgcmVwby5vbkNoYW5nZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAkTG9jYWwuc2V0KFVTRVJfS0VZLCBtb2RlbCk7XG4gICAgfTtcblxuXG4gICAgcmVwby5xdWVyeSA9IGZ1bmN0aW9uIChmaWx0ZXIsIGFzRW51bWVyYWJsZSkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7XG4gICAgICAgIGZpbHRlciA9IGZpbHRlcltrZXlzWzBdXTtcbiAgICAgICAgZmlsdGVyID0gZmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLkVudW1lcmFibGUoKS5XaGVyZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuICgoeC5maXJzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPT0gMCkgfHwgKHgubGFzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPT0gMClcbiAgICAgICAgICAgIHx8ICh4LmNpdHkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPT0gMCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChhc0VudW1lcmFibGUpID8gcmVzdWx0IDogcmVzdWx0LlRvQXJyYXkoKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJFVzZXJSZXBvc2l0b3J5JywgcmVwbyk7XG59XG5cblxuLy8tLSBvcmRlciByZXBvc2l0b3J5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIG9yZGVyUmVwb3NpdG9yeSgpIHtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUHJpY2UoKSB7XG4gICAgICAgIHJldHVybiBnZXRSYW5kb21JbnQoT1JERVJfTUlOX1BSSUNFLCBPUkRFUl9NQVhfUFJJQ0UpO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZVBheW1lbnRGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbe2tleTogJ2NhcmROdW1iZXInLCB2YWx1ZTogJ3h4eHgteHh4eC14eHh4LTEyMzQnfSwge2tleTogJ2NhcmRDdnYnLCB2YWx1ZTogJ3h4MSd9LFxuICAgICAgICAgICAge2tleTogJ2NhcmRFeHBpcmF0aW9uRGF0ZScsIHZhbHVlOiBmYWtlci5kYXRlLnJlY2VudCgzNjUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfV07XG4gICAgfTtcblxuICAgIHZhciBnZW5lcmF0ZVJlc3BvbnNlRmllbGRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3trZXk6ICd0cmFuc2FjdGlvbklkJywgJ3ZhbHVlJzogcmFuZG9tLmlkKE9SREVSX1RSQU5TQUNUSU9OX0lEX0xFTkdUSCl9XTtcbiAgICB9O1xuXG4gICAgdmFyIGdlbmVyYXRlT3JkZXJJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gMDtcbiAgICAgICAgdmFyIG1heCA9IGdldFJhbmRvbUludCgxLCA0KTtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByaWNlID0gZ2VuZXJhdGVQcmljZSgpO1xuICAgICAgICAgICAgdG90YWwgKz0gcHJpY2U7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBza3U6ICdza3UnICsgMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnaXRlbSBkZXNjcmlwdGlvbiAnICsgaSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogW10sXG4gICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBwcmljZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgICAgICB0b3RhbDogdG90YWxcblxuICAgICAgICB9O1xuICAgIH07XG5cblxuICAgIHZhciBnZW5lcmF0ZVVzZXJPcmRlcnMgPSBmdW5jdGlvbiAoTUFYLCB1c2VyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTUFYOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcmRlciA9IHtcbiAgICAgICAgICAgICAgICBpZDogZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxMDAsIG1heDogT1JERVJfSURfTUFYfSksXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgIHVzZXJBdmF0YXI6IGZha2VyLmltYWdlLmF2YXRhcigpLFxuICAgICAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB1c2VyLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0OiB1c2VyLnN0cmVldCxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogdXNlci5jaXR5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdXNlci5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgemlwQ29kZTogdXNlci56aXBDb2RlLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdXNlci5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgc2hpcHBpbmdBZGRyZXNzID0ge1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogb3JkZXIuYmlsbGluZ0FkZHJlc3MuZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBvcmRlci5iaWxsaW5nQWRkcmVzcy5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogb3JkZXIuYmlsbGluZ0FkZHJlc3MuZW1haWwsXG4gICAgICAgICAgICAgICAgc3RyZWV0OiBvcmRlci5iaWxsaW5nQWRkcmVzcy5zdHJlZXQsXG4gICAgICAgICAgICAgICAgY2l0eTogb3JkZXIuYmlsbGluZ0FkZHJlc3MuY2l0eSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogb3JkZXIuYmlsbGluZ0FkZHJlc3Muc3RhdGUsXG4gICAgICAgICAgICAgICAgemlwQ29kZTogb3JkZXIuYmlsbGluZ0FkZHJlc3MuemlwQ29kZSxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogb3JkZXIuYmlsbGluZ0FkZHJlc3MucGhvbmVOdW1iZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvcmRlci5zaGlwcGluZ0FkZHJlc3MgPSBzaGlwcGluZ0FkZHJlc3M7XG4gICAgICAgICAgICB2YXIgb3JkZXJJdGVtcyA9IGdlbmVyYXRlT3JkZXJJdGVtcygpO1xuICAgICAgICAgICAgdXNlci5vcmRlckNvdW50ID0gTUFYO1xuICAgICAgICAgICAgb3JkZXIuaXRlbXMgPSBvcmRlckl0ZW1zLml0ZW1zO1xuICAgICAgICAgICAgb3JkZXIuc3VidG90YWwgPSBvcmRlckl0ZW1zLnRvdGFsO1xuICAgICAgICAgICAgb3JkZXIudGF4ID0gMDtcbiAgICAgICAgICAgIG9yZGVyLnRvdGFsID0gb3JkZXIuc3VidG90YWw7XG4gICAgICAgICAgICBvcmRlci5vcmRlckRhdGUgPSBmYWtlci5kYXRlLnJlY2VudCgzNjUpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgb3JkZXIub3JkZXJTdGF0dXMgPSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnQ2xvc2VkJyxcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nID0gMDtcbiAgICAgICAgICAgIG9yZGVyLmRpc2NvdW50ID0gMDtcbiAgICAgICAgICAgIG9yZGVyLnBheW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudFR5cGU6ICdDcmVkaXQgQ2FyZCcsXG4gICAgICAgICAgICAgICAgcGF5bWVudEZpZWxkczogZ2VuZXJhdGVQYXltZW50RmllbGRzKCksXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VGaWVsZHM6IGdlbmVyYXRlUmVzcG9uc2VGaWVsZHMoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nTWV0aG9kID0ge1xuICAgICAgICAgICAgICAgIGlkOiAnVVBTJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0dyb3VuZCBTaGlwcGluZycsXG4gICAgICAgICAgICAgICAgY2hhcmdlOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3JkZXIuZGlzY291bnRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgb3JkZXIuaXNBdXRoZW50aWNhdGVkVXNlciA9IHRydWU7XG5cbiAgICAgICAgICAgIE9SREVSX01PREVMLnB1c2gob3JkZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgT1JERVJfTU9ERUwgPSAkTG9jYWwuZ2V0KE9SREVSX0tFWSk7XG5cbiAgICBpZiAoIU9SREVSX01PREVMIHx8IFJFUE9QVUxBVEUpIHtcbiAgICAgICAgT1JERVJfTU9ERUwgPSBbXTtcbiAgICAgICAgVVNFUl9NT0RFTC5mb3JFYWNoKGZ1bmN0aW9uICh1c2VyLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ICUgNCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXggPSBnZXRSYW5kb21JbnQoMSwgVVNFUl9NQVhfT1JERVJfTk8pO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlVXNlck9yZGVycyhtYXgsIHVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkTG9jYWwuc2V0KE9SREVSX0tFWSwgT1JERVJfTU9ERUwpO1xuICAgICAgICAkTG9jYWwuc2V0KFVTRVJfS0VZLCBVU0VSX01PREVMKTtcbiAgICB9XG5cbiAgICB2YXIgcmVwbyA9IG5ldyBHZW5lcmljUmVwb3NpdG9yeShPUkRFUl9NT0RFTCk7XG5cbiAgICAvL2hhbmRsZSB1bmRlcmx5aW5nIG1vZGVsIG9uQ2hhbmdlIGZvciBwZXJzaXN0ZW5jZVxuICAgIHJlcG8ub25DaGFuZ2UgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgJExvY2FsLnNldChPUkRFUl9LRVksIG1vZGVsKTtcbiAgICB9O1xuXG4gICAgcmVwby5xdWVyeSA9IGZ1bmN0aW9uIChmaWx0ZXIsIGFzRW51bWVyYWJsZSkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7XG4gICAgICAgIGZpbHRlciA9IGZpbHRlcltrZXlzWzBdXTtcbiAgICAgICAgZmlsdGVyID0gZmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBfZmlsdGVyID0gZnVuY3Rpb24gKExpc3QsIGZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIExpc3QuV2hlcmUoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3ROYW1lID0geC5iaWxsaW5nQWRkcmVzcy5maXJzdE5hbWU7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lID0gZmlyc3ROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3ROYW1lID0geC5iaWxsaW5nQWRkcmVzcy5sYXN0TmFtZTtcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSA9IGxhc3ROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0geC5pZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKGZpcnN0TmFtZS5pbmRleE9mKGZpbHRlcikgPT09IDApIHx8IChsYXN0TmFtZS5pbmRleE9mKGZpbHRlcikgPT09IDApIHx8IChpZC5pbmRleE9mKGZpbHRlcikgPT09IDApKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IGZpbHRlci5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAod29yZHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoZmlyc3ROYW1lLmluZGV4T2Yod29yZHNbMF0pID09PSAwICYmIGxhc3ROYW1lLmluZGV4T2Yod29yZHNbMV0pID09PSAwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIF9maWx0ZXJCeVVzZXJJZCA9IGZ1bmN0aW9uIChMaXN0LCB1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybiBMaXN0LldoZXJlKFwiJC51c2VySWQgPT0gJ1wiICsgdXNlcklkICsgXCInXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBMaXN0ID0gdGhpcy5FbnVtZXJhYmxlKCk7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIGlmIChrZXlzWzBdID09PSAndXNlcklkJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gX2ZpbHRlckJ5VXNlcklkKExpc3QsIGZpbHRlcik7XG4gICAgICAgICAgICByZXR1cm4gKGFzRW51bWVyYWJsZSkgPyByZXN1bHQgOiByZXN1bHQuVG9BcnJheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gX2ZpbHRlcihMaXN0LCBmaWx0ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIChhc0VudW1lcmFibGUpID8gcmVzdWx0IDogcmVzdWx0LlRvQXJyYXkoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb250YWluZXIucmVnaXN0ZXJUeXBlKCckT3JkZXJSZXBvc2l0b3J5JywgcmVwbyk7XG59XG5cbi8vLS0gdXNlciBvcmRlciByZXBvc2l0b3J5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHVzZXJPcmRlclJlcG9zaXRvcnkoKSB7XG4gICAgZnVuY3Rpb24gVXNlck9yZGVyKCkge1xuICAgICAgICB0aGlzLmdldCA9IGZ1bmN0aW9uIChwYXJhbXMsIHJlc291cmNlLCBxdWVyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBvcmRlclJlcG8gPSBjb250YWluZXIuZ2V0VHlwZSgnJE9yZGVyUmVwb3NpdG9yeScpO1xuICAgICAgICAgICAgdmFyIG1vZGVsID0gb3JkZXJSZXBvLnF1ZXJ5KHt1c2VySWQ6IHBhcmFtcy5pZH0pO1xuICAgICAgICAgICAgdmFyIHJlcG8gPSBuZXcgR2VuZXJpY1JlcG9zaXRvcnkobW9kZWwpO1xuICAgICAgICAgICAgcmVwby5nZXQoe30sIHJlc291cmNlLCBxdWVyeSwgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRVc2VyT3JkZXJSZXBvc2l0b3J5JywgbmV3IFVzZXJPcmRlcigpKTtcbn1cblxuLy8tLSByZXBvcnQgcmVwb3NpdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVwb3J0UmVwb3NpdG9yeSgpIHtcbiAgICB2YXIgb3JkZXJSZXBvID0gY29udGFpbmVyLmdldFR5cGUoJyRPcmRlclJlcG9zaXRvcnknKTtcblxuICAgIGZ1bmN0aW9uIFJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5nZXQgPSBmdW5jdGlvbiAocGFyYW1zLCByZXNvdXJlLCBxdWVyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgb3JkZXJzOiBPUkRFUl9NT0RFTC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdXNlcnM6IFVTRVJfTU9ERUwubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHNhbGVzOiAwLFxuICAgICAgICAgICAgICAgIHZpc2l0czogJ04vQSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgTGlzdCA9IG9yZGVyUmVwby5FbnVtZXJhYmxlKCk7XG4gICAgICAgICAgICByZXN1bHQuc2FsZXMgPSBMaXN0LlNlbGVjdChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LnRvdGFsO1xuICAgICAgICAgICAgfSkuU3VtKCk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5zYWxlcyA9IGN1cnJlbmN5LmZvcm1hdChyZXN1bHQuc2FsZXMpO1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRSZXBvcnRSZXBvc2l0b3J5JywgbmV3IFJlcG9ydCgpKTtcbn1cblxuLy8gLS0tLS0tIHByb2ZpbGUgcmVwb3NpdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcHJvZmlsZVJlcG9zaXRvcnkoKSB7XG4gICAgdmFyIHByb2ZpbGUgPSB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB1c2VybmFtZTogJ2FkbWluJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXG4gICAgICAgIG5hbWU6ICdBZG1pbidcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJFByb2ZpbGVQcm92aWRlcigpIHtcbiAgICAgICAgdGhpcy5wb3N0ID0gZnVuY3Rpb24gKHBhcmFtcywgcmVzb3VyY2UsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnVzZXJuYW1lID09PSBwcm9maWxlLnVzZXJuYW1lICYmIHBhcmFtcy5wYXNzd29yZCA9PT0gcHJvZmlsZS5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHByb2ZpbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7c3RhdHVzQ29kZTogNDAxLCBtZXNzYWdlOiAnSW52YWxpZCBMb2dpbid9LCBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRQcm9maWxlUHJvdmlkZXInLCBuZXcgJFByb2ZpbGVQcm92aWRlcigpKTtcblxufVxuXG4vLyAtLS0tLS0tLS0gdXNlciByZXNldCBwYXNzd29yZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gdXNlclJlc2V0UGFzc3dvcmRSZXBvc2l0b3J5KCkge1xuXG4gICAgZnVuY3Rpb24gJFVzZXJSZXNldFBhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLnBvc3QgPSBmdW5jdGlvbiAocGFyYW1zLCByZXNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb250YWluZXIucmVnaXN0ZXJUeXBlKCckVXNlclJlc2V0UGFzc3dvcmRQcm92aWRlcicsIG5ldyAkVXNlclJlc2V0UGFzc3dvcmQoKSk7XG59XG5cbi8vIC0tLS0tLS0tLSB1c2VyIGFsZXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiB1c2VyQWxlcnRSZXBvc2l0b3J5KCkge1xuXG4gICAgZnVuY3Rpb24gJFVzZXJBbGVydCgpIHtcbiAgICAgICAgdGhpcy5wb3N0ID0gZnVuY3Rpb24gKHBhcmFtcywgcmVzb3VyY2UsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJFVzZXJBbGVydFByb3ZpZGVyJywgbmV3ICRVc2VyQWxlcnQoKSk7XG59XG5cbi8vLS0gb3JkZXIgc3RhdHVzIHJlcG9zaXRvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG9yZGVyU3RhdHVzUmVwb3NpdG9yeSgpIHtcbiAgICB2YXIgb3JkZXJSZXBvID0gY29udGFpbmVyLmdldFR5cGUoJyRPcmRlclJlcG9zaXRvcnknKTtcblxuICAgIGZ1bmN0aW9uIE9yZGVyU3RhdHVzKCkge1xuICAgICAgICB0aGlzLnBvc3QgPSBmdW5jdGlvbiAocGFyYW1zLCByZXNvdXJlLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIG9yZGVyID0gb3JkZXJSZXBvLmdldCh7aWQ6IHBhcmFtcy5pZH0pO1xuICAgICAgICAgICAgb3JkZXIub3JkZXJTdGF0dXMuc3RhdHVzID0gcGFyYW1zLmtleTtcbiAgICAgICAgICAgIHZhciBub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICAgICAga2V5OiBwYXJhbXMua2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZS5jdXJyZW50KClcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb3JkZXIub3JkZXJTdGF0dXMubm90aWZpY2F0aW9ucy5wdXNoKG5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICBvcmRlclJlcG8ucHV0KG9yZGVyKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJE9yZGVyU3RhdHVzUHJvdmlkZXInLCBuZXcgT3JkZXJTdGF0dXMoKSk7XG59XG5cbi8vLS0gb3JkZXIgYWxlcnQgcmVwb3NpdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG9yZGVyQWxlcnRSZXBvc2l0b3J5KCkge1xuICAgIHZhciBvcmRlclJlcG8gPSBjb250YWluZXIuZ2V0VHlwZSgnJE9yZGVyUmVwb3NpdG9yeScpO1xuXG4gICAgZnVuY3Rpb24gT3JkZXJBbGVydCgpIHtcbiAgICAgICAgdGhpcy5wb3N0ID0gZnVuY3Rpb24gKHBhcmFtcywgcmVzb3VyZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBvcmRlciA9IG9yZGVyUmVwby5nZXQoe2lkOiBwYXJhbXMuaWR9KTtcbiAgICAgICAgICAgIHZhciBub3RpZmljYXRpb24gPSB7XG4gICAgICAgICAgICAgICAga2V5OiBwYXJhbXMua2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZS5jdXJyZW50KClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG9yZGVyLm9yZGVyU3RhdHVzLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgb3JkZXJSZXBvLnB1dChvcmRlcik7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBwYXJhbXMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRPcmRlckFsZXJ0UHJvdmlkZXInLCBuZXcgT3JkZXJBbGVydCgpKTtcbn1cblxuLy8tLSBkaXNjb3VudCByZXBvc2l0b3J5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZGlzY291bnRSZXBvc2l0b3J5KCkge1xuICAgIERJU0NPVU5UX01PREVMID0gJExvY2FsLmdldChESVNDT1VOVF9LRVkpO1xuICAgIGlmICghRElTQ09VTlRfTU9ERUwgfHwgUkVQT1BVTEFURSkge1xuICAgICAgICBSRVBPUFVMQVRFID0gZmFsc2U7XG4gICAgICAgIERJU0NPVU5UX01PREVMID0gW107XG4gICAgICAgICRMb2NhbC5zZXQoRElTQ09VTlRfS0VZLCBESVNDT1VOVF9NT0RFTCk7XG4gICAgfVxuXG4gICAgdmFyIHJlcG8gPSBuZXcgR2VuZXJpY1JlcG9zaXRvcnkoRElTQ09VTlRfTU9ERUwpO1xuICAgIHJlcG8uZ2V0ID0gZnVuY3Rpb24gKHBhcmFtcywgcmVzb3VyY2UsIHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAocXVlcnkucGFnaW5hdGUpIHJldHVybiByZXBvLl9nZXQocGFyYW1zLCBxdWVyeSwgY2FsbGJhY2spO1xuICAgICAgICB2YXIgY29kZSA9IHBhcmFtcy5pZDtcbiAgICAgICAgdmFyIExpc3QgPSB0aGlzLkVudW1lcmFibGUoKTtcbiAgICAgICAgdmFyIHByb21vID0gTGlzdC5XaGVyZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHguY29kZS50b0xvd2VyQ2FzZSgpID09IGNvZGUudG9Mb3dlckNhc2UoKVxuICAgICAgICB9KS5GaXJzdE9yRGVmYXVsdCgpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCBwcm9tbyk7XG4gICAgfTtcbiAgICAvL2hhbmRsZSBvbkNoYW5nZSBmb3IgcGVyc2lzdGVuY2VcbiAgICByZXBvLm9uQ2hhbmdlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICRMb2NhbC5zZXQoRElTQ09VTlRfS0VZLCBtb2RlbCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyREaXNjb3VudFJlcG9zaXRvcnknLCByZXBvKTtcblxufVxuXG4vLy0tIGRpc2NvdW50IHZhbGlkYXRlIHJlcG9zaXRvcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBkaXNjb3VudFZhbGlkYXRlUmVwb3NpdG9yeSgpIHtcbiAgICB2YXIgZGlzY291bnRSZXBvID0gY29udGFpbmVyLmdldFR5cGUoJyREaXNjb3VudFJlcG9zaXRvcnknKTtcblxuICAgIGZ1bmN0aW9uIERpc2NvdW50VmFsaWRhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2V0ID0gZnVuY3Rpb24gKHBhcmFtcywgcmVzb3VyZSwgcXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgTGlzdCA9IGRpc2NvdW50UmVwby5FbnVtZXJhYmxlKCk7XG4gICAgICAgICAgICB2YXIgY29kZSA9IHBhcmFtcy5jb2RlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB2YXIgZXhpc3RzID0gTGlzdC5XaGVyZShmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4LmNvZGUudG9Mb3dlckNhc2UoKSA9PT0gY29kZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RzKSBjYWxsYmFjayh7bWVzc2FnZTogJ2R1cGxpY2F0ZSBjb2RlJ30sIG51bGwpO1xuICAgICAgICAgICAgZWxzZSBjYWxsYmFjayhudWxsLCB7fSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnJERpc2NvdW50VmFsaWRhdGVQcm92aWRlcicsIG5ldyBEaXNjb3VudFZhbGlkYXRlKCkpO1xufVxuXG5cbnVzZXJSZXBvc2l0b3J5KCk7XG5vcmRlclJlcG9zaXRvcnkoKTtcbnVzZXJPcmRlclJlcG9zaXRvcnkoKTtcbnJlcG9ydFJlcG9zaXRvcnkoKTtcbnByb2ZpbGVSZXBvc2l0b3J5KCk7XG51c2VyUmVzZXRQYXNzd29yZFJlcG9zaXRvcnkoKTtcbnVzZXJBbGVydFJlcG9zaXRvcnkoKTtcbm9yZGVyU3RhdHVzUmVwb3NpdG9yeSgpO1xub3JkZXJBbGVydFJlcG9zaXRvcnkoKTtcbmRpc2NvdW50UmVwb3NpdG9yeSgpO1xuZGlzY291bnRWYWxpZGF0ZVJlcG9zaXRvcnkoKTtcblxuIFxuIl19