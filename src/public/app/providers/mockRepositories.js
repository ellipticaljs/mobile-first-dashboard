/// Mock Repositories for User,Order,UserOrder services


import elliptical from '../references/elliptical';
import container from '../dependencies/container';
import keys from '../references/keys';

var random = elliptical.utils.random;
var date = elliptical.utils.date;
var currency = elliptical.utils.currency;
var GenericRepository = elliptical.GenericRepository;


var USER_KEY =keys.USER_MODEL_KEY;
var ORDER_KEY = keys.ORDER_MODEL_KEY;
var DISCOUNT_KEY = keys.DISCOUNT_MODEL_KEY;
var USER_TOTAL=keys.USERS;
var ORDER_ID_MAX=keys.ORDER_ID_MAX;
var USER_MAX_ORDER_NO=keys.USER_MAX_ORDER_NO;
var ORDER_MIN_PRICE=keys.ORDER_MIN_PRICE;
var ORDER_MAX_PRICE=keys.ORDER_MAX_PRICE;
var ORDER_TRANSACTION_ID_LENGTH=keys.ORDER_TRANSACTION_ID_LENGTH;
var REPOPULATE = keys.REPOPULATE;
var USER_MODEL = null;
var ORDER_MODEL = null;
var DISCOUNT_MODEL = null;

var $Local = container.getType('$Local');


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
            return ((x.firstName.toLowerCase().indexOf(filter) == 0) || (x.lastName.toLowerCase().indexOf(filter) == 0)
            || (x.city.toLowerCase().indexOf(filter) == 0));
        });
        return (asEnumerable) ? result : result.ToArray();
    };

    container.registerType('$UserRepository', repo);
}


//-- order repository ----------------------------------------------------------------------------------------------
function orderRepository() {

    function generatePrice() {
        return getRandomInt(ORDER_MIN_PRICE, ORDER_MAX_PRICE);
    }

    var generatePaymentFields = function () {
        return [{key: 'cardNumber', value: 'xxxx-xxxx-xxxx-1234'}, {key: 'cardCvv', value: 'xx1'},
            {key: 'cardExpirationDate', value: faker.date.recent(365).toLocaleDateString()}];
    };

    var generateResponseFields = function () {
        return [{key: 'transactionId', 'value': random.id(ORDER_TRANSACTION_ID_LENGTH)}];
    };

    var generateOrderItems = function () {
        var total = 0;
        var max = getRandomInt(1, 4);
        var items = [];

        for (i = 0; i < max; i++) {
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
                id: faker.random.number({min: 100, max: ORDER_ID_MAX}),
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
                var result = ((firstName.indexOf(filter) === 0) || (lastName.indexOf(filter) === 0) || (id.indexOf(filter) === 0));
                if (result) {
                    return true;
                } else {
                    var words = filter.split(' ');
                    if (words.length < 2) {
                        return false;
                    }
                    return (firstName.indexOf(words[0]) === 0 && lastName.indexOf(words[1]) === 0)
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
            return (asEnumerable) ? result : result.ToArray();
        } else {
            result = _filter(List, filter);
            return (asEnumerable) ? result : result.ToArray();
        }
    };

    container.registerType('$OrderRepository', repo);
}

//-- user order repository -----------------------------------------------------------------------------------------

function userOrderRepository() {
    function UserOrder() {
        this.get = function (params, resource, query, callback) {
            var orderRepo = container.getType('$OrderRepository');
            var model = orderRepo.query({userId: params.id});
            var repo = new GenericRepository(model);
            repo.get({}, resource, query, callback);
        };
    }

    container.registerType('$UserOrderRepository', new UserOrder());
}

//-- report repository ---------------------------------------------------------------------------------------------

function reportRepository() {
    var orderRepo = container.getType('$OrderRepository');

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

    container.registerType('$ReportRepository', new Report());
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
                callback({statusCode: 401, message: 'Invalid Login'}, null);
            }
        };

    }

    container.registerType('$ProfileProvider', new $ProfileProvider());

}

// --------- user reset password -----------------------------------------------------------------------------------
function userResetPasswordRepository() {

    function $UserResetPassword() {
        this.post = function (params, resource, callback) {
            callback(null, params);
        }
    }

    container.registerType('$UserResetPasswordProvider', new $UserResetPassword());
}

// --------- user alert -----------------------------------------------------------------------------------
function userAlertRepository() {

    function $UserAlert() {
        this.post = function (params, resource, callback) {
            callback(null, params);
        }
    }

    container.registerType('$UserAlertProvider', new $UserAlert());
}

//-- order status repository ---------------------------------------------------------------------------------------

function orderStatusRepository() {
    var orderRepo = container.getType('$OrderRepository');

    function OrderStatus() {
        this.post = function (params, resoure, callback) {
            var order = orderRepo.get({id: params.id});
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

    container.registerType('$OrderStatusProvider', new OrderStatus());
}

//-- order alert repository ----------------------------------------------------------------------------------------

function orderAlertRepository() {
    var orderRepo = container.getType('$OrderRepository');

    function OrderAlert() {
        this.post = function (params, resoure, callback) {
            var order = orderRepo.get({id: params.id});
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

    container.registerType('$OrderAlertProvider', new OrderAlert());
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
            return x.code.toLowerCase() == code.toLowerCase()
        }).FirstOrDefault();
        callback(null, promo);
    };
    //handle onChange for persistence
    repo.onChange = function (model) {
        $Local.set(DISCOUNT_KEY, model);
    };

    container.registerType('$DiscountRepository', repo);

}

//-- discount validate repository ----------------------------------------------------------------------------------

function discountValidateRepository() {
    var discountRepo = container.getType('$DiscountRepository');

    function DiscountValidate() {
        this.get = function (params, resoure, query, callback) {
            var List = discountRepo.Enumerable();
            var code = params.code.toLowerCase();
            var exists = List.Where(function (x) {
                return x.code.toLowerCase() === code;
            });

            if (exists) callback({message: 'duplicate code'}, null);
            else callback(null, {});
        };
    }

    container.registerType('$DiscountValidateProvider', new DiscountValidate());
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

 
