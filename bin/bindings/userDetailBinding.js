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
        global.userDetailBinding = mod.exports;
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

    /// user detail view binding


    _elliptical2.default.binding('user-detail', function (node) {
        var Location = _container2.default.getType('Location');
        var referrer = Location.referrer;
        var User = _container2.default.getType('User');
        var ConfirmDialog = _container2.default.getType('ConfirmDialog');
        var Notify = _container2.default.getType('Notify');
        var $node = $(node);
        var deleteItem = $node.find('[action="delete"]');
        var blockItem = $node.find('[action="block"]');
        var activeItem = $('[active]');
        var blockedItem = $('[blocked]');
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event(this.click, '[action="delete"]:not(.disabled)', onDelete);
        dom.event(this.click, '[action="block"]:not(.disabled)', onBlock);

        function onDelete(event) {
            var dialog = new ConfirmDialog();
            dialog.setContent('Confirm Delete', 'Are you sure you wish to delete this user?');
            dialog.show(function (confirmed) {
                if (confirmed) _handleDelete();
            });
        }

        function onBlock(event) {
            var message = _getBlockMessage();
            var dialog = new ConfirmDialog();
            dialog.setContent(message.title, message.text);
            dialog.show(function (confirmed) {
                if (confirmed) _handleBlockUser();
            });
        }

        function _handleDelete() {
            var id = deleteItem[0].dataset.id;
            User.delete({ id }, (err, data) => {
                var message;
                if (err) {
                    message = 'Error: Error deleting user';
                    Notify.show(message);
                } else {
                    message = 'User has been deleted';
                    Notify.show(message);
                    setTimeout(function () {
                        Location.href = referrer;
                    }, 750);
                }
            });
        }

        function _handleBlockUser() {
            var status = _getBlockStatus();
            _getUser(function (err, user) {
                if (!err) {
                    User.put(user, (err, data) => {
                        var message = err ? status.error : status.success;
                        Notify.show(message);
                        _updateDOM(user.active);
                    });
                } else {
                    Notify.show('Error retieving user');
                }
            });
        }

        function _getUserStatus() {
            return blockItem[0].dataset.active;
        }

        function _getBlockMessage() {
            var message = {};
            var active = _getUserStatus();
            if (active === "true") {
                message.title = "Confirm Block User";
                message.text = "Are you sure you wish to block this user's account?";
            } else {
                message.title = "Confirm Unblock User";
                message.text = "Are you sure you wish to re-enable this user's account?";
            }
            return message;
        }

        function _getBlockStatus() {
            var message = {};
            var active = _getUserStatus();
            if (active === "true") {
                message.success = "The user account has been blocked";
                message.error = "Error: Error blocking user";
            } else {
                message.success = "The user account has been re-enabled";
                message.error = "Error: Error unblocking user";
            }
            return message;
        }

        function _getUser(callback) {
            var active = _getUserStatus();
            active = !(active === 'true');
            var id = deleteItem[0].dataset.id;
            User.get({ id }, (err, data) => {
                data.active = active;
                callback(err, data);
            });
        }

        function _updateDOM(active) {
            if (active) {
                activeItem.removeClass('hide');
                blockedItem.addClass('hide');
            } else {
                activeItem.addClass('hide');
                blockedItem.removeClass('hide');
            }

            blockItem[0].dataset.active = active;
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL3VzZXJEZXRhaWxCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSx5QkFBVyxPQUFYLENBQW1CLGFBQW5CLEVBQWtDLFVBQVUsSUFBVixFQUFnQjtBQUM5QyxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxXQUFXLFNBQVMsUUFBeEI7QUFDQSxZQUFJLE9BQU8sb0JBQVUsT0FBVixDQUFrQixNQUFsQixDQUFYO0FBQ0EsWUFBSSxnQkFBZ0Isb0JBQVUsT0FBVixDQUFrQixlQUFsQixDQUFwQjtBQUNBLFlBQUksU0FBUyxvQkFBVSxPQUFWLENBQWtCLFFBQWxCLENBQWI7QUFDQSxZQUFJLFFBQVEsRUFBRSxJQUFGLENBQVo7QUFDQSxZQUFJLGFBQWEsTUFBTSxJQUFOLENBQVcsbUJBQVgsQ0FBakI7QUFDQSxZQUFJLFlBQVksTUFBTSxJQUFOLENBQVcsa0JBQVgsQ0FBaEI7QUFDQSxZQUFJLGFBQWEsRUFBRSxVQUFGLENBQWpCO0FBQ0EsWUFBSSxjQUFjLEVBQUUsV0FBRixDQUFsQjtBQUNBLFlBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7QUFDQSxZQUFJLE1BQU0sSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixJQUFuQixDQUFWO0FBQ0EsWUFBSSxLQUFKLENBQVUsS0FBSyxLQUFmLEVBQXNCLGtDQUF0QixFQUEwRCxRQUExRDtBQUNBLFlBQUksS0FBSixDQUFVLEtBQUssS0FBZixFQUFzQixpQ0FBdEIsRUFBeUQsT0FBekQ7O0FBR0EsaUJBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUNyQixnQkFBSSxTQUFTLElBQUksYUFBSixFQUFiO0FBQ0EsbUJBQU8sVUFBUCxDQUFrQixnQkFBbEIsRUFBb0MsNENBQXBDO0FBQ0EsbUJBQU8sSUFBUCxDQUFZLFVBQVUsU0FBVixFQUFxQjtBQUM3QixvQkFBSSxT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QVMsVUFBVCxDQUFvQixNQUFwQixFQUE0QjtBQUN4QixnQkFBSSxNQUFKLEVBQVk7QUFDUiwyQkFBVyxXQUFYLENBQXVCLE1BQXZCO0FBQ0EsNEJBQVksUUFBWixDQUFxQixNQUFyQjtBQUNILGFBSEQsTUFHTztBQUNILDJCQUFXLFFBQVgsQ0FBb0IsTUFBcEI7QUFDQSw0QkFBWSxXQUFaLENBQXdCLE1BQXhCO0FBQ0g7O0FBRUQsc0JBQVUsQ0FBVixFQUFhLE9BQWIsQ0FBcUIsTUFBckIsR0FBOEIsTUFBOUI7QUFDSDs7QUFFRCxhQUFLLE9BQUwsR0FBZSxNQUFLO0FBQ2hCLGdCQUFJLE1BQUo7QUFDSCxTQUZEO0FBSUgsS0E5SEQiLCJmaWxlIjoiYmluZGluZ3MvdXNlckRldGFpbEJpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gdXNlciBkZXRhaWwgdmlldyBiaW5kaW5nXG5pbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuZWxsaXB0aWNhbC5iaW5kaW5nKCd1c2VyLWRldGFpbCcsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIExvY2F0aW9uID0gY29udGFpbmVyLmdldFR5cGUoJ0xvY2F0aW9uJyk7XG4gICAgdmFyIHJlZmVycmVyID0gTG9jYXRpb24ucmVmZXJyZXI7XG4gICAgdmFyIFVzZXIgPSBjb250YWluZXIuZ2V0VHlwZSgnVXNlcicpO1xuICAgIHZhciBDb25maXJtRGlhbG9nID0gY29udGFpbmVyLmdldFR5cGUoJ0NvbmZpcm1EaWFsb2cnKTtcbiAgICB2YXIgTm90aWZ5ID0gY29udGFpbmVyLmdldFR5cGUoJ05vdGlmeScpO1xuICAgIHZhciAkbm9kZSA9ICQobm9kZSk7XG4gICAgdmFyIGRlbGV0ZUl0ZW0gPSAkbm9kZS5maW5kKCdbYWN0aW9uPVwiZGVsZXRlXCJdJyk7XG4gICAgdmFyIGJsb2NrSXRlbSA9ICRub2RlLmZpbmQoJ1thY3Rpb249XCJibG9ja1wiXScpO1xuICAgIHZhciBhY3RpdmVJdGVtID0gJCgnW2FjdGl2ZV0nKTtcbiAgICB2YXIgYmxvY2tlZEl0ZW0gPSAkKCdbYmxvY2tlZF0nKTtcbiAgICB2YXIgRG9tRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRG9tRXZlbnQnKTtcbiAgICB2YXIgZG9tID0gbmV3IERvbUV2ZW50KG5vZGUsIHRoaXMpO1xuICAgIGRvbS5ldmVudCh0aGlzLmNsaWNrLCAnW2FjdGlvbj1cImRlbGV0ZVwiXTpub3QoLmRpc2FibGVkKScsIG9uRGVsZXRlKTtcbiAgICBkb20uZXZlbnQodGhpcy5jbGljaywgJ1thY3Rpb249XCJibG9ja1wiXTpub3QoLmRpc2FibGVkKScsIG9uQmxvY2spO1xuXG5cbiAgICBmdW5jdGlvbiBvbkRlbGV0ZShldmVudCkge1xuICAgICAgICB2YXIgZGlhbG9nID0gbmV3IENvbmZpcm1EaWFsb2coKTtcbiAgICAgICAgZGlhbG9nLnNldENvbnRlbnQoJ0NvbmZpcm0gRGVsZXRlJywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyB1c2VyPycpO1xuICAgICAgICBkaWFsb2cuc2hvdyhmdW5jdGlvbiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSBfaGFuZGxlRGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gb25CbG9jayhldmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IF9nZXRCbG9ja01lc3NhZ2UoKTtcbiAgICAgICAgdmFyIGRpYWxvZyA9IG5ldyBDb25maXJtRGlhbG9nKCk7XG4gICAgICAgIGRpYWxvZy5zZXRDb250ZW50KG1lc3NhZ2UudGl0bGUsIG1lc3NhZ2UudGV4dCk7XG4gICAgICAgIGRpYWxvZy5zaG93KGZ1bmN0aW9uIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIF9oYW5kbGVCbG9ja1VzZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBfaGFuZGxlRGVsZXRlKCkge1xuICAgICAgICB2YXIgaWQgPSBkZWxldGVJdGVtWzBdLmRhdGFzZXQuaWQ7XG4gICAgICAgIFVzZXIuZGVsZXRlKHtpZH0sIChlcnIsIGRhdGEpPT4ge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdFcnJvcjogRXJyb3IgZGVsZXRpbmcgdXNlcic7XG4gICAgICAgICAgICAgICAgTm90aWZ5LnNob3cobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnVXNlciBoYXMgYmVlbiBkZWxldGVkJztcbiAgICAgICAgICAgICAgICBOb3RpZnkuc2hvdyhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9jYXRpb24uaHJlZiA9IHJlZmVycmVyXG4gICAgICAgICAgICAgICAgfSwgNzUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2hhbmRsZUJsb2NrVXNlcigpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9IF9nZXRCbG9ja1N0YXR1cygpO1xuICAgICAgICBfZ2V0VXNlcihmdW5jdGlvbiAoZXJyLCB1c2VyKSB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIFVzZXIucHV0KHVzZXIsIChlcnIsIGRhdGEpPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IChlcnIpID8gc3RhdHVzLmVycm9yIDogc3RhdHVzLnN1Y2Nlc3M7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmeS5zaG93KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBfdXBkYXRlRE9NKHVzZXIuYWN0aXZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTm90aWZ5LnNob3coJ0Vycm9yIHJldGlldmluZyB1c2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gX2dldFVzZXJTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiBibG9ja0l0ZW1bMF0uZGF0YXNldC5hY3RpdmU7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBfZ2V0QmxvY2tNZXNzYWdlKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHt9O1xuICAgICAgICB2YXIgYWN0aXZlID0gX2dldFVzZXJTdGF0dXMoKTtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIkNvbmZpcm0gQmxvY2sgVXNlclwiO1xuICAgICAgICAgICAgbWVzc2FnZS50ZXh0ID0gXCJBcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gYmxvY2sgdGhpcyB1c2VyJ3MgYWNjb3VudD9cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UudGl0bGUgPSBcIkNvbmZpcm0gVW5ibG9jayBVc2VyXCI7XG4gICAgICAgICAgICBtZXNzYWdlLnRleHQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byByZS1lbmFibGUgdGhpcyB1c2VyJ3MgYWNjb3VudD9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0QmxvY2tTdGF0dXMoKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0ge307XG4gICAgICAgIHZhciBhY3RpdmUgPSBfZ2V0VXNlclN0YXR1cygpO1xuICAgICAgICBpZiAoYWN0aXZlID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzID0gXCJUaGUgdXNlciBhY2NvdW50IGhhcyBiZWVuIGJsb2NrZWRcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IgPSBcIkVycm9yOiBFcnJvciBibG9ja2luZyB1c2VyXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MgPSBcIlRoZSB1c2VyIGFjY291bnQgaGFzIGJlZW4gcmUtZW5hYmxlZFwiO1xuICAgICAgICAgICAgbWVzc2FnZS5lcnJvciA9IFwiRXJyb3I6IEVycm9yIHVuYmxvY2tpbmcgdXNlclwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRVc2VyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhY3RpdmUgPSBfZ2V0VXNlclN0YXR1cygpO1xuICAgICAgICBhY3RpdmUgPSAhKGFjdGl2ZSA9PT0gJ3RydWUnKTtcbiAgICAgICAgdmFyIGlkID0gZGVsZXRlSXRlbVswXS5kYXRhc2V0LmlkO1xuICAgICAgICBVc2VyLmdldCh7aWR9LCAoZXJyLCBkYXRhKT0+IHtcbiAgICAgICAgICAgIGRhdGEuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3VwZGF0ZURPTShhY3RpdmUpIHtcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgICAgICAgICAgYmxvY2tlZEl0ZW0uYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0uYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgICAgIGJsb2NrZWRJdGVtLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBibG9ja0l0ZW1bMF0uZGF0YXNldC5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlID0gKCk9PiB7XG4gICAgICAgIGRvbS51bmJpbmQoKTtcbiAgICB9O1xuXG59KTtcbiJdfQ==