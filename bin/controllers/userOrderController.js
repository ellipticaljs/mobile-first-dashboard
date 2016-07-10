(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical', '../dependencies/container', '../references/keys', '../modules/ui'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'), require('../dependencies/container'), require('../references/keys'), require('../modules/ui'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container, global.keys, global.ui);
        global.userOrderController = mod.exports;
    }
})(this, function (exports, _elliptical, _container, _keys, _ui) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    var _keys2 = _interopRequireDefault(_keys);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            return step("next", value);
                        }, function (err) {
                            return step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var PAGE_SIZE = _keys2.default.GRID_SIZE;
    var User = _container2.default.getType('User');
    var UserOrder = _container2.default.getType('UserOrder');

    class Controller extends _elliptical2.default.Controller {
        List(req, res, next) {
            return _asyncToGenerator(function* () {
                let id = req.params.userid;
                let page = req.params.page;
                let userOrder = new UserOrder();
                let baseUrl = '/UserOrder/List/' + id;
                let rawUrl = req.url;
                let pageSize = PAGE_SIZE;
                _ui.Progress.start();
                try {
                    _ui.Morph.toggle();
                    let userId = id;
                    let user = yield User.getAsync({ id });
                    let orders = yield userOrder.paginate({ baseUrl, rawUrl, page, pageSize }).orderBy(req.query.$orderBy).orderByDesc(req.query.$orderByDesc).getAsync({ id });
                    let pagination = orders.pagination;
                    let count = pagination.count;
                    let hide = count > 0 ? '' : 'hide-important';
                    let context = { user, userId, orders, pagination, count, hide };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXJPcmRlckNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsUUFBSSxZQUFZLGVBQUssU0FBckI7QUFDQSxRQUFJLE9BQU8sb0JBQVUsT0FBVixDQUFrQixNQUFsQixDQUFYO0FBQ0EsUUFBSSxZQUFZLG9CQUFVLE9BQVYsQ0FBa0IsV0FBbEIsQ0FBaEI7O0FBRWUsVUFBTSxVQUFOLFNBQXlCLHFCQUFXLFVBQXBDLENBQStDO0FBQ3BELFlBQU4sQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCO0FBQUE7QUFDdkIsb0JBQUksS0FBSyxJQUFJLE1BQUosQ0FBVyxNQUFwQjtBQUNBLG9CQUFJLE9BQU8sSUFBSSxNQUFKLENBQVcsSUFBdEI7QUFDQSxvQkFBSSxZQUFZLElBQUksU0FBSixFQUFoQjtBQUNBLG9CQUFJLFVBQVUscUJBQXFCLEVBQW5DO0FBQ0Esb0JBQUksU0FBUyxJQUFJLEdBQWpCO0FBQ0Esb0JBQUksV0FBVyxTQUFmO0FBQ0EsNkJBQVMsS0FBVDtBQUNBLG9CQUFJO0FBQ0EsOEJBQU0sTUFBTjtBQUNBLHdCQUFJLFNBQVMsRUFBYjtBQUNBLHdCQUFJLE9BQU8sTUFBTSxLQUFLLFFBQUwsQ0FBYyxFQUFDLEVBQUQsRUFBZCxDQUFqQjtBQUNBLHdCQUFJLFNBQVMsTUFBTSxVQUFVLFFBQVYsQ0FBbUIsRUFBQyxPQUFELEVBQVUsTUFBVixFQUFrQixJQUFsQixFQUF3QixRQUF4QixFQUFuQixFQUNkLE9BRGMsQ0FDTixJQUFJLEtBQUosQ0FBVSxRQURKLEVBRWQsV0FGYyxDQUVGLElBQUksS0FBSixDQUFVLFlBRlIsRUFHZCxRQUhjLENBR0wsRUFBQyxFQUFELEVBSEssQ0FBbkI7QUFJQSx3QkFBSSxhQUFhLE9BQU8sVUFBeEI7QUFDQSx3QkFBSSxRQUFRLFdBQVcsS0FBdkI7QUFDQSx3QkFBSSxPQUFRLFFBQVEsQ0FBVCxHQUFjLEVBQWQsR0FBbUIsZ0JBQTlCO0FBQ0Esd0JBQUksVUFBVSxFQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsTUFBZixFQUF1QixVQUF2QixFQUFtQyxLQUFuQyxFQUEwQyxJQUExQyxFQUFkO0FBQ0Esd0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSCxpQkFiRCxDQWFFLE9BQU8sR0FBUCxFQUFZO0FBQ1YseUJBQUssR0FBTDtBQUNIO0FBdkJzQjtBQXdCMUI7QUF6QnlEO3NCQUF6QyxVIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3VzZXJPcmRlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcbmltcG9ydCBrZXlzIGZyb20gJy4uL3JlZmVyZW5jZXMva2V5cyc7XG5pbXBvcnQge1Byb2dyZXNzLCBNb3JwaCwgTGFiZWx9IGZyb20gJy4uL21vZHVsZXMvdWknO1xuXG52YXIgUEFHRV9TSVpFID0ga2V5cy5HUklEX1NJWkU7XG52YXIgVXNlciA9IGNvbnRhaW5lci5nZXRUeXBlKCdVc2VyJyk7XG52YXIgVXNlck9yZGVyID0gY29udGFpbmVyLmdldFR5cGUoJ1VzZXJPcmRlcicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgZWxsaXB0aWNhbC5Db250cm9sbGVyIHtcbiAgICBhc3luYyBMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMudXNlcmlkO1xuICAgICAgICBsZXQgcGFnZSA9IHJlcS5wYXJhbXMucGFnZTtcbiAgICAgICAgbGV0IHVzZXJPcmRlciA9IG5ldyBVc2VyT3JkZXIoKTtcbiAgICAgICAgbGV0IGJhc2VVcmwgPSAnL1VzZXJPcmRlci9MaXN0LycgKyBpZDtcbiAgICAgICAgbGV0IHJhd1VybCA9IHJlcS51cmw7XG4gICAgICAgIGxldCBwYWdlU2l6ZSA9IFBBR0VfU0laRTtcbiAgICAgICAgUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIE1vcnBoLnRvZ2dsZSgpO1xuICAgICAgICAgICAgbGV0IHVzZXJJZCA9IGlkO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmdldEFzeW5jKHtpZH0pO1xuICAgICAgICAgICAgbGV0IG9yZGVycyA9IGF3YWl0IHVzZXJPcmRlci5wYWdpbmF0ZSh7YmFzZVVybCwgcmF3VXJsLCBwYWdlLCBwYWdlU2l6ZX0pXG4gICAgICAgICAgICAgICAgLm9yZGVyQnkocmVxLnF1ZXJ5LiRvcmRlckJ5KVxuICAgICAgICAgICAgICAgIC5vcmRlckJ5RGVzYyhyZXEucXVlcnkuJG9yZGVyQnlEZXNjKVxuICAgICAgICAgICAgICAgIC5nZXRBc3luYyh7aWR9KTtcbiAgICAgICAgICAgIGxldCBwYWdpbmF0aW9uID0gb3JkZXJzLnBhZ2luYXRpb247XG4gICAgICAgICAgICBsZXQgY291bnQgPSBwYWdpbmF0aW9uLmNvdW50O1xuICAgICAgICAgICAgbGV0IGhpZGUgPSAoY291bnQgPiAwKSA/ICcnIDogJ2hpZGUtaW1wb3J0YW50JztcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0ge3VzZXIsIHVzZXJJZCwgb3JkZXJzLCBwYWdpbmF0aW9uLCBjb3VudCwgaGlkZX07XG4gICAgICAgICAgICByZXMucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgXG5cbiAgICBcblxuICAiXX0=