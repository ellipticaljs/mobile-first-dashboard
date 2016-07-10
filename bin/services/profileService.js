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
        global.profileService = mod.exports;
    }
})(this, function (_container) {
    'use strict';

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var crypto = _container2.default.getType('crypto');
    var $Cookie = _container2.default.getType('$Cookie');
    var notify = _container2.default.getType('Notify');
    var Event = _container2.default.getType('Event');

    class Profile {
        static get() {
            return $Cookie.get('profile');
        }

        static login(params, callback) {
            this.$provider.post(params, 'ProfileLogin', function (err, data) {
                if (!err) {
                    //success
                    var token = crypto.getBase64Token(params.username, params.password);
                    var $Cookie = _container2.default.getType('$Cookie');
                    $Cookie.set('token', token);
                    $Cookie.set('profile', data);
                    var Location = _container2.default.getType('Location');
                    var Event = _container2.default.getType('Event');
                    Event.emit('app.login', data);
                    notify.show('Login Successful');
                    Location.href = '/';
                } else {
                    //failure
                    notify.show('Invalid Login');
                }
            });
        }

        static logout(params, callback) {
            $Cookie.delete('token');
            $Cookie.delete('profile');

            Event.emit('app.logout', null);
            if (callback) {
                callback(null, { message: 'You have been logged out from your account...' });
            }
        }

        static authenticated() {
            var token = $Cookie.get('token');
            var profile = $Cookie.get('profile');
            return token !== undefined && token ? profile : null;
        }
    }

    _container2.default.mapType('Profile', Profile, '$ProfileProvider');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2ZpbGVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsUUFBSSxTQUFTLG9CQUFVLE9BQVYsQ0FBa0IsUUFBbEIsQ0FBYjtBQUNBLFFBQUksVUFBVSxvQkFBVSxPQUFWLENBQWtCLFNBQWxCLENBQWQ7QUFDQSxRQUFJLFNBQVMsb0JBQVUsT0FBVixDQUFrQixRQUFsQixDQUFiO0FBQ0EsUUFBSSxRQUFRLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWjs7QUFFQSxVQUFNLE9BQU4sQ0FBYTtBQUNULGVBQU8sR0FBUCxHQUFZO0FBQ1IsbUJBQU8sUUFBUSxHQUFSLENBQVksU0FBWixDQUFQO0FBQ0g7O0FBRUQsZUFBTyxLQUFQLENBQWEsTUFBYixFQUFvQixRQUFwQixFQUE2QjtBQUN6QixpQkFBSyxTQUFMLENBQWUsSUFBZixDQUFvQixNQUFwQixFQUE0QixjQUE1QixFQUE0QyxVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCO0FBQzdELG9CQUFJLENBQUMsR0FBTCxFQUFVOztBQUVOLHdCQUFJLFFBQVEsT0FBTyxjQUFQLENBQXNCLE9BQU8sUUFBN0IsRUFBdUMsT0FBTyxRQUE5QyxDQUFaO0FBQ0Esd0JBQUksVUFBVSxvQkFBVSxPQUFWLENBQWtCLFNBQWxCLENBQWQ7QUFDQSw0QkFBUSxHQUFSLENBQVksT0FBWixFQUFxQixLQUFyQjtBQUNBLDRCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLElBQXZCO0FBQ0Esd0JBQUksV0FBVyxvQkFBVSxPQUFWLENBQWtCLFVBQWxCLENBQWY7QUFDQSx3QkFBSSxRQUFRLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBLDBCQUFNLElBQU4sQ0FBVyxXQUFYLEVBQXdCLElBQXhCO0FBQ0EsMkJBQU8sSUFBUCxDQUFZLGtCQUFaO0FBQ0EsNkJBQVMsSUFBVCxHQUFnQixHQUFoQjtBQUNILGlCQVhELE1BV087O0FBRUgsMkJBQU8sSUFBUCxDQUFZLGVBQVo7QUFDSDtBQUNKLGFBaEJEO0FBaUJIOztBQUVELGVBQU8sTUFBUCxDQUFjLE1BQWQsRUFBcUIsUUFBckIsRUFBOEI7QUFDMUIsb0JBQVEsTUFBUixDQUFlLE9BQWY7QUFDQSxvQkFBUSxNQUFSLENBQWUsU0FBZjs7QUFFQSxrQkFBTSxJQUFOLENBQVcsWUFBWCxFQUF5QixJQUF6QjtBQUNBLGdCQUFJLFFBQUosRUFBYztBQUNWLHlCQUFTLElBQVQsRUFBZSxFQUFDLFNBQVMsK0NBQVYsRUFBZjtBQUNIO0FBQ0o7O0FBRUQsZUFBTyxhQUFQLEdBQXNCO0FBQ2xCLGdCQUFJLFFBQVEsUUFBUSxHQUFSLENBQVksT0FBWixDQUFaO0FBQ0EsZ0JBQUksVUFBVSxRQUFRLEdBQVIsQ0FBWSxTQUFaLENBQWQ7QUFDQSxtQkFBUSxVQUFVLFNBQVYsSUFBdUIsS0FBeEIsR0FBaUMsT0FBakMsR0FBMkMsSUFBbEQ7QUFDSDtBQXZDUTs7QUEyQ2Isd0JBQVUsT0FBVixDQUFrQixTQUFsQixFQUE2QixPQUE3QixFQUFzQyxrQkFBdEMiLCJmaWxlIjoic2VydmljZXMvcHJvZmlsZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG52YXIgY3J5cHRvID0gY29udGFpbmVyLmdldFR5cGUoJ2NyeXB0bycpO1xudmFyICRDb29raWUgPSBjb250YWluZXIuZ2V0VHlwZSgnJENvb2tpZScpO1xudmFyIG5vdGlmeSA9IGNvbnRhaW5lci5nZXRUeXBlKCdOb3RpZnknKTtcbnZhciBFdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdFdmVudCcpO1xuXG5jbGFzcyBQcm9maWxle1xuICAgIHN0YXRpYyBnZXQoKXtcbiAgICAgICAgcmV0dXJuICRDb29raWUuZ2V0KCdwcm9maWxlJyk7IFxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbG9naW4ocGFyYW1zLGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy4kcHJvdmlkZXIucG9zdChwYXJhbXMsICdQcm9maWxlTG9naW4nLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIC8vc3VjY2Vzc1xuICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IGNyeXB0by5nZXRCYXNlNjRUb2tlbihwYXJhbXMudXNlcm5hbWUsIHBhcmFtcy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgdmFyICRDb29raWUgPSBjb250YWluZXIuZ2V0VHlwZSgnJENvb2tpZScpO1xuICAgICAgICAgICAgICAgICRDb29raWUuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAkQ29va2llLnNldCgncHJvZmlsZScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhciBMb2NhdGlvbiA9IGNvbnRhaW5lci5nZXRUeXBlKCdMb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgIHZhciBFdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdFdmVudCcpO1xuICAgICAgICAgICAgICAgIEV2ZW50LmVtaXQoJ2FwcC5sb2dpbicsIGRhdGEpO1xuICAgICAgICAgICAgICAgIG5vdGlmeS5zaG93KCdMb2dpbiBTdWNjZXNzZnVsJyk7XG4gICAgICAgICAgICAgICAgTG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9mYWlsdXJlXG4gICAgICAgICAgICAgICAgbm90aWZ5LnNob3coJ0ludmFsaWQgTG9naW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgbG9nb3V0KHBhcmFtcyxjYWxsYmFjayl7XG4gICAgICAgICRDb29raWUuZGVsZXRlKCd0b2tlbicpO1xuICAgICAgICAkQ29va2llLmRlbGV0ZSgncHJvZmlsZScpO1xuXG4gICAgICAgIEV2ZW50LmVtaXQoJ2FwcC5sb2dvdXQnLCBudWxsKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7bWVzc2FnZTogJ1lvdSBoYXZlIGJlZW4gbG9nZ2VkIG91dCBmcm9tIHlvdXIgYWNjb3VudC4uLid9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgYXV0aGVudGljYXRlZCgpe1xuICAgICAgICB2YXIgdG9rZW4gPSAkQ29va2llLmdldCgndG9rZW4nKTtcbiAgICAgICAgdmFyIHByb2ZpbGUgPSAkQ29va2llLmdldCgncHJvZmlsZScpO1xuICAgICAgICByZXR1cm4gKHRva2VuICE9PSB1bmRlZmluZWQgJiYgdG9rZW4pID8gcHJvZmlsZSA6IG51bGw7XG4gICAgfVxufVxuXG5cbmNvbnRhaW5lci5tYXBUeXBlKCdQcm9maWxlJywgUHJvZmlsZSwgJyRQcm9maWxlUHJvdmlkZXInKTtcblxuICAgIl19