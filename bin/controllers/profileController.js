(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical', '../dependencies/container'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'), require('../dependencies/container'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container);
        global.profileController = mod.exports;
    }
})(this, function (exports, _elliptical, _container) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var $Cookie = _container2.default.getType('$Cookie');
    var Profile = _container2.default.getType('Profile');

    class Controller extends _elliptical2.default.Controller {
        Index(req, res, next) {
            let profile = $Cookie.get('profile');
            let id = profile.id;
            Profile.get({ id }, (err, data) => {
                try {
                    let context = { user: data };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            });
        }

        Login(req, res, next) {
            res.render();
        }

        Logout(req, res, next) {
            let profile = $Cookie.get('profile');
            let id = profile.id;
            Profile.logout({ id }, (err, data) => {
                try {
                    let message = err ? err.message : data.message;
                    let context = { message };
                    res.render(context);
                } catch (err) {
                    next(err);
                }
            });
        }

        Password(req, res, next) {
            let user = $Cookie.get('profile');
            let context = { user };
            res.render(context);
        }
    }
    exports.default = Controller;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Byb2ZpbGVDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsUUFBSSxVQUFVLG9CQUFVLE9BQVYsQ0FBa0IsU0FBbEIsQ0FBZDtBQUNBLFFBQUksVUFBVSxvQkFBVSxPQUFWLENBQWtCLFNBQWxCLENBQWQ7O0FBRWUsVUFBTSxVQUFOLFNBQXlCLHFCQUFXLFVBQXBDLENBQStDO0FBQzFELGNBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0I7QUFDbEIsZ0JBQUksVUFBVSxRQUFRLEdBQVIsQ0FBWSxTQUFaLENBQWQ7QUFDQSxnQkFBSSxLQUFLLFFBQVEsRUFBakI7QUFDQSxvQkFBUSxHQUFSLENBQVksRUFBQyxFQUFELEVBQVosRUFBa0IsQ0FBQyxHQUFELEVBQU0sSUFBTixLQUFjO0FBQzVCLG9CQUFJO0FBQ0Esd0JBQUksVUFBVSxFQUFDLE1BQU0sSUFBUCxFQUFkO0FBQ0Esd0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSCxpQkFIRCxDQUdFLE9BQU8sR0FBUCxFQUFZO0FBQ1YseUJBQUssR0FBTDtBQUNIO0FBQ0osYUFQRDtBQVFIOztBQUVELGNBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0I7QUFDbEIsZ0JBQUksTUFBSjtBQUNIOztBQUVELGVBQU8sR0FBUCxFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUI7QUFDbkIsZ0JBQUksVUFBVSxRQUFRLEdBQVIsQ0FBWSxTQUFaLENBQWQ7QUFDQSxnQkFBSSxLQUFLLFFBQVEsRUFBakI7QUFDQSxvQkFBUSxNQUFSLENBQWUsRUFBQyxFQUFELEVBQWYsRUFBcUIsQ0FBQyxHQUFELEVBQU0sSUFBTixLQUFjO0FBQy9CLG9CQUFJO0FBQ0Esd0JBQUksVUFBVyxHQUFELEdBQVEsSUFBSSxPQUFaLEdBQXNCLEtBQUssT0FBekM7QUFDQSx3QkFBSSxVQUFVLEVBQUMsT0FBRCxFQUFkO0FBQ0Esd0JBQUksTUFBSixDQUFXLE9BQVg7QUFDSCxpQkFKRCxDQUlFLE9BQU8sR0FBUCxFQUFZO0FBQ1YseUJBQUssR0FBTDtBQUNIO0FBQ0osYUFSRDtBQVNIOztBQUVELGlCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCO0FBQ3JCLGdCQUFJLE9BQU8sUUFBUSxHQUFSLENBQVksU0FBWixDQUFYO0FBQ0EsZ0JBQUksVUFBVSxFQUFDLElBQUQsRUFBZDtBQUNBLGdCQUFJLE1BQUosQ0FBVyxPQUFYO0FBQ0g7QUFwQ3lEO3NCQUF6QyxVIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3Byb2ZpbGVDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi4vcmVmZXJlbmNlcy9lbGxpcHRpY2FsJztcbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vZGVwZW5kZW5jaWVzL2NvbnRhaW5lcic7XG5cbnZhciAkQ29va2llID0gY29udGFpbmVyLmdldFR5cGUoJyRDb29raWUnKTtcbnZhciBQcm9maWxlID0gY29udGFpbmVyLmdldFR5cGUoJ1Byb2ZpbGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIGVsbGlwdGljYWwuQ29udHJvbGxlciB7XG4gICAgSW5kZXgocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbGV0IHByb2ZpbGUgPSAkQ29va2llLmdldCgncHJvZmlsZScpO1xuICAgICAgICBsZXQgaWQgPSBwcm9maWxlLmlkO1xuICAgICAgICBQcm9maWxlLmdldCh7aWR9LCAoZXJyLCBkYXRhKT0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB7dXNlcjogZGF0YX07XG4gICAgICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgTG9naW4ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgcmVzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIExvZ291dChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBsZXQgcHJvZmlsZSA9ICRDb29raWUuZ2V0KCdwcm9maWxlJyk7XG4gICAgICAgIGxldCBpZCA9IHByb2ZpbGUuaWQ7XG4gICAgICAgIFByb2ZpbGUubG9nb3V0KHtpZH0sIChlcnIsIGRhdGEpPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IChlcnIpID8gZXJyLm1lc3NhZ2UgOiBkYXRhLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnRleHQgPSB7bWVzc2FnZX07XG4gICAgICAgICAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIG5leHQoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgUGFzc3dvcmQocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgbGV0IHVzZXIgPSAkQ29va2llLmdldCgncHJvZmlsZScpO1xuICAgICAgICBsZXQgY29udGV4dCA9IHt1c2VyfTtcbiAgICAgICAgcmVzLnJlbmRlcihjb250ZXh0KTtcbiAgICB9XG59XG5cbiAgIFxuIl19