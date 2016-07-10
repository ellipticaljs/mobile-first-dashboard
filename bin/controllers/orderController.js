(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical', '../dependencies/container', '../references/keys', '../modules/helper', '../modules/ui'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'), require('../dependencies/container'), require('../references/keys'), require('../modules/helper'), require('../modules/ui'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container, global.keys, global.helper, global.ui);
        global.orderController = mod.exports;
    }
})(this, function (exports, _elliptical, _container, _keys, _helper, _ui) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    var _keys2 = _interopRequireDefault(_keys);

    var _helper2 = _interopRequireDefault(_helper);

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

    var string = _elliptical2.default.utils.string;
    var SERVER_KEY = _keys2.default.SERVER_KEY;
    var MAP_KEY = _keys2.default.MAP_KEY;
    var PAGE_SIZE = _keys2.default.GRID_SIZE;

    var Order = _container2.default.getType('Order');
    var CurrentOrderStatus = _container2.default.getType('CurrentOrderStatus');
    var User = _container2.default.getType('User');
    var GeoService = _container2.default.getType('GeoService');

    class Controller extends _elliptical2.default.Controller {
        List(req, res, next) {
            return _asyncToGenerator(function* () {
                let label = "orders";
                let order = new Order();
                let page = req.params.id;
                let baseUrl = '/Order/List';
                let rawUrl = req.url;
                let pageSize = PAGE_SIZE;
                label += _ui.Label.get(req.query);
                _ui.Progress.start();
                _ui.Morph.reset();
                try {
                    let result = yield order.paginate({ baseUrl, rawUrl, page, pageSize }).filter(req.query).orderBy(req.query.$orderBy).orderByDesc(req.query.$orderByDesc).getAsync();

                    let orders = result.data;
                    let pagination = result.pagination;
                    let count = pagination.count;
                    let context = { orders, pagination, count, label };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Detail(req, res, next) {
            return _asyncToGenerator(function* () {
                var id = req.params.id;
                _ui.Progress.start();
                _ui.Morph.toggle();
                try {
                    let order = yield Order.getAsync({ id });
                    order.promotion = _helper2.default.promoCodes(order);
                    let user = yield User.getAsync({ id: order.userId });
                    let notesDisplay = _helper2.default.getOrderNotesVisibility(order);
                    let userType = _helper2.default.getUserType(order);
                    let context = { order, notesDisplay, userType, user };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Status(req, res, next) {
            return _asyncToGenerator(function* () {
                var id = req.params.id;
                _ui.Progress.start();
                _ui.Morph.toggle();
                try {
                    let order = yield Order.getAsync({ id });
                    order.selections = yield CurrentOrderStatus.getAsync();
                    let user = {};
                    order.status = string.toTitleCase(order.orderStatus.status);
                    let context = { order, user };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Notify(req, res, next) {
            return _asyncToGenerator(function* () {
                var id = req.params.id;
                _ui.Progress.start();
                _ui.Morph.toggle();
                try {
                    let order = yield Order.getAsync({ id });
                    let context = { order, user: {} };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Location(req, res, next) {
            return _asyncToGenerator(function* () {
                var id = req.params.id;
                var key = SERVER_KEY;
                _ui.Progress.start();
                _ui.Morph.toggle();
                try {
                    let order = yield Order.getAsync({ id });
                    let user = yield User.getAsync({ id: order.userId });
                    let address = _helper2.default.getAddress(order.shippingAddress);
                    let geoResult = yield GeoService.getAsync({ address, key });
                    let geo = geoResult.results[0].geometry.location;
                    geo.key = MAP_KEY;
                    let context = { order, user, geo };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL29yZGVyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFFBQUksU0FBUyxxQkFBVyxLQUFYLENBQWlCLE1BQTlCO0FBQ0EsUUFBSSxhQUFhLGVBQUssVUFBdEI7QUFDQSxRQUFJLFVBQVUsZUFBSyxPQUFuQjtBQUNBLFFBQUksWUFBWSxlQUFLLFNBQXJCOztBQUVBLFFBQUksUUFBUSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7QUFDQSxRQUFJLHFCQUFxQixvQkFBVSxPQUFWLENBQWtCLG9CQUFsQixDQUF6QjtBQUNBLFFBQUksT0FBTyxvQkFBVSxPQUFWLENBQWtCLE1BQWxCLENBQVg7QUFDQSxRQUFJLGFBQWEsb0JBQVUsT0FBVixDQUFrQixZQUFsQixDQUFqQjs7QUFFZSxVQUFNLFVBQU4sU0FBeUIscUJBQVcsVUFBcEMsQ0FBK0M7QUFDcEQsWUFBTixDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkI7QUFBQTtBQUN2QixvQkFBSSxRQUFRLFFBQVo7QUFDQSxvQkFBSSxRQUFRLElBQUksS0FBSixFQUFaO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxFQUF0QjtBQUNBLG9CQUFJLFVBQVUsYUFBZDtBQUNBLG9CQUFJLFNBQVMsSUFBSSxHQUFqQjtBQUNBLG9CQUFJLFdBQVcsU0FBZjtBQUNBLHlCQUFTLFVBQU0sR0FBTixDQUFVLElBQUksS0FBZCxDQUFUO0FBQ0EsNkJBQVMsS0FBVDtBQUNBLDBCQUFNLEtBQU47QUFDQSxvQkFBSTtBQUNBLHdCQUFJLFNBQVMsTUFBTSxNQUFNLFFBQU4sQ0FBZSxFQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBQWYsRUFDZCxNQURjLENBQ1AsSUFBSSxLQURHLEVBRWQsT0FGYyxDQUVO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TjtBQUNBLG9CQUFJO0FBQ0Esd0JBQUksUUFBUSxNQUFNLE1BQU0sUUFBTixDQUFlLEVBQUMsRUFBRCxFQUFmLENBQWxCO0FBQ0Esd0JBQUksT0FBTyxNQUFNLEtBQUssUUFBTCxDQUFjLEVBQUMsSUFBSSxNQUFNLE1BQVgsRUFBZCxDQUFqQjtBQUNBLHdCQUFJLFVBQVUsaUJBQU8sVUFBUCxDQUFrQixNQUFNLGVBQXhCLENBQWQ7QUFDQSx3QkFBSSxZQUFZLE1BQU0sV0FBVyxRQUFYLENBQW9CLEVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBcEIsQ0FBdEI7QUFDQSx3QkFBSSxNQUFNLFVBQVUsT0FBVixDQUFrQixDQUFsQixFQUFxQixRQUFyQixDQUE4QixRQUF4QztBQUNBLHdCQUFJLEdBQUosR0FBVSxPQUFWO0FBQ0Esd0JBQUksVUFBVSxFQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsR0FBZCxFQUFkO0FBQ0Esd0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSCxpQkFURCxDQVNFLE9BQU8sR0FBUCxFQUFZO0FBQ1YseUJBQUssR0FBTDtBQUNIO0FBaEIwQjtBQWlCOUI7QUEzRnlEO3NCQUF6QyxVIiwiZmlsZSI6ImNvbnRyb2xsZXJzL29yZGVyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuaW1wb3J0IGtleXMgZnJvbSAnLi4vcmVmZXJlbmNlcy9rZXlzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vbW9kdWxlcy9oZWxwZXInO1xuaW1wb3J0IHtQcm9ncmVzcywgTW9ycGgsIExhYmVsfSBmcm9tICcuLi9tb2R1bGVzL3VpJztcblxudmFyIHN0cmluZyA9IGVsbGlwdGljYWwudXRpbHMuc3RyaW5nO1xudmFyIFNFUlZFUl9LRVkgPSBrZXlzLlNFUlZFUl9LRVk7XG52YXIgTUFQX0tFWSA9IGtleXMuTUFQX0tFWTtcbnZhciBQQUdFX1NJWkUgPSBrZXlzLkdSSURfU0laRTtcblxudmFyIE9yZGVyID0gY29udGFpbmVyLmdldFR5cGUoJ09yZGVyJyk7XG52YXIgQ3VycmVudE9yZGVyU3RhdHVzID0gY29udGFpbmVyLmdldFR5cGUoJ0N1cnJlbnRPcmRlclN0YXR1cycpO1xudmFyIFVzZXIgPSBjb250YWluZXIuZ2V0VHlwZSgnVXNlcicpO1xudmFyIEdlb1NlcnZpY2UgPSBjb250YWluZXIuZ2V0VHlwZSgnR2VvU2VydmljZScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgZWxsaXB0aWNhbC5Db250cm9sbGVyIHtcbiAgICBhc3luYyBMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFwib3JkZXJzXCI7XG4gICAgICAgIGxldCBvcmRlciA9IG5ldyBPcmRlcigpO1xuICAgICAgICBsZXQgcGFnZSA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgICAgIGxldCBiYXNlVXJsID0gJy9PcmRlci9MaXN0JztcbiAgICAgICAgbGV0IHJhd1VybCA9IHJlcS51cmw7XG4gICAgICAgIGxldCBwYWdlU2l6ZSA9IFBBR0VfU0laRTtcbiAgICAgICAgbGFiZWwgKz0gTGFiZWwuZ2V0KHJlcS5xdWVyeSk7XG4gICAgICAgIFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIE1vcnBoLnJlc2V0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgb3JkZXIucGFnaW5hdGUoe2Jhc2VVcmwsIHJhd1VybCwgcGFnZSwgcGFnZVNpemV9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIocmVxLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIC5vcmRlckJ5KHJlcS5xdWVyeS4kb3JkZXJCeSlcbiAgICAgICAgICAgICAgICAub3JkZXJCeURlc2MocmVxLnF1ZXJ5LiRvcmRlckJ5RGVzYylcbiAgICAgICAgICAgICAgICAuZ2V0QXN5bmMoKTtcblxuICAgICAgICAgICAgbGV0IG9yZGVycyA9IHJlc3VsdC5kYXRhO1xuICAgICAgICAgICAgbGV0IHBhZ2luYXRpb24gPSByZXN1bHQucGFnaW5hdGlvbjtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHBhZ2luYXRpb24uY291bnQ7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHtvcmRlcnMsIHBhZ2luYXRpb24sIGNvdW50LCBsYWJlbH07XG4gICAgICAgICAgICByZXMucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIERldGFpbChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICB2YXIgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBvcmRlciA9IGF3YWl0IE9yZGVyLmdldEFzeW5jKHtpZH0pO1xuICAgICAgICAgICAgb3JkZXIucHJvbW90aW9uID0gaGVscGVyLnByb21vQ29kZXMob3JkZXIpO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmdldEFzeW5jKHtpZDogb3JkZXIudXNlcklkfSk7XG4gICAgICAgICAgICBsZXQgbm90ZXNEaXNwbGF5ID0gaGVscGVyLmdldE9yZGVyTm90ZXNWaXNpYmlsaXR5KG9yZGVyKTtcbiAgICAgICAgICAgIGxldCB1c2VyVHlwZSA9IGhlbHBlci5nZXRVc2VyVHlwZShvcmRlcik7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHtvcmRlciwgbm90ZXNEaXNwbGF5LCB1c2VyVHlwZSwgdXNlcn07XG4gICAgICAgICAgICByZXMucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIFN0YXR1cyhyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICB2YXIgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBvcmRlciA9IGF3YWl0IE9yZGVyLmdldEFzeW5jKHtpZH0pO1xuICAgICAgICAgICAgb3JkZXIuc2VsZWN0aW9ucyA9IGF3YWl0IEN1cnJlbnRPcmRlclN0YXR1cy5nZXRBc3luYygpO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSB7fTtcbiAgICAgICAgICAgIG9yZGVyLnN0YXR1cyA9IHN0cmluZy50b1RpdGxlQ2FzZShvcmRlci5vcmRlclN0YXR1cy5zdGF0dXMpO1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB7b3JkZXIsIHVzZXJ9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIE5vdGlmeShyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICB2YXIgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBvcmRlciA9IGF3YWl0IE9yZGVyLmdldEFzeW5jKHtpZH0pO1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB7b3JkZXIsIHVzZXI6IHt9fTtcbiAgICAgICAgICAgIHJlcy5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgTG9jYXRpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdmFyIGlkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgdmFyIGtleSA9IFNFUlZFUl9LRVk7XG4gICAgICAgIFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIE1vcnBoLnRvZ2dsZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG9yZGVyID0gYXdhaXQgT3JkZXIuZ2V0QXN5bmMoe2lkfSk7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZ2V0QXN5bmMoe2lkOiBvcmRlci51c2VySWR9KTtcbiAgICAgICAgICAgIGxldCBhZGRyZXNzID0gaGVscGVyLmdldEFkZHJlc3Mob3JkZXIuc2hpcHBpbmdBZGRyZXNzKTtcbiAgICAgICAgICAgIGxldCBnZW9SZXN1bHQgPSBhd2FpdCBHZW9TZXJ2aWNlLmdldEFzeW5jKHthZGRyZXNzLCBrZXl9KTtcbiAgICAgICAgICAgIGxldCBnZW8gPSBnZW9SZXN1bHQucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcbiAgICAgICAgICAgIGdlby5rZXkgPSBNQVBfS0VZO1xuICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB7b3JkZXIsIHVzZXIsIGdlb307XG4gICAgICAgICAgICByZXMucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuICAgXG5cbiJdfQ==