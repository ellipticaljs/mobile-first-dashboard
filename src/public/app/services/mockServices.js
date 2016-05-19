
elliptical.module = (function (app) {
    var Service = elliptical.Service;
    var container=app.container;

    var Order = Service.extend({
        "@resource": 'Order'
    }, {});

    var User = Service.extend({
        "@resource": 'User'
    }, {});

    var UserOrder = Service.extend({
        "@resource": 'UserOrder'
    }, {});

    var UserResetPassword = Service.extend({
        "@resource": 'UserResetPassword'
    }, {});

    var UserAlert = Service.extend({
        "@resource": 'UserAlert'
    }, {});

    var Report = Service.extend({
        "@resource": 'Report'
    }, {});

    var OrderStatus = Service.extend({
        "@resource": 'OrderStatus'
    }, {});

    var OrderAlert = Service.extend({
        "@resource": 'OrderAlert'
    }, {});

    var Discount = Service.extend({
        "@resource": 'Discount'
    }, {});

    var DiscountValidate = Service.extend({
        "@resource": 'DiscountValidate'
    }, {});


    container.mapType('User',User,'$UserRepository');
    container.mapType('Order',Order,'$OrderRepository');
    container.mapType('UserOrder',UserOrder,'$UserOrderRepository');
    container.mapType('Report',Report,'$ReportRepository');
    container.mapType('UserResetPassword',UserResetPassword,'$UserResetPasswordProvider');
    container.mapType('UserAlert',UserAlert,'$UserAlertProvider');
    container.mapType('OrderStatus',OrderStatus,'$OrderStatusProvider');
    container.mapType('OrderAlert',OrderAlert,'$OrderAlertProvider');
    container.mapType('Discount',Discount,'$DiscountRepository');
    container.mapType('DiscountValidate',DiscountValidate,'$DiscountValidateProvider');

    return app;
})(elliptical.module);
















