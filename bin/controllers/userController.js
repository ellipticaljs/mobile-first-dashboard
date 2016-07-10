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
        global.userController = mod.exports;
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

    var PAGE_SIZE = _keys2.default.PAGE_SIZE;
    var SERVER_KEY = _keys2.default.SERVER_KEY;
    var MAP_KEY = _keys2.default.MAP_KEY;

    var User = _container2.default.getType('User');
    var GeoService = _container2.default.getType('GeoService');

    class Controller extends _elliptical2.default.Controller {
        List(req, res, next) {
            return _asyncToGenerator(function* () {
                let label = "users";
                let user = new User();
                let page = req.params.id;
                let baseUrl = '/User/List';
                let rawUrl = req.url;
                let pageSize = PAGE_SIZE;
                label += _ui.Label.get(req.query);
                _ui.Morph.reset();
                _ui.Progress.start();
                try {
                    let result = yield user.paginate({ baseUrl, rawUrl, page, pageSize }).filter(req.query).getAsync();
                    let users = result.data;
                    let pagination = result.pagination;
                    let count = pagination.count;
                    let context = { users, pagination, count, label };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Detail(req, res, next) {
            return _asyncToGenerator(function* () {
                let id = req.params.id;
                _ui.Morph.toggle();
                _ui.Progress.start();
                try {
                    let user = yield User.getAsync({ id });
                    let activeHide = user.active ? '' : 'hide';
                    let blockHide = 'hide';
                    let context = { user, activeHide, blockHide };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Password(req, res, next) {
            return _asyncToGenerator(function* () {
                let id = req.params.id;
                _ui.Morph.toggle();
                _ui.Progress.start();
                try {
                    let user = yield User.getAsync({ id });
                    let context = { user };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Notify(req, res, next) {
            return _asyncToGenerator(function* () {
                let id = req.params.id;
                _ui.Morph.toggle();
                _ui.Progress.start();
                try {
                    let user = yield User.getAsync({ id });
                    let context = { user };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Location(req, res, next) {
            return _asyncToGenerator(function* () {
                req.query.id = req.params.id;
                let address = _helper2.default.getAddress(req.query.street, req.query.city, req.query.state, req.query.zipCode);
                let key = SERVER_KEY;
                _ui.Morph.toggle();
                _ui.Progress.start();
                try {
                    let geoResult = yield GeoService.getAsync({ address, key });
                    let user = req.query;
                    let geo = geoResult.results[0].geometry.location;
                    geo.key = MAP_KEY;
                    let context = { user, geo };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            })();
        }

        Create(req, res, next) {
            _ui.Morph.toggle();
            let context = { user: {} };
            res.render(context);
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXJDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsUUFBSSxZQUFZLGVBQUssU0FBckI7QUFDQSxRQUFJLGFBQWEsZUFBSyxVQUF0QjtBQUNBLFFBQUksVUFBVSxlQUFLLE9BQW5COztBQUVBLFFBQUksT0FBTyxvQkFBVSxPQUFWLENBQWtCLE1BQWxCLENBQVg7QUFDQSxRQUFJLGFBQWEsb0JBQVUsT0FBVixDQUFrQixZQUFsQixDQUFqQjs7QUFFZSxVQUFNLFVBQU4sU0FBeUIscUJBQVcsVUFBcEMsQ0FBK0M7QUFDcEQsWUFBTixDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkI7QUFBQTtBQUN2QixvQkFBSSxRQUFRLE9BQVo7QUFDQSxvQkFBSSxPQUFPLElBQUksSUFBSixFQUFYO0FBQ0Esb0JBQUksT0FBTyxJQUFJLE1BQUosQ0FBVyxFQUF0QjtBQUNBLG9CQUFJLFVBQVUsWUFBZDtBQUNBLG9CQUFJLFNBQVMsSUFBSSxHQUFqQjtBQUNBLG9CQUFJLFdBQVcsU0FBZjtBQUNBLHlCQUFTLFVBQU0sR0FBTixDQUFVLElBQUksS0FBZCxDQUFUO0FBQ0EsMEJBQU0sS0FBTjtBQUNBLDZCQUFTLEtBQVQ7QUFDQSxvQkFBSTtBQUNBLHdCQUFJLFNBQVMsTUFBTSxLQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBQWQsRUFDZCxNQURjLENBQ1AsSUFBSSxLQURHLEVBRWQsUUFGYyxFQUFuQjtBQUdBLHdCQUFJLFFBQVEsT0FBTyxJQUFuQjtBQUNBLHdCQUFJLGFBQWEsT0FBTyxVQUF4QjtBQUNBLHdCQUFJLFFBQVEsV0FBVyxLQUF2QjtBQUNBLHdCQUFJLFVBQVUsRUFBQyxLQUFELEVBQVEsVUFBUixFQUFvQixLQUFw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LEdBQVosRUFBaUIsSUFBakIsRUFBdUI7QUFDbkIsc0JBQU0sTUFBTjtBQUNBLGdCQUFJLFVBQVUsRUFBQyxNQUFNLEVBQVAsRUFBZDtBQUNBLGdCQUFJLE1BQUosQ0FBVyxPQUFYO0FBQ0g7QUF4RnlEO3NCQUF6QyxVIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3VzZXJDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5pbXBvcnQga2V5cyBmcm9tICcuLi9yZWZlcmVuY2VzL2tleXMnO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9tb2R1bGVzL2hlbHBlcic7XG5pbXBvcnQge1Byb2dyZXNzLCBNb3JwaCwgTGFiZWx9IGZyb20gJy4uL21vZHVsZXMvdWknO1xuXG52YXIgUEFHRV9TSVpFID0ga2V5cy5QQUdFX1NJWkU7XG52YXIgU0VSVkVSX0tFWSA9IGtleXMuU0VSVkVSX0tFWTtcbnZhciBNQVBfS0VZID0ga2V5cy5NQVBfS0VZO1xuXG52YXIgVXNlciA9IGNvbnRhaW5lci5nZXRUeXBlKCdVc2VyJyk7XG52YXIgR2VvU2VydmljZSA9IGNvbnRhaW5lci5nZXRUeXBlKCdHZW9TZXJ2aWNlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIgZXh0ZW5kcyBlbGxpcHRpY2FsLkNvbnRyb2xsZXIge1xuICAgIGFzeW5jIExpc3QocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbGV0IGxhYmVsID0gXCJ1c2Vyc1wiO1xuICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIGxldCBwYWdlID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgbGV0IGJhc2VVcmwgPSAnL1VzZXIvTGlzdCc7XG4gICAgICAgIGxldCByYXdVcmwgPSByZXEudXJsO1xuICAgICAgICBsZXQgcGFnZVNpemUgPSBQQUdFX1NJWkU7XG4gICAgICAgIGxhYmVsICs9IExhYmVsLmdldChyZXEucXVlcnkpO1xuICAgICAgICBNb3JwaC5yZXNldCgpO1xuICAgICAgICBQcm9ncmVzcy5zdGFydCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHVzZXIucGFnaW5hdGUoe2Jhc2VVcmwsIHJhd1VybCwgcGFnZSwgcGFnZVNpemV9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIocmVxLnF1ZXJ5KVxuICAgICAgICAgICAgICAgIC5nZXRBc3luYygpO1xuICAgICAgICAgICAgbGV0IHVzZXJzID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICBsZXQgcGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdpbmF0aW9uO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gcGFnaW5hdGlvbi5jb3VudDtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0ge3VzZXJzLCBwYWdpbmF0aW9uLCBjb3VudCwgbGFiZWx9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBEZXRhaWwocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbGV0IGlkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgTW9ycGgudG9nZ2xlKCk7XG4gICAgICAgIFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZ2V0QXN5bmMoe2lkfSk7XG4gICAgICAgICAgICBsZXQgYWN0aXZlSGlkZSA9ICh1c2VyLmFjdGl2ZSkgPyAnJyA6ICdoaWRlJztcbiAgICAgICAgICAgIGxldCBibG9ja0hpZGUgPSAnaGlkZSc7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHt1c2VyLCBhY3RpdmVIaWRlLCBibG9ja0hpZGV9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBQYXNzd29yZChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBsZXQgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gYXdhaXQgVXNlci5nZXRBc3luYyh7aWR9KTtcbiAgICAgICAgICAgIGxldCBjb250ZXh0ID0ge3VzZXJ9O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBOb3RpZnkocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbGV0IGlkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgTW9ycGgudG9nZ2xlKCk7XG4gICAgICAgIFByb2dyZXNzLnN0YXJ0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXNlciA9IGF3YWl0IFVzZXIuZ2V0QXN5bmMoe2lkfSk7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHt1c2VyfTtcbiAgICAgICAgICAgIHJlcy5yZW5kZXIoY29udGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV4dChlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgTG9jYXRpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgcmVxLnF1ZXJ5LmlkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBoZWxwZXIuZ2V0QWRkcmVzcyhyZXEucXVlcnkuc3RyZWV0LCByZXEucXVlcnkuY2l0eSwgcmVxLnF1ZXJ5LnN0YXRlLCByZXEucXVlcnkuemlwQ29kZSk7XG4gICAgICAgIGxldCBrZXkgPSBTRVJWRVJfS0VZO1xuICAgICAgICBNb3JwaC50b2dnbGUoKTtcbiAgICAgICAgUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBnZW9SZXN1bHQgPSBhd2FpdCBHZW9TZXJ2aWNlLmdldEFzeW5jKHthZGRyZXNzLCBrZXl9KTtcbiAgICAgICAgICAgIGxldCB1c2VyID0gcmVxLnF1ZXJ5O1xuICAgICAgICAgICAgbGV0IGdlbyA9IGdlb1Jlc3VsdC5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uO1xuICAgICAgICAgICAgZ2VvLmtleSA9IE1BUF9LRVk7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IHt1c2VyLCBnZW99O1xuICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXh0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBDcmVhdGUocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgTW9ycGgudG9nZ2xlKCk7XG4gICAgICAgIGxldCBjb250ZXh0ID0ge3VzZXI6IHt9fTtcbiAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICB9XG59XG5cbiAgICBcbiAgICAgICAiXX0=