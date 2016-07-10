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
        global.listBinding = mod.exports;
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

    var EVT_CHANNEL = 'list.change';

    _elliptical2.default.binding('list', function (node) {
        var $node = $(node);
        var serviceName = $node.attr('service');
        var Async = _container2.default.getType('Async');
        var label = $node.attr('label');
        label = label && label !== undefined ? label : 'item(s)';
        var itemSelector = $node.attr('item-selector');
        itemSelector = itemSelector && itemSelector !== undefined ? itemSelector : 'li';
        var detailAction = $node.attr('detail-action');
        var Service = _container2.default.getType(serviceName);
        var ConfirmDialog = _container2.default.getType('ConfirmDialog');
        var Notify = _container2.default.getType('Notify');
        var Event = _container2.default.getType('Event');
        var Location = _container2.default.getType('Location');
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);

        var deleteItem = $node.find('[action="delete"]');
        var viewItem = $node.find('[action="view"]');
        var editItem = $node.find('[action="edit"]');

        dom.event($(document), 'md.checkbox.change', onCheckboxChange);
        dom.event(this.click, '[action="delete"]:not(.disabled)', onDelete);
        dom.event(this.click, '[action="view"]:not(.disabled)', onView);
        dom.event(this.click, '[action="edit"]:not(.disabled)', onView);

        function onCheckboxChange(event, data) {
            if (data.checked) _removeDisabledClass();else {
                if (!_multiChecked()) _addDisabledClass();
            }
        }

        function onDelete(event) {
            var dialog = new ConfirmDialog();
            dialog.setContent('Confirm Delete', 'Are you sure you wish to delete the selected ' + label.toLowerCase() + '(s)?');
            dialog.show(function (confirmed) {
                if (confirmed) _handleDelete();
            });
        }

        function onView(event) {
            var checked = _getMultiChecked();
            var id = checked[0].dataset.id;
            var url = detailAction.replace('[id]', id);
            Location.redirect(url);
        }

        function _removeDisabledClass() {
            deleteItem.removeClass('disabled');
            viewItem.removeClass('disabled');
            editItem.removeClass('disabled');
        }

        function _addDisabledClass() {
            deleteItem.addClass('disabled');
            viewItem.addClass('disabled');
            editItem.addClass('disabled');
        }

        function _getMultiChecked() {
            return $node.find('md-checkbox[checked]');
        }

        function _multiChecked() {
            var checked = _getMultiChecked();
            return checked.length > 1;
        }

        function _handleDelete() {
            var checked = _getMultiChecked();
            var notify = new Notify();
            if (checked.length < 2) {
                var id = checked[0].dataset.id;
                _deleteFromDOM(id);
                Service.delete({ id }, (err, data) => {
                    err ? notify.show('Error: Error deleting ' + label.toLowerCase()) : onDeletions([id], label + ' has been deleted', 1, notify);
                });
            } else {
                var ids = _getIds(checked);
                ids.forEach((() => {
                    var _ref = _asyncToGenerator(function* (id) {
                        yield Service.deleteAsync({ id });
                    });

                    return function (_x) {
                        return _ref.apply(this, arguments);
                    };
                })());
                onDeletions(ids, label + '(s) have been deleted', ids.length, notify);
            }
        }

        function onDeletions(ids, msg, count, notify) {
            _deleteIdsFromDOM(ids);
            notify.show(msg);
            _addDisabledClass();
            Event.emit(EVT_CHANNEL, { removed: count });
        }

        function _deleteIdsFromDOM(ids) {
            ids.forEach(function (id) {
                _deleteFromDOM(id);
            });
        }

        function _deleteFromDOM(id) {
            $node.find(itemSelector + '[data-id="' + id + '"]').remove();
        }

        function _getIds(checked) {
            var ids = [];
            var length = checked.length;
            for (var i = 0; i < length; i++) {
                ids.push(checked[i].dataset.id);
            }
            return ids;
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2xpc3RCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLFFBQUksY0FBYyxhQUFsQjs7QUFFQSx5QkFBVyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCLFVBQVUsSUFBVixFQUFnQjtBQUN2QyxZQUFJLFFBQVEsRUFBRSxJQUFGLENBQVo7QUFDQSxZQUFJLGNBQWMsTUFBTSxJQUFOLENBQVcsU0FBWCxDQUFsQjtBQUNBLFlBQUksUUFBUSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7QUFDQSxZQUFJLFFBQVEsTUFBTSxJQUFOLENBQVcsT0FBWCxDQUFaO0FBQ0EsZ0JBQVMsU0FBUyxVQUFVLFNBQXBCLEdBQWlDLEtBQWpDLEdBQXlDLFNBQWpEO0FBQ0EsWUFBSSxlQUFlLE1BQU0sSUFBTixDQUFXLGVBQVgsQ0FBbkI7QUFDQSx1QkFBZ0IsZ0JBQWdCLGlCQUFpQixTQUFsQyxHQUErQyxZQUEvQyxHQUE4RCxJQUE3RTtBQUNBLFlBQUksZUFBZSxNQUFNLElBQU4sQ0FBVyxlQUFYLENBQW5CO0FBQ0EsWUFBSSxVQUFVLG9CQUFVLE9BQVYsQ0FBa0IsV0FBbEIsQ0FBZDtBQUNBLFlBQUksZ0JBQWdCLG9CQUFVLE9BQVYsQ0FBa0IsZUFBbEIsQ0FBcEI7QUFDQSxZQUFJLFNBQVMsb0JBQVUsT0FBVixDQUFrQixRQUFsQixDQUFiO0FBQ0EsWUFBSSxRQUFRLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBLFlBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7QUFDQSxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxNQUFNLElBQUksUUFBSixDQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBVjs7QUFFQSxZQUFJLGFBQWEsTUFBTSxJQUFOLENBQVcsbUJBQVgsQ0FBakI7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LEVBQWlCLFFBQVEsdUJBQXpCLEVBQWtELElBQUksTUFBdEQsRUFBOEQsTUFBOUQ7QUFDSDtBQUNKOztBQUVELGlCQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsS0FBL0IsRUFBc0MsTUFBdEMsRUFBOEM7QUFDMUMsOEJBQWtCLEdBQWxCO0FBQ0EsbUJBQU8sSUFBUCxDQUFZLEdBQVo7QUFDQTtBQUNBLGtCQUFNLElBQU4sQ0FBVyxXQUFYLEVBQXdCLEVBQUMsU0FBUyxLQUFWLEVBQXhCO0FBQ0g7O0FBR0QsaUJBQVMsaUJBQVQsQ0FBMkIsR0FBM0IsRUFBZ0M7QUFDNUIsZ0JBQUksT0FBSixDQUFZLFVBQVUsRUFBVixFQUFjO0FBQ3RCLCtCQUFlLEVBQWY7QUFDSCxhQUZEO0FBR0g7O0FBRUQsaUJBQVMsY0FBVCxDQUF3QixFQUF4QixFQUE0QjtBQUN4QixrQkFBTSxJQUFOLENBQVcsZUFBZSxZQUFmLEdBQThCLEVBQTlCLEdBQW1DLElBQTlDLEVBQW9ELE1BQXBEO0FBQ0g7O0FBRUQsaUJBQVMsT0FBVCxDQUFpQixPQUFqQixFQUEwQjtBQUN0QixnQkFBSSxNQUFNLEVBQVY7QUFDQSxnQkFBSSxTQUFTLFFBQVEsTUFBckI7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQXBCLEVBQTRCLEdBQTVCLEVBQWlDO0FBQzdCLG9CQUFJLElBQUosQ0FBUyxRQUFRLENBQVIsRUFBVyxPQUFYLENBQW1CLEVBQTVCO0FBQ0g7QUFDRCxtQkFBTyxHQUFQO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLEdBQWUsTUFBSztBQUNoQixnQkFBSSxNQUFKO0FBQ0gsU0FGRDtBQUlILEtBeEhEIiwiZmlsZSI6ImJpbmRpbmdzL2xpc3RCaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIGdlbmVyaWMgbGlzdCB2aWV3IGJpbmRpbmdcbi8vLyBub2RlIGVsZW1lbnQgd2l0aCB0aGUgZWEgYmluZGluZyBpbiB0aGUgdmlldyBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIGF0dHJpYnV0ZXMgc2V0OlxuLy8vIHNlcnZpY2UsbGFiZWwsaXRlbS1zZWxlY3RvcixkZXRhaWwtYWN0aW9uXG4vLy8gdGhlIGl0ZW1zIGluIHRoZSBsaXN0L3JlcGVhdGluZyBpdGVtIGVsZW1lbnQgc2hvdWxkIGhhdmUgYSBkYXRhLWlkIGF0dHJpYnV0ZSBzZXRcbi8vLyBkZXRhaWwtYWN0aW9uIGlzIGEgc3RyaW5nIHRlbXBsYXRlICwgZS5nLiwnL0RldGFpbC9baWRdJywgdGhhdCByZXBsYWNlcyBbaWRdIHdpdGggdGhlIGRhdGEtaWQgdmFsdWVcblxuLy8vIHRoaXMgYmluZGluZyBzaG91bGQgYmUgY29tcGxpbWVudGVkIGJ5IGEgYmluZGluZyBvciBsaXN0ZW5lciB0aGF0IGhhcyBhbiBFdmVudCBsaXN0ZW5lcihFdmVudC5vbiwgbm90IGEgRE9NIGxpc3RlbmVyKVxuLy8vIGZvciB0aGUgRVZUX0NIQU5ORUwgaW4gb3JkZXIgdG8gc3luYyB0aGUgY291bnQgZGlzcGxheVxuXG5pbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxudmFyIEVWVF9DSEFOTkVMID0gJ2xpc3QuY2hhbmdlJztcblxuZWxsaXB0aWNhbC5iaW5kaW5nKCdsaXN0JywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgJG5vZGUgPSAkKG5vZGUpO1xuICAgIHZhciBzZXJ2aWNlTmFtZSA9ICRub2RlLmF0dHIoJ3NlcnZpY2UnKTtcbiAgICB2YXIgQXN5bmMgPSBjb250YWluZXIuZ2V0VHlwZSgnQXN5bmMnKTtcbiAgICB2YXIgbGFiZWwgPSAkbm9kZS5hdHRyKCdsYWJlbCcpO1xuICAgIGxhYmVsID0gKGxhYmVsICYmIGxhYmVsICE9PSB1bmRlZmluZWQpID8gbGFiZWwgOiAnaXRlbShzKSc7XG4gICAgdmFyIGl0ZW1TZWxlY3RvciA9ICRub2RlLmF0dHIoJ2l0ZW0tc2VsZWN0b3InKTtcbiAgICBpdGVtU2VsZWN0b3IgPSAoaXRlbVNlbGVjdG9yICYmIGl0ZW1TZWxlY3RvciAhPT0gdW5kZWZpbmVkKSA/IGl0ZW1TZWxlY3RvciA6ICdsaSc7XG4gICAgdmFyIGRldGFpbEFjdGlvbiA9ICRub2RlLmF0dHIoJ2RldGFpbC1hY3Rpb24nKTtcbiAgICB2YXIgU2VydmljZSA9IGNvbnRhaW5lci5nZXRUeXBlKHNlcnZpY2VOYW1lKTtcbiAgICB2YXIgQ29uZmlybURpYWxvZyA9IGNvbnRhaW5lci5nZXRUeXBlKCdDb25maXJtRGlhbG9nJyk7XG4gICAgdmFyIE5vdGlmeSA9IGNvbnRhaW5lci5nZXRUeXBlKCdOb3RpZnknKTtcbiAgICB2YXIgRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRXZlbnQnKTtcbiAgICB2YXIgTG9jYXRpb24gPSBjb250YWluZXIuZ2V0VHlwZSgnTG9jYXRpb24nKTtcbiAgICB2YXIgRG9tRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRG9tRXZlbnQnKTtcbiAgICB2YXIgZG9tID0gbmV3IERvbUV2ZW50KG5vZGUsIHRoaXMpO1xuXG4gICAgdmFyIGRlbGV0ZUl0ZW0gPSAkbm9kZS5maW5kKCdbYWN0aW9uPVwiZGVsZXRlXCJdJyk7XG4gICAgdmFyIHZpZXdJdGVtID0gJG5vZGUuZmluZCgnW2FjdGlvbj1cInZpZXdcIl0nKTtcbiAgICB2YXIgZWRpdEl0ZW0gPSAkbm9kZS5maW5kKCdbYWN0aW9uPVwiZWRpdFwiXScpO1xuXG5cbiAgICBkb20uZXZlbnQoJChkb2N1bWVudCksICdtZC5jaGVja2JveC5jaGFuZ2UnLCBvbkNoZWNrYm94Q2hhbmdlKTtcbiAgICBkb20uZXZlbnQodGhpcy5jbGljaywgJ1thY3Rpb249XCJkZWxldGVcIl06bm90KC5kaXNhYmxlZCknLCBvbkRlbGV0ZSk7XG4gICAgZG9tLmV2ZW50KHRoaXMuY2xpY2ssICdbYWN0aW9uPVwidmlld1wiXTpub3QoLmRpc2FibGVkKScsIG9uVmlldyk7XG4gICAgZG9tLmV2ZW50KHRoaXMuY2xpY2ssICdbYWN0aW9uPVwiZWRpdFwiXTpub3QoLmRpc2FibGVkKScsIG9uVmlldyk7XG5cbiAgICBmdW5jdGlvbiBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmNoZWNrZWQpIF9yZW1vdmVEaXNhYmxlZENsYXNzKCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFfbXVsdGlDaGVja2VkKCkpX2FkZERpc2FibGVkQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlKGV2ZW50KSB7XG4gICAgICAgIHZhciBkaWFsb2cgPSBuZXcgQ29uZmlybURpYWxvZygpO1xuICAgICAgICBkaWFsb2cuc2V0Q29udGVudCgnQ29uZmlybSBEZWxldGUnLCAnQXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgJyArIGxhYmVsLnRvTG93ZXJDYXNlKCkgKyAnKHMpPycpO1xuICAgICAgICBkaWFsb2cuc2hvdyhmdW5jdGlvbiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSBfaGFuZGxlRGVsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVmlldyhldmVudCkge1xuICAgICAgICB2YXIgY2hlY2tlZCA9IF9nZXRNdWx0aUNoZWNrZWQoKTtcbiAgICAgICAgdmFyIGlkID0gY2hlY2tlZFswXS5kYXRhc2V0LmlkO1xuICAgICAgICB2YXIgdXJsID0gZGV0YWlsQWN0aW9uLnJlcGxhY2UoJ1tpZF0nLCBpZCk7XG4gICAgICAgIExvY2F0aW9uLnJlZGlyZWN0KHVybCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlbW92ZURpc2FibGVkQ2xhc3MoKSB7XG4gICAgICAgIGRlbGV0ZUl0ZW0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHZpZXdJdGVtLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICBlZGl0SXRlbS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkRGlzYWJsZWRDbGFzcygpIHtcbiAgICAgICAgZGVsZXRlSXRlbS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgdmlld0l0ZW0uYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGVkaXRJdGVtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9nZXRNdWx0aUNoZWNrZWQoKSB7XG4gICAgICAgIHJldHVybiAkbm9kZS5maW5kKCdtZC1jaGVja2JveFtjaGVja2VkXScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tdWx0aUNoZWNrZWQoKSB7XG4gICAgICAgIHZhciBjaGVja2VkID0gX2dldE11bHRpQ2hlY2tlZCgpO1xuICAgICAgICByZXR1cm4gKGNoZWNrZWQubGVuZ3RoID4gMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2hhbmRsZURlbGV0ZSgpIHtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBfZ2V0TXVsdGlDaGVja2VkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBuZXcgTm90aWZ5KCk7XG4gICAgICAgIGlmIChjaGVja2VkLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGNoZWNrZWRbMF0uZGF0YXNldC5pZDtcbiAgICAgICAgICAgIF9kZWxldGVGcm9tRE9NKGlkKTtcbiAgICAgICAgICAgIFNlcnZpY2UuZGVsZXRlKHtpZH0sIChlcnIsIGRhdGEpPT4ge1xuICAgICAgICAgICAgICAgIChlcnIpID8gbm90aWZ5LnNob3coJ0Vycm9yOiBFcnJvciBkZWxldGluZyAnICsgbGFiZWwudG9Mb3dlckNhc2UoKSkgOiBvbkRlbGV0aW9ucyhbaWRdLCBsYWJlbCArICcgaGFzIGJlZW4gZGVsZXRlZCcsIDEsIG5vdGlmeSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGlkcyA9IF9nZXRJZHMoY2hlY2tlZCk7XG4gICAgICAgICAgICBpZHMuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBTZXJ2aWNlLmRlbGV0ZUFzeW5jKHtpZH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvbkRlbGV0aW9ucyhpZHMsIGxhYmVsICsgJyhzKSBoYXZlIGJlZW4gZGVsZXRlZCcsIGlkcy5sZW5ndGgsIG5vdGlmeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRlbGV0aW9ucyhpZHMsIG1zZywgY291bnQsIG5vdGlmeSkge1xuICAgICAgICBfZGVsZXRlSWRzRnJvbURPTShpZHMpO1xuICAgICAgICBub3RpZnkuc2hvdyhtc2cpO1xuICAgICAgICBfYWRkRGlzYWJsZWRDbGFzcygpO1xuICAgICAgICBFdmVudC5lbWl0KEVWVF9DSEFOTkVMLCB7cmVtb3ZlZDogY291bnR9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIF9kZWxldGVJZHNGcm9tRE9NKGlkcykge1xuICAgICAgICBpZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIF9kZWxldGVGcm9tRE9NKGlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlbGV0ZUZyb21ET00oaWQpIHtcbiAgICAgICAgJG5vZGUuZmluZChpdGVtU2VsZWN0b3IgKyAnW2RhdGEtaWQ9XCInICsgaWQgKyAnXCJdJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldElkcyhjaGVja2VkKSB7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGNoZWNrZWQubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZHMucHVzaChjaGVja2VkW2ldLmRhdGFzZXQuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHM7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlID0gKCk9PiB7XG4gICAgICAgIGRvbS51bmJpbmQoKTtcbiAgICB9O1xuXG59KTtcblxuICAiXX0=