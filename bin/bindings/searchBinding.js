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
        global.searchBinding = mod.exports;
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

    /// toolbar search binding


    _elliptical2.default.binding('search', function (node) {
        var Search = _container2.default.getType('Search');
        var Location = _container2.default.getType('Location');
        var $node = $(node);
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event(this.click, 'button', onClick);
        dom.event('keypress', onKeypress);

        function onClick(event) {
            var input = $node.find('input');
            var val = input.val();
            var search = new Search();
            var url = _getUrl();
            if (val !== '') {
                input.val('');
                search.find({ url: url, value: val });
            }
        }

        function onKeypress(event) {
            if (event.which !== 13) return;
            onClick(event);
        }

        function _getUrl() {
            return Location.href;
        }

        this.dispose = () => {
            dom.unbind();
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL3NlYXJjaEJpbmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLHlCQUFXLE9BQVgsQ0FBbUIsUUFBbkIsRUFBNkIsVUFBVSxJQUFWLEVBQWdCO0FBQ3pDLFlBQUksU0FBUyxvQkFBVSxPQUFWLENBQWtCLFFBQWxCLENBQWI7QUFDQSxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxRQUFRLEVBQUUsSUFBRixDQUFaO0FBQ0EsWUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFlBQUksTUFBTSxJQUFJLFFBQUosQ0FBYSxJQUFiLEVBQW1CLElBQW5CLENBQVY7QUFDQSxZQUFJLEtBQUosQ0FBVSxLQUFLLEtBQWYsRUFBc0IsUUFBdEIsRUFBZ0MsT0FBaEM7QUFDQSxZQUFJLEtBQUosQ0FBVSxVQUFWLEVBQXNCLFVBQXRCOztBQUVBLGlCQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0I7QUFDcEIsZ0JBQUksUUFBUSxNQUFNLElBQU4sQ0FBVyxPQUFYLENBQVo7QUFDQSxnQkFBSSxNQUFNLE1BQU0sR0FBTixFQUFWO0FBQ0EsZ0JBQUksU0FBUyxJQUFJLE1BQUosRUFBYjtBQUNBLGdCQUFJLE1BQU0sU0FBVjtBQUNBLGdCQUFJLFFBQVEsRUFBWixFQUFnQjtBQUNaLHNCQUFNLEdBQU4sQ0FBVSxFQUFWO0FBQ0EsdUJBQU8sSUFBUCxDQUFZLEVBQUMsS0FBSyxHQUFOLEVBQVcsT0FBTyxHQUFsQixFQUFaO0FBQ0g7QUFDSjs7QUFFRCxpQkFBUyxVQUFULENBQW9CLEtBQXBCLEVBQTJCO0FBQ3ZCLGdCQUFJLE1BQU0sS0FBTixLQUFnQixFQUFwQixFQUF5QjtBQUN6QixvQkFBUSxLQUFSO0FBQ0g7O0FBRUQsaUJBQVMsT0FBVCxHQUFtQjtBQUNmLG1CQUFPLFNBQVMsSUFBaEI7QUFDSDs7QUFFRCxhQUFLLE9BQUwsR0FBZSxNQUFLO0FBQ2hCLGdCQUFJLE1BQUo7QUFDSCxTQUZEO0FBR0gsS0FoQ0QiLCJmaWxlIjoiYmluZGluZ3Mvc2VhcmNoQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyB0b29sYmFyIHNlYXJjaCBiaW5kaW5nXG5pbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuXG5lbGxpcHRpY2FsLmJpbmRpbmcoJ3NlYXJjaCcsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIFNlYXJjaCA9IGNvbnRhaW5lci5nZXRUeXBlKCdTZWFyY2gnKTtcbiAgICB2YXIgTG9jYXRpb24gPSBjb250YWluZXIuZ2V0VHlwZSgnTG9jYXRpb24nKTtcbiAgICB2YXIgJG5vZGUgPSAkKG5vZGUpO1xuICAgIHZhciBEb21FdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdEb21FdmVudCcpO1xuICAgIHZhciBkb20gPSBuZXcgRG9tRXZlbnQobm9kZSwgdGhpcyk7XG4gICAgZG9tLmV2ZW50KHRoaXMuY2xpY2ssICdidXR0b24nLCBvbkNsaWNrKTtcbiAgICBkb20uZXZlbnQoJ2tleXByZXNzJywgb25LZXlwcmVzcyk7XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIHZhciBpbnB1dCA9ICRub2RlLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIHZhciB2YWwgPSBpbnB1dC52YWwoKTtcbiAgICAgICAgdmFyIHNlYXJjaCA9IG5ldyBTZWFyY2goKTtcbiAgICAgICAgdmFyIHVybCA9IF9nZXRVcmwoKTtcbiAgICAgICAgaWYgKHZhbCAhPT0gJycpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICBzZWFyY2guZmluZCh7dXJsOiB1cmwsIHZhbHVlOiB2YWx9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5cHJlc3MoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoICE9PSAxMykgIHJldHVybjtcbiAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFVybCgpIHtcbiAgICAgICAgcmV0dXJuIExvY2F0aW9uLmhyZWY7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwb3NlID0gKCk9PiB7XG4gICAgICAgIGRvbS51bmJpbmQoKTtcbiAgICB9O1xufSk7XG5cblxuICAgICJdfQ==