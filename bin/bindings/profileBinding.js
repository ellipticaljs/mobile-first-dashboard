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
        global.profileBinding = mod.exports;
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

    //Profile Binding: sets/updates the Avatar dropdown profile content

    _elliptical2.default.binding('profile', function (node) {
        var $node = $(node);
        var Event = _container2.default.getType('Event');
        var handleLogin = Event.on('app.login', setUser);
        var handleLogout = Event.on('app.logout', setGuest);

        function init() {
            var Profile = _container2.default.getType('Profile');
            var _profile = Profile.authenticated();
            if (!_profile) setGuest();else setUser(_profile);
        }

        function setGuest() {
            var obj = {
                name: 'Guest',
                link: '/Profile/Login',
                label: 'Sign In'
            };
            updateDom(obj);
        }

        function setUser(p) {
            var obj = {
                name: p.name,
                link: '/Profile/Logout',
                label: 'Sign Out'
            };
            updateDom(obj);
        }

        function updateDom(obj) {
            var profileName = $node.find('[data-profile-name]');
            profileName.text(obj.name);
            var link = $node.find('[data-profile-link]');
            link.attr('href', obj.link);
            link.html(obj.label);
        }

        this.dispose = () => {
            Event.off(handleLogin);
            Event.off(handleLogout);
        };

        init();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL3Byb2ZpbGVCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLHlCQUFXLE9BQVgsQ0FBbUIsU0FBbkIsRUFBOEIsVUFBVSxJQUFWLEVBQWdCO0FBQzFDLFlBQUksUUFBUSxFQUFFLElBQUYsQ0FBWjtBQUNBLFlBQUksUUFBUSxvQkFBVSxPQUFWLENBQWtCLE9BQWxCLENBQVo7QUFDQSxZQUFJLGNBQWMsTUFBTSxFQUFOLENBQVMsV0FBVCxFQUFzQixPQUF0QixDQUFsQjtBQUNBLFlBQUksZUFBZSxNQUFNLEVBQU4sQ0FBUyxZQUFULEVBQXVCLFFBQXZCLENBQW5COztBQUVBLGlCQUFTLElBQVQsR0FBZ0I7QUFDWixnQkFBSSxVQUFVLG9CQUFVLE9BQVYsQ0FBa0IsU0FBbEIsQ0FBZDtBQUNBLGdCQUFJLFdBQVcsUUFBUSxhQUFSLEVBQWY7QUFDQSxnQkFBSSxDQUFDLFFBQUwsRUFBZSxXQUFmLEtBQ0ssUUFBUSxRQUFSO0FBQ1I7O0FBRUQsaUJBQVMsUUFBVCxHQUFvQjtBQUNoQixnQkFBSSxNQUFNO0FBQ04sc0JBQU0sT0FEQTtBQUVOLHNCQUFNLGdCQUZBO0FBR04sdUJBQU87QUFIRCxhQUFWO0FBS0Esc0JBQVUsR0FBVjtBQUNIOztBQUVELGlCQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0I7QUFDaEIsZ0JBQUksTUFBTTtBQUNOLHNCQUFNLEVBQUUsSUFERjtBQUVOLHNCQUFNLGlCQUZBO0FBR04sdUJBQU87QUFIRCxhQUFWO0FBS0Esc0JBQVUsR0FBVjtBQUNIOztBQUVELGlCQUFTLFNBQVQsQ0FBbUIsR0FBbkIsRUFBd0I7QUFDcEIsZ0JBQUksY0FBYyxNQUFNLElBQU4sQ0FBVyxxQkFBWCxDQUFsQjtBQUNBLHdCQUFZLElBQVosQ0FBaUIsSUFBSSxJQUFyQjtBQUNBLGdCQUFJLE9BQU8sTUFBTSxJQUFOLENBQVcscUJBQVgsQ0FBWDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxNQUFWLEVBQWtCLElBQUksSUFBdEI7QUFDQSxpQkFBSyxJQUFMLENBQVUsSUFBSSxLQUFkO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLEdBQWUsTUFBSztBQUNoQixrQkFBTSxHQUFOLENBQVUsV0FBVjtBQUNBLGtCQUFNLEdBQU4sQ0FBVSxZQUFWO0FBQ0gsU0FIRDs7QUFLQTtBQUNILEtBN0NEIiwiZmlsZSI6ImJpbmRpbmdzL3Byb2ZpbGVCaW5kaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Qcm9maWxlIEJpbmRpbmc6IHNldHMvdXBkYXRlcyB0aGUgQXZhdGFyIGRyb3Bkb3duIHByb2ZpbGUgY29udGVudFxuXG5pbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuZWxsaXB0aWNhbC5iaW5kaW5nKCdwcm9maWxlJywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgJG5vZGUgPSAkKG5vZGUpO1xuICAgIHZhciBFdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdFdmVudCcpO1xuICAgIHZhciBoYW5kbGVMb2dpbiA9IEV2ZW50Lm9uKCdhcHAubG9naW4nLCBzZXRVc2VyKTtcbiAgICB2YXIgaGFuZGxlTG9nb3V0ID0gRXZlbnQub24oJ2FwcC5sb2dvdXQnLCBzZXRHdWVzdCk7XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgUHJvZmlsZSA9IGNvbnRhaW5lci5nZXRUeXBlKCdQcm9maWxlJyk7XG4gICAgICAgIHZhciBfcHJvZmlsZSA9IFByb2ZpbGUuYXV0aGVudGljYXRlZCgpO1xuICAgICAgICBpZiAoIV9wcm9maWxlKSBzZXRHdWVzdCgpO1xuICAgICAgICBlbHNlIHNldFVzZXIoX3Byb2ZpbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEd1ZXN0KCkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgbmFtZTogJ0d1ZXN0JyxcbiAgICAgICAgICAgIGxpbms6ICcvUHJvZmlsZS9Mb2dpbicsXG4gICAgICAgICAgICBsYWJlbDogJ1NpZ24gSW4nXG4gICAgICAgIH07XG4gICAgICAgIHVwZGF0ZURvbShvYmopO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFVzZXIocCkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgbmFtZTogcC5uYW1lLFxuICAgICAgICAgICAgbGluazogJy9Qcm9maWxlL0xvZ291dCcsXG4gICAgICAgICAgICBsYWJlbDogJ1NpZ24gT3V0J1xuICAgICAgICB9O1xuICAgICAgICB1cGRhdGVEb20ob2JqKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVEb20ob2JqKSB7XG4gICAgICAgIHZhciBwcm9maWxlTmFtZSA9ICRub2RlLmZpbmQoJ1tkYXRhLXByb2ZpbGUtbmFtZV0nKTtcbiAgICAgICAgcHJvZmlsZU5hbWUudGV4dChvYmoubmFtZSk7XG4gICAgICAgIHZhciBsaW5rID0gJG5vZGUuZmluZCgnW2RhdGEtcHJvZmlsZS1saW5rXScpO1xuICAgICAgICBsaW5rLmF0dHIoJ2hyZWYnLCBvYmoubGluayk7XG4gICAgICAgIGxpbmsuaHRtbChvYmoubGFiZWwpO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcG9zZSA9ICgpPT4ge1xuICAgICAgICBFdmVudC5vZmYoaGFuZGxlTG9naW4pO1xuICAgICAgICBFdmVudC5vZmYoaGFuZGxlTG9nb3V0KTtcbiAgICB9O1xuXG4gICAgaW5pdCgpO1xufSk7XG5cbiJdfQ==