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
        global.detailBinding = mod.exports;
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

    // generic detail view binding
    /// node element with the ea binding in the view should have the following attributes set:
    /// label,service


    _elliptical2.default.binding('detail', function (node) {
        var $node = $(node);
        var serviceName = $node.attr('service');
        var label = $node.attr('label');
        var Location = _container2.default.getType('Location');
        var referrer = Location.referrer;
        var Service = _container2.default.getType(serviceName);
        var ConfirmDialog = _container2.default.getType('ConfirmDialog');
        var Notify = _container2.default.getType('Notify');
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        var deleteItem = $node.find('[action="delete"]');
        dom.event($node, this.click, '[action="delete"]:not(.disabled)', onDelete);

        function onDelete(event) {
            var dialog = new ConfirmDialog();
            dialog.setContent('Confirm Delete', 'Are you sure you wish to delete this ' + label.toLowerCase() + '?');
            dialog.show(function (confirmed) {
                if (confirmed) _handleDelete();
            });
        }

        function _handleDelete() {
            var id = deleteItem[0].dataset.id;
            var message;
            Service.delete({ id: id }, function (err, data) {
                if (err) {
                    message = 'Error: Error deleting ' + label.toLowerCase();
                    Notify.show(message);
                } else {
                    message = label + ' has been deleted';
                    Notify.show(message);
                    setTimeout(function () {
                        Location.href = referrer;
                    }, 750);
                }
            });
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2RldGFpbEJpbmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0EseUJBQVcsT0FBWCxDQUFtQixRQUFuQixFQUE2QixVQUFVLElBQVYsRUFBZ0I7QUFDekMsWUFBSSxRQUFRLEVBQUUsSUFBRixDQUFaO0FBQ0EsWUFBSSxjQUFjLE1BQU0sSUFBTixDQUFXLFNBQVgsQ0FBbEI7QUFDQSxZQUFJLFFBQVEsTUFBTSxJQUFOLENBQVcsT0FBWCxDQUFaO0FBQ0EsWUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFlBQUksV0FBVyxTQUFTLFFBQXhCO0FBQ0EsWUFBSSxVQUFVLG9CQUFVLE9BQVYsQ0FBa0IsV0FBbEIsQ0FBZDtBQUNBLFlBQUksZ0JBQWdCLG9CQUFVLE9BQVYsQ0FBa0IsZUFBbEIsQ0FBcEI7QUFDQSxZQUFJLFNBQVMsb0JBQVUsT0FBVixDQUFrQixRQUFsQixDQUFiO0FBQ0EsWUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFlBQUksTUFBTSxJQUFJLFFBQUosQ0FBYSxJQUFiLEVBQW1CLElBQW5CLENBQVY7QUFDQSxZQUFJLGFBQWEsTUFBTSxJQUFOLENBQVcsbUJBQVgsQ0FBakI7QUFDQSxZQUFJLEtBQUosQ0FBVSxLQUFWLEVBQWlCLEtBQUssS0FBdEIsRUFBNkIsa0NBQTdCLEVBQWlFLFFBQWpFOztBQUVBLGlCQUFTLFFBQVQsQ0FBa0IsS0FBbEIsRUFBeUI7QUFDckIsZ0JBQUksU0FBUyxJQUFJLGFBQUosRUFBYjtBQUNBLG1CQUFPLFVBQVAsQ0FBa0IsZ0JBQWxCLEVBQW9DLDBDQUEwQyxNQUFNLFdBQU4sRUFBMUMsR0FBZ0UsR0FBcEc7QUFDQSxtQkFBTyxJQUFQLENBQVksVUFBVSxTQUFWLEVBQXFCO0FBQzdCLG9CQUFJLFNBQUosRUFBYztBQUNqQixhQUZEO0FBR0g7O0FBRUQsaUJBQVMsYUFBVCxHQUF5QjtBQUNyQixnQkFBSSxLQUFLLFdBQVcsQ0FBWCxFQUFjLE9BQWQsQ0FBc0IsRUFBL0I7QUFDQSxnQkFBSSxPQUFKO0FBQ0Esb0JBQVEsTUFBUixDQUFlLEVBQUMsSUFBSSxFQUFMLEVBQWYsRUFBeUIsVUFBVSxHQUFWLEVBQWUsSUFBZixFQUFxQjtBQUMxQyxvQkFBSSxHQUFKLEVBQVM7QUFDTCw4QkFBVSwyQkFBMkIsTUFBTSxXQUFOLEVBQXJDO0FBQ0EsMkJBQU8sSUFBUCxDQUFZLE9BQVo7QUFDSCxpQkFIRCxNQUdPO0FBQ0gsOEJBQVUsUUFBUSxtQkFBbEI7QUFDQSwyQkFBTyxJQUFQLENBQVksT0FBWjtBQUNBLCtCQUFXLFlBQVk7QUFDbkIsaUNBQVMsSUFBVCxHQUFnQixRQUFoQjtBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdIO0FBQ0osYUFYRDtBQVlIOztBQUVELGFBQUssT0FBTCxHQUFlLE1BQUs7QUFDaEIsZ0JBQUksTUFBSjtBQUNILFNBRkQ7QUFJSCxLQTNDRCIsImZpbGUiOiJiaW5kaW5ncy9kZXRhaWxCaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZ2VuZXJpYyBkZXRhaWwgdmlldyBiaW5kaW5nXG4vLy8gbm9kZSBlbGVtZW50IHdpdGggdGhlIGVhIGJpbmRpbmcgaW4gdGhlIHZpZXcgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIHNldDpcbi8vLyBsYWJlbCxzZXJ2aWNlXG5pbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuXG5lbGxpcHRpY2FsLmJpbmRpbmcoJ2RldGFpbCcsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyICRub2RlID0gJChub2RlKTtcbiAgICB2YXIgc2VydmljZU5hbWUgPSAkbm9kZS5hdHRyKCdzZXJ2aWNlJyk7XG4gICAgdmFyIGxhYmVsID0gJG5vZGUuYXR0cignbGFiZWwnKTtcbiAgICB2YXIgTG9jYXRpb24gPSBjb250YWluZXIuZ2V0VHlwZSgnTG9jYXRpb24nKTtcbiAgICB2YXIgcmVmZXJyZXIgPSBMb2NhdGlvbi5yZWZlcnJlcjtcbiAgICB2YXIgU2VydmljZSA9IGNvbnRhaW5lci5nZXRUeXBlKHNlcnZpY2VOYW1lKTtcbiAgICB2YXIgQ29uZmlybURpYWxvZyA9IGNvbnRhaW5lci5nZXRUeXBlKCdDb25maXJtRGlhbG9nJyk7XG4gICAgdmFyIE5vdGlmeSA9IGNvbnRhaW5lci5nZXRUeXBlKCdOb3RpZnknKTtcbiAgICB2YXIgRG9tRXZlbnQgPSBjb250YWluZXIuZ2V0VHlwZSgnRG9tRXZlbnQnKTtcbiAgICB2YXIgZG9tID0gbmV3IERvbUV2ZW50KG5vZGUsIHRoaXMpO1xuICAgIHZhciBkZWxldGVJdGVtID0gJG5vZGUuZmluZCgnW2FjdGlvbj1cImRlbGV0ZVwiXScpO1xuICAgIGRvbS5ldmVudCgkbm9kZSwgdGhpcy5jbGljaywgJ1thY3Rpb249XCJkZWxldGVcIl06bm90KC5kaXNhYmxlZCknLCBvbkRlbGV0ZSk7XG5cbiAgICBmdW5jdGlvbiBvbkRlbGV0ZShldmVudCkge1xuICAgICAgICB2YXIgZGlhbG9nID0gbmV3IENvbmZpcm1EaWFsb2coKTtcbiAgICAgICAgZGlhbG9nLnNldENvbnRlbnQoJ0NvbmZpcm0gRGVsZXRlJywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2lzaCB0byBkZWxldGUgdGhpcyAnICsgbGFiZWwudG9Mb3dlckNhc2UoKSArICc/Jyk7XG4gICAgICAgIGRpYWxvZy5zaG93KGZ1bmN0aW9uIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpX2hhbmRsZURlbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGFuZGxlRGVsZXRlKCkge1xuICAgICAgICB2YXIgaWQgPSBkZWxldGVJdGVtWzBdLmRhdGFzZXQuaWQ7XG4gICAgICAgIHZhciBtZXNzYWdlO1xuICAgICAgICBTZXJ2aWNlLmRlbGV0ZSh7aWQ6IGlkfSwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnRXJyb3I6IEVycm9yIGRlbGV0aW5nICcgKyBsYWJlbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIE5vdGlmeS5zaG93KG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gbGFiZWwgKyAnIGhhcyBiZWVuIGRlbGV0ZWQnO1xuICAgICAgICAgICAgICAgIE5vdGlmeS5zaG93KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBMb2NhdGlvbi5ocmVmID0gcmVmZXJyZXJcbiAgICAgICAgICAgICAgICB9LCA3NTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSAoKT0+IHtcbiAgICAgICAgZG9tLnVuYmluZCgpO1xuICAgIH07XG5cbn0pO1xuXG5cbiAgICJdfQ==