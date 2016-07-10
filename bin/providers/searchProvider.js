(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['../dependencies/container'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('../dependencies/container'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.container);
        global.searchProvider = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Location = _container2.default.getType('Location');

    class SearchProvider {
        find(params) {
            var url = params.url;
            var val = params.value;
            Location.href = this._getSearchUrl(url, val, '$filter');
        }

        _getSearchUrl(url, val) {
            var Notify = _container2.default.getType('Notify');
            var href;
            if (url.indexOf('/User') > -1) {
                href = '/User/List/1?search_FirstName_LastName=' + val;
                Notify.show("Searching for '" + val + "'", 3000);
                return href;
            } else if (url.indexOf('/Order') > -1) {
                href = '/Order/List/1?search_FirstName_LastName=' + val;
                Notify.show("Searching for '" + val + "'", 3000);
                return href;
            } else {
                href = '/User/List/1?search_FirstName_LastName=' + val;
                Notify.show("Searching for '" + val + "'", 3000);
                return href;
            }
        }
    }

    _container2.default.registerType('$SearchProvider', new SearchProvider());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3ZpZGVycy9zZWFyY2hQcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFFBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7O0FBRUEsVUFBTSxjQUFOLENBQXFCO0FBQ2pCLGFBQUssTUFBTCxFQUFhO0FBQ1QsZ0JBQUksTUFBTSxPQUFPLEdBQWpCO0FBQ0EsZ0JBQUksTUFBTSxPQUFPLEtBQWpCO0FBQ0EscUJBQVMsSUFBVCxHQUFnQixLQUFLLGFBQUwsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsU0FBN0IsQ0FBaEI7QUFDSDs7QUFFRCxzQkFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCO0FBQ3BCLGdCQUFJLFNBQVMsb0JBQVUsT0FBVixDQUFrQixRQUFsQixDQUFiO0FBQ0EsZ0JBQUksSUFBSjtBQUNBLGdCQUFJLElBQUksT0FBSixDQUFZLE9BQVosSUFBdUIsQ0FBQyxDQUE1QixFQUErQjtBQUMzQix1QkFBTyw0Q0FBNEMsR0FBbkQ7QUFDQSx1QkFBTyxJQUFQLENBQVksb0JBQW9CLEdBQXBCLEdBQTBCLEdBQXRDLEVBQTJDLElBQTNDO0FBQ0EsdUJBQU8sSUFBUDtBQUNILGFBSkQsTUFJTyxJQUFJLElBQUksT0FBSixDQUFZLFFBQVosSUFBd0IsQ0FBQyxDQUE3QixFQUFnQztBQUNuQyx1QkFBTyw2Q0FBNkMsR0FBcEQ7QUFDQSx1QkFBTyxJQUFQLENBQVksb0JBQW9CLEdBQXBCLEdBQTBCLEdBQXRDLEVBQTJDLElBQTNDO0FBQ0EsdUJBQU8sSUFBUDtBQUNILGFBSk0sTUFJQTtBQUNILHVCQUFPLDRDQUE0QyxHQUFuRDtBQUNBLHVCQUFPLElBQVAsQ0FBWSxvQkFBb0IsR0FBcEIsR0FBMEIsR0FBdEMsRUFBMkMsSUFBM0M7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFDSjtBQXZCZ0I7O0FBMEJyQix3QkFBVSxZQUFWLENBQXVCLGlCQUF2QixFQUEwQyxJQUFJLGNBQUosRUFBMUMiLCJmaWxlIjoicHJvdmlkZXJzL3NlYXJjaFByb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxudmFyIExvY2F0aW9uID0gY29udGFpbmVyLmdldFR5cGUoJ0xvY2F0aW9uJyk7XG5cbmNsYXNzIFNlYXJjaFByb3ZpZGVyIHtcbiAgICBmaW5kKHBhcmFtcykge1xuICAgICAgICB2YXIgdXJsID0gcGFyYW1zLnVybDtcbiAgICAgICAgdmFyIHZhbCA9IHBhcmFtcy52YWx1ZTtcbiAgICAgICAgTG9jYXRpb24uaHJlZiA9IHRoaXMuX2dldFNlYXJjaFVybCh1cmwsIHZhbCwgJyRmaWx0ZXInKTtcbiAgICB9XG5cbiAgICBfZ2V0U2VhcmNoVXJsKHVybCwgdmFsKSB7XG4gICAgICAgIHZhciBOb3RpZnkgPSBjb250YWluZXIuZ2V0VHlwZSgnTm90aWZ5Jyk7XG4gICAgICAgIHZhciBocmVmO1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoJy9Vc2VyJykgPiAtMSkge1xuICAgICAgICAgICAgaHJlZiA9ICcvVXNlci9MaXN0LzE/c2VhcmNoX0ZpcnN0TmFtZV9MYXN0TmFtZT0nICsgdmFsO1xuICAgICAgICAgICAgTm90aWZ5LnNob3coXCJTZWFyY2hpbmcgZm9yICdcIiArIHZhbCArIFwiJ1wiLCAzMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBocmVmO1xuICAgICAgICB9IGVsc2UgaWYgKHVybC5pbmRleE9mKCcvT3JkZXInKSA+IC0xKSB7XG4gICAgICAgICAgICBocmVmID0gJy9PcmRlci9MaXN0LzE/c2VhcmNoX0ZpcnN0TmFtZV9MYXN0TmFtZT0nICsgdmFsO1xuICAgICAgICAgICAgTm90aWZ5LnNob3coXCJTZWFyY2hpbmcgZm9yICdcIiArIHZhbCArIFwiJ1wiLCAzMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHJlZiA9ICcvVXNlci9MaXN0LzE/c2VhcmNoX0ZpcnN0TmFtZV9MYXN0TmFtZT0nICsgdmFsO1xuICAgICAgICAgICAgTm90aWZ5LnNob3coXCJTZWFyY2hpbmcgZm9yICdcIiArIHZhbCArIFwiJ1wiLCAzMDAwKTtcbiAgICAgICAgICAgIHJldHVybiBocmVmO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCckU2VhcmNoUHJvdmlkZXInLCBuZXcgU2VhcmNoUHJvdmlkZXIoKSk7XG5cbiAgIl19