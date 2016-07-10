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
        global.promotionController = mod.exports;
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

    var Discount = _container2.default.getType('Discount');

    class Controller extends _elliptical2.default.Controller {
        List(req, res, next) {
            return _asyncToGenerator(function* () {
                let label = "promotions";
                let discount = new Discount();
                let page = req.params.id;
                let baseUrl = '/Promotion/List';
                let rawUrl = req.url;
                let pageSize = PAGE_SIZE;
                _ui.Progress.start();
                try {
                    label += _ui.Label.get(req.query);
                    let result = yield discount.paginate({ baseUrl, rawUrl, page, pageSize }).filter(req.query).orderBy(req.query.$orderBy).orderByDesc(req.query.$orderByDesc).getAsync();

                    _ui.Morph.reset();
                    let promotions = result.data;
                    let pagination = result.pagination;
                    let count = pagination.count;
                    let context = { promotions, pagination, count, label };
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
                try {
                    let discount = yield Discount.getAsync({ id });
                    _ui.Morph.toggle();
                    let context = { promotion: discount };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Create(req, res, next) {
            _ui.Morph.toggle();
            res.render();
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Byb21vdGlvbkNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsUUFBSSxZQUFZLGVBQUssU0FBckI7O0FBRUEsUUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjs7QUFFZSxVQUFNLFVBQU4sU0FBeUIscUJBQVcsVUFBcEMsQ0FBK0M7QUFDcEQsWUFBTixDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkI7QUFBQTtBQUN2QixvQkFBSSxRQUFRLFlBQVo7QUFDQSxvQkFBSSxXQUFXLElBQUksUUFBSixFQUFmO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxFQUF0QjtBQUNBLG9CQUFJLFVBQVUsaUJBQWQ7QUFDQSxvQkFBSSxTQUFTLElBQUksR0FBakI7QUFDQSxvQkFBSSxXQUFXLFNBQWY7QUFDQSw2QkFBUyxLQUFUO0FBQ0Esb0JBQUk7QUFDQSw2QkFBUyxVQUFNLEdBQU4sQ0FBVSxJQUFJLEtBQWQsQ0FBVDtBQUNBLHdCQUFJLFNBQVMsTUFBTSxTQUFTLFFBQVQsQ0FBa0IsRUFBQyxPQUFELEVBQVUsTUFBVixFQUFrQixJQUFsQixFQUF3QixRQUF4QixFQUFsQixFQUNkLE1BRGMsQ0FDUCxJQUFJLEtBREcsRUFFZCxPQUZjLENBRU4sSUFBSSxLQUFKLENBQVUsUUFGSixFQUdkLFdBSGMsQ0FHRixJQUFJLEtBQUosQ0FBVSxZQUhSLEVBSWQsUUFKYyxFQUFuQjs7QUFNQSw4QkFBTSxLQUFOO0FBQ0Esd0JBQUksYUFBYSxPQUFPLElBQXhCO0FBQ0Esd0JBQUksYUFBYSxPQUFPLFVBQXhCO0FBQ0Esd0JBQUksUUFBUSxXQUFXLEtBQXZCO0FBQ0Esd0JBQUksVUFBVSxFQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLEtBQXpCLEVBQWdDLEtBQWhDLEVBQWQ7QUFDQSx3QkFBSSxNQUFKLENBQVcsT0FBWDtBQUNILGlCQWRELENBY0UsT0FBTyxHQUFQLEVBQVk7QUFDVix5QkFBSyxHQUFMO0FBQ0g7QUF4QnNCO0FBeUIxQjs7QUFFSyxjQUFOLENBQWEsR0FBYixFQUFrQixHQUFsQixFQUF1QixJQUF2QixFQUE2QjtBQUFBO0FBQ3pCLG9CQUFJLEtBQUssSUFBSSxNQUFKLENBQVcsRUFBcEI7QUFDQSw2QkFBUyxLQUFUO0FBQ0Esb0JBQUk7QUFDQSx3QkFBSSxXQUFXLE1BQU0sU0FBUyxRQUFULENBQWtCLEVBQUMsRUFBRCxFQUFsQixDQUFyQjtBQUNBLDhCQUFNLE1BQU47QUFDQSx3QkFBSSxVQUFVLEVBQUMsV0FBVyxRQUFaLEVBQWQ7QUFDQSx3QkFBSSxNQUFKLENBQVcsT0FBWDtBQUNILGlCQUxELENBS0UsT0FBTyxHQUFQLEVBQVk7QUFDVix5QkFBSyxHQUFMO0FBQ0g7QUFWd0I7QUFXNUI7O0FBRUQsZUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QjtBQUNuQixzQkFBTSxNQUFOO0FBQ0EsZ0JBQUksTUFBSjtBQUNIO0FBNUN5RDtzQkFBekMsVSIsImZpbGUiOiJjb250cm9sbGVycy9wcm9tb3Rpb25Db250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5pbXBvcnQga2V5cyBmcm9tICcuLi9yZWZlcmVuY2VzL2tleXMnO1xuaW1wb3J0IHtQcm9ncmVzcywgTW9ycGgsIExhYmVsfSBmcm9tICcuLi9tb2R1bGVzL3VpJztcblxuXG52YXIgUEFHRV9TSVpFID0ga2V5cy5HUklEX1NJWkU7XG5cbnZhciBEaXNjb3VudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdEaXNjb3VudCcpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgZWxsaXB0aWNhbC5Db250cm9sbGVyIHtcbiAgICBhc3luYyBMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGxldCBsYWJlbCA9IFwicHJvbW90aW9uc1wiO1xuICAgICAgICBsZXQgZGlzY291bnQgPSBuZXcgRGlzY291bnQoKTtcbiAgICAgICAgbGV0IHBhZ2UgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBsZXQgYmFzZVVybCA9ICcvUHJvbW90aW9uL0xpc3QnO1xuICAgICAgICBsZXQgcmF3VXJsID0gcmVxLnVybDtcbiAgICAgICAgbGV0IHBhZ2VTaXplID0gUEFHRV9TSVpFO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGFiZWwgKz0gTGFiZWwuZ2V0KHJlcS5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZGlzY291bnQucGFnaW5hdGUoe2Jhc2VVcmwsIHJhd1VybCwgcGFnZSwgcGFnZVNpemV9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIocmVxLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIC5vcmRlckJ5KHJlcS5xdWVyeS4kb3JkZXJCeSlcbiAgICAgICAgICAgICAgICAub3JkZXJCeURlc2MocmVxLnF1ZXJ5LiRvcmRlckJ5RGVzYylcbiAgICAgICAgICAgICAgICAuZ2V0QXN5bmMoKTtcblxuICAgICAgICAgICAgTW9ycGgucmVzZXQoKTtcbiAgICAgICAgICAgIGxldCBwcm9tb3Rpb25zID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICBsZXQgcGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdpbmF0aW9uO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gcGFnaW5hdGlvbi5jb3VudDtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0ge3Byb21vdGlvbnMsIHBhZ2luYXRpb24sIGNvdW50LCBsYWJlbH07XG4gICAgICAgICAgICByZXMucmVuZGVyKGNvbnRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIERldGFpbChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICB2YXIgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGRpc2NvdW50ID0gYXdhaXQgRGlzY291bnQuZ2V0QXN5bmMoe2lkfSk7XG4gICAgICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0ge3Byb21vdGlvbjogZGlzY291bnR9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGUocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgTW9ycGgudG9nZ2xlKCk7XG4gICAgICAgIHJlcy5yZW5kZXIoKTtcbiAgICB9XG59XG5cbiAgIFxuICAgIFxuICBcbiJdfQ==