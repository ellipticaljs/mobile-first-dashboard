import elliptical from '../references/elliptical';
import container from '../dependencies/container';

class Order extends elliptical.Service{}
class User extends elliptical.Service {}
class UserOrder extends elliptical.Service {}
class UserResetPassword extends elliptical.Service {}
class UserAlert extends elliptical.Service {}
class Report extends elliptical.Service{}
class OrderStatus extends elliptical.Service{}
class OrderAlert extends elliptical.Service{}
class Discount extends elliptical.Service{}
class DiscountValidate extends elliptical.Service{}


container.mapType('User', User, '$UserRepository');
container.mapType('Order', Order, '$OrderRepository');
container.mapType('UserOrder', UserOrder, '$UserOrderRepository');
container.mapType('Report', Report, '$ReportRepository');
container.mapType('UserResetPassword', UserResetPassword, '$UserResetPasswordProvider');
container.mapType('UserAlert', UserAlert, '$UserAlertProvider');
container.mapType('OrderStatus', OrderStatus, '$OrderStatusProvider');
container.mapType('OrderAlert', OrderAlert, '$OrderAlertProvider');
container.mapType('Discount', Discount, '$DiscountRepository');
container.mapType('DiscountValidate', DiscountValidate, '$DiscountValidateProvider');

   















