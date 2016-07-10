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
        global.orderDetailBinding = mod.exports;
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

    _elliptical2.default.binding('order-detail', function (node) {
        let _handleDelete = (() => {
            var _ref = _asyncToGenerator(function* () {
                var id = deleteItem[0].dataset.id;
                var notify = new Notify();
                var message;
                try {
                    yield Order.deleteAsync({ id });
                    message = "Order has been deleted";
                    _addDisabledClass();
                } catch (err) {
                    message = "Error: Error deleting order";
                }
                notify.show(message);
            });

            return function _handleDelete() {
                return _ref.apply(this, arguments);
            };
        })();

        let onStatusChange = (() => {
            var _ref2 = _asyncToGenerator(function* (event, data) {
                var id = navList[0].dataset.id;
                var status = data.id;
                var orderStatus = $node.find('[order-status]');
                orderStatus.attr('class', '').addClass(status).text(status);

                var order = yield Order.getAsync({ id });
                yield Order.putAsync(order);
            });

            return function onStatusChange(_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        })();

        var Order = _container2.default.getType('Order');
        var ConfirmDialog = _container2.default.getType('ConfirmDialog');
        var Notify = _container2.default.getType('Notify');
        var $node = $(node);
        var navList = $node.find('nav-list');
        var deleteItem = $node.find('[action="delete"]');
        var editItem = $node.find('[action="edit"]');
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event($(document), 'md.menu.url.404', onUrl404);
        dom.event(this.click, '[action="delete"]:not(.disabled)', onDelete);
        dom.event($(document), 'md.radio.change', onStatusChange);

        function onUrl404() {}

        function onDelete(event) {
            var dialog = new ConfirmDialog();
            dialog.setContent('Confirm Delete', 'Are you sure you wish to delete this order?');
            dialog.show(function (confirmed) {
                if (confirmed) _handleDelete();
            });
        }

        function _addDisabledClass() {
            deleteItem.addClass('disabled');
            editItem.addClass('disabled');
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL29yZGVyRGV0YWlsQmluZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSx5QkFBVyxPQUFYLENBQW1CLGNBQW5CLEVBQW1DLFVBQVUsSUFBVixFQUFnQjtBQUFBO0FBQUEseUNBMEIvQyxhQUErQjtBQUMzQixvQkFBSSxLQUFLLFdBQVcsQ0FBWCxFQUFjLE9BQWQsQ0FBc0IsRUFBL0I7QUFDQSxvQkFBSSxTQUFTLElBQUksTUFBSixFQUFiO0FBQ0Esb0JBQUksT0FBSjtBQUNBLG9CQUFJO0FBQ0EsMEJBQU0sTUFBTSxXQUFOLENBQWtCLEVBQUMsRUFBRCxFQUFsQixDQUFOO0FBQ0EsOEJBQVUsd0JBQVY7QUFDQTtBQUNILGlCQUpELENBSUUsT0FBTyxHQUFQLEVBQVk7QUFDViw4QkFBVSw2QkFBVjtBQUNIO0FBQ0QsdUJBQU8sSUFBUCxDQUFZLE9BQVo7QUFDSCxhQXRDOEM7O0FBQUEsNEJBMEJoQyxhQTFCZ0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwwQ0E2Qy9DLFdBQThCLEtBQTlCLEVBQXFDLElBQXJDLEVBQTJDO0FBQ3ZDLG9CQUFJLEtBQUssUUFBUSxDQUFSLEVBQVcsT0FBWCxDQUFtQixFQUE1QjtBQUNBLG9CQUFJLFNBQVMsS0FBSyxFQUFsQjtBQUNBLG9CQUFJLGNBQWMsTUFBTSxJQUFOLENBQVcsZ0JBQVgsQ0FBbEI7QUFDQSw0QkFBWSxJQUFaLENBQWlCLE9BQWpCLEVBQTBCLEVBQTFCLEVBQ0ssUUFETCxDQUNjLE1BRGQsRUFFSyxJQUZMLENBRVUsTUFGVjs7QUFJQSxvQkFBSSxRQUFRLE1BQU0sTUFBTSxRQUFOLENBQWUsRUFBQyxFQUFELEVBQWYsQ0FBbEI7QUFDQSxzQkFBTSxNQUFNLFFBQU4sQ0FBZSxLQUFmLENBQU47QUFDSCxhQXZEOEM7O0FBQUEsNEJBNkNoQyxjQTdDZ0M7QUFBQTtBQUFBO0FBQUE7O0FBQy9DLFlBQUksUUFBUSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7QUFDQSxZQUFJLGdCQUFnQixvQkFBVSxPQUFWLENBQWtCLGVBQWxCLENBQXBCO0FBQ0EsWUFBSSxTQUFTLG9CQUFVLE9BQVYsQ0FBa0IsUUFBbEIsQ0FBYjtBQUNBLFlBQUksUUFBUSxFQUFFLElBQUYsQ0FBWjtBQUNBLFlBQUksVUFBVSxNQUFNLElBQU4sQ0FBVyxVQUFYLENBQWQ7QUFDQSxZQUFJLGFBQWEsTUFBTSxJQUFOLENBQVcsbUJBQVgsQ0FBakI7QUFDQSxZQUFJLFdBQVcsTUFBTSxJQUFOLENBQVcsaUJBQVgsQ0FBZjtBQUNBLFlBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7QUFDQSxZQUFJLE1BQU0sSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixJQUFuQixDQUFWO0FBQ0EsWUFBSSxLQUFKLENBQVUsRUFBRSxRQUFGLENBQVYsRUFBdUIsaUJBQXZCLEVBQTBDLFFBQTFDO0FBQ0EsWUFBSSxLQUFKLENBQVUsS0FBSyxLQUFmLEVBQXNCLGtDQUF0QixFQUEwRCxRQUExRDtBQUNBLFlBQUksS0FBSixDQUFVLEVBQUUsUUFBRixDQUFWLEVBQXVCLGlCQUF2QixFQUEwQyxjQUExQzs7QUFFQSxpQkFBUyxRQUFULEdBQW9CLENBRW5COztBQUVELGlCQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDckIsZ0JBQUksU0FBUyxJQUFJLGFBQUosRUFBYjtBQUNBLG1CQUFPLFVBQVAsQ0FBa0IsZ0JBQWxCLEVBQW9DLDZDQUFwQztBQUNBLG1CQUFPLElBQVAsQ0FBWSxVQUFVLFNBQVYsRUFBcUI7QUFDN0Isb0JBQUksU0FBSixFQUFlO0FBQ2xCLGFBRkQ7QUFHSDs7QUFnQkQsaUJBQVMsaUJBQVQsR0FBNkI7QUFDekIsdUJBQVcsUUFBWCxDQUFvQixVQUFwQjtBQUNBLHFCQUFTLFFBQVQsQ0FBa0IsVUFBbEI7QUFDSDs7QUFjRCxhQUFLLE9BQUwsR0FBZSxNQUFLO0FBQ2hCLGdCQUFJLE1BQUo7QUFDSCxTQUZEO0FBS0gsS0E5REQiLCJmaWxlIjoiYmluZGluZ3Mvb3JkZXJEZXRhaWxCaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIG9yZGVyIGRldGFpbCB2aWV3IGJpbmRpbmdcbmltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5lbGxpcHRpY2FsLmJpbmRpbmcoJ29yZGVyLWRldGFpbCcsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIE9yZGVyID0gY29udGFpbmVyLmdldFR5cGUoJ09yZGVyJyk7XG4gICAgdmFyIENvbmZpcm1EaWFsb2cgPSBjb250YWluZXIuZ2V0VHlwZSgnQ29uZmlybURpYWxvZycpO1xuICAgIHZhciBOb3RpZnkgPSBjb250YWluZXIuZ2V0VHlwZSgnTm90aWZ5Jyk7XG4gICAgdmFyICRub2RlID0gJChub2RlKTtcbiAgICB2YXIgbmF2TGlzdCA9ICRub2RlLmZpbmQoJ25hdi1saXN0Jyk7XG4gICAgdmFyIGRlbGV0ZUl0ZW0gPSAkbm9kZS5maW5kKCdbYWN0aW9uPVwiZGVsZXRlXCJdJyk7XG4gICAgdmFyIGVkaXRJdGVtID0gJG5vZGUuZmluZCgnW2FjdGlvbj1cImVkaXRcIl0nKTtcbiAgICB2YXIgRG9tRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRG9tRXZlbnQnKTtcbiAgICB2YXIgZG9tID0gbmV3IERvbUV2ZW50KG5vZGUsIHRoaXMpO1xuICAgIGRvbS5ldmVudCgkKGRvY3VtZW50KSwgJ21kLm1lbnUudXJsLjQwNCcsIG9uVXJsNDA0KTtcbiAgICBkb20uZXZlbnQodGhpcy5jbGljaywgJ1thY3Rpb249XCJkZWxldGVcIl06bm90KC5kaXNhYmxlZCknLCBvbkRlbGV0ZSk7XG4gICAgZG9tLmV2ZW50KCQoZG9jdW1lbnQpLCAnbWQucmFkaW8uY2hhbmdlJywgb25TdGF0dXNDaGFuZ2UpO1xuXG4gICAgZnVuY3Rpb24gb25Vcmw0MDQoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRlbGV0ZShldmVudCkge1xuICAgICAgICB2YXIgZGlhbG9nID0gbmV3IENvbmZpcm1EaWFsb2coKTtcbiAgICAgICAgZGlhbG9nLnNldENvbnRlbnQoJ0NvbmZpcm0gRGVsZXRlJywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyBvcmRlcj8nKTtcbiAgICAgICAgZGlhbG9nLnNob3coZnVuY3Rpb24gKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkgX2hhbmRsZURlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBfaGFuZGxlRGVsZXRlKCkge1xuICAgICAgICB2YXIgaWQgPSBkZWxldGVJdGVtWzBdLmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBub3RpZnkgPSBuZXcgTm90aWZ5KCk7XG4gICAgICAgIHZhciBtZXNzYWdlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgT3JkZXIuZGVsZXRlQXN5bmMoe2lkfSk7XG4gICAgICAgICAgICBtZXNzYWdlID0gXCJPcmRlciBoYXMgYmVlbiBkZWxldGVkXCI7XG4gICAgICAgICAgICBfYWRkRGlzYWJsZWRDbGFzcygpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVycm9yOiBFcnJvciBkZWxldGluZyBvcmRlclwiO1xuICAgICAgICB9XG4gICAgICAgIG5vdGlmeS5zaG93KG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGREaXNhYmxlZENsYXNzKCkge1xuICAgICAgICBkZWxldGVJdGVtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICBlZGl0SXRlbS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvblN0YXR1c0NoYW5nZShldmVudCwgZGF0YSkge1xuICAgICAgICB2YXIgaWQgPSBuYXZMaXN0WzBdLmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBzdGF0dXMgPSBkYXRhLmlkO1xuICAgICAgICB2YXIgb3JkZXJTdGF0dXMgPSAkbm9kZS5maW5kKCdbb3JkZXItc3RhdHVzXScpO1xuICAgICAgICBvcmRlclN0YXR1cy5hdHRyKCdjbGFzcycsICcnKVxuICAgICAgICAgICAgLmFkZENsYXNzKHN0YXR1cylcbiAgICAgICAgICAgIC50ZXh0KHN0YXR1cyk7XG5cbiAgICAgICAgdmFyIG9yZGVyID0gYXdhaXQgT3JkZXIuZ2V0QXN5bmMoe2lkfSk7XG4gICAgICAgIGF3YWl0IE9yZGVyLnB1dEFzeW5jKG9yZGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSAoKT0+IHtcbiAgICAgICAgZG9tLnVuYmluZCgpO1xuICAgIH07XG5cblxufSk7XG5cblxuICAiXX0=