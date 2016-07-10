(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './references/elliptical', './dependencies/container', './startup', './modules/menuHistory'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./references/elliptical'), require('./dependencies/container'), require('./startup'), require('./modules/menuHistory'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical, global.container, global.startup, global.menuHistory);
        global.app = mod.exports;
    }
})(this, function (exports, _elliptical, _container, _startup, _menuHistory) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    var _container2 = _interopRequireDefault(_container);

    var _startup2 = _interopRequireDefault(_startup);

    var _menuHistory2 = _interopRequireDefault(_menuHistory);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    //create the app
    var app = (0, _elliptical2.default)();

    var PRELOAD_DELAY = 0;
    var Progress = null;
    app.context.siteTitle = 'My Dashboard';
    app.context.displayTitle = ''; ///==='hide', to hide
    app.context.disableDashboard = ''; ///=='disabled', to disable
    app.context.fabHide = ''; ///=='hide', to hide

    //-------configuration-------------------------------------------------
    //views root
    var viewsRoot = '/mobile-first-dashboard/app/views';
    var $Template = _elliptical2.default.$Template; ///template provider
    $Template.setRoot(viewsRoot); ///set views root
    var View = _elliptical2.default.View;
    View.$provider = $Template;

    app.configure('production', function () {
        PRELOAD_DELAY = 3500;
    });

    app.configure(function () {
        //use hashTags for url routing
        app.hashTag = true;

        ///global callback to handle route authentication
        app.use(_elliptical2.default.globalCallback(function (req, res, next) {
            var tokenCookie = req.cookies.token;
            if (!tokenCookie && req.route !== '/profile/login') {
                res.redirect('/Profile/Login');
            } else {
                next();
            }
        }));

        //app.router
        app.use(app.router);

        //error
        app.use(_elliptical2.default.httpError());

        //http 404
        app.use(_elliptical2.default.http404());
    });

    //global View onBeforeRender callback
    app.onBeforeRender = function (req, res, context, callback) {
        if (!Progress) Progress = _container2.default.getType('Progress');
        Progress.end();
        callback(context);
    };

    //enable menu history
    (0, _menuHistory2.default)(app);

    //bind startup(routes)
    (0, _startup2.default)(app);

    //-------load toolbars,menu-----------------------------------------------------
    app.PRELOAD_DELAY = PRELOAD_DELAY;

    /* listen */
    app.listen(true, function () {
        //load in the menu and toolbar into the global layout on page load
        $.get(viewsRoot + '/shared/md-menu.html', function (data) {
            var menuPlaceholder = $('[data-menu-placeholder]');
            menuPlaceholder.html(data);
        });
        $.get(viewsRoot + '/shared/md-toolbar.html', function (data) {
            var toolbarPlaceholder = $('[data-toolbar-placeholder]');
            toolbarPlaceholder.html(data);
        });
        //set site title in title tag
        $('title').html(app.context.siteTitle);

        setTimeout(function () {
            $('body')[0].removeAttribute('preload');
            $('paper-drawer-panel').attr('style', '');
        }, PRELOAD_DELAY);
    }); //single page app

    exports.default = app;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsUUFBSSxNQUFNLDJCQUFWOztBQUVBLFFBQUksZ0JBQWdCLENBQXBCO0FBQ0EsUUFBSSxXQUFXLElBQWY7QUFDQSxRQUFJLE9BQUosQ0FBWSxTQUFaLEdBQXdCLGNBQXhCO0FBQ0EsUUFBSSxPQUFKLENBQVksWUFBWixHQUEyQixFQUEzQixDO0FBQ0EsUUFBSSxPQUFKLENBQVksZ0JBQVosR0FBK0IsRUFBL0IsQztBQUNBLFFBQUksT0FBSixDQUFZLE9BQVosR0FBc0IsRUFBdEIsQzs7OztBQUlBLFFBQUksWUFBWSxZQUFoQjtBQUNBLFFBQUksWUFBWSxxQkFBVyxTQUEzQixDO0FBQ0EsY0FBVSxPQUFWLENBQWtCLFNBQWxCLEU7QUFDQSxRQUFJLE9BQUsscUJBQVcsSUFBcEI7QUFDQSxTQUFLLFNBQUwsR0FBZSxTQUFmOztBQUdBLFFBQUksU0FBSixDQUFjLFlBQWQsRUFBNEIsWUFBWTtBQUNwQyx3QkFBZ0IsSUFBaEI7QUFDSCxLQUZEOztBQUlBLFFBQUksU0FBSixDQUFjLFlBQVk7O0FBRXRCLFlBQUksT0FBSixHQUFjLElBQWQ7OztBQUdBLFlBQUksR0FBSixDQUFRLHFCQUFXLGNBQVgsQ0FBMEIsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQjtBQUN4RCxnQkFBSSxjQUFjLElBQUksT0FBSixDQUFZLEtBQTlCO0FBQ0EsZ0JBQUksQ0FBQyxXQUFELElBQWdCLElBQUksS0FBSixLQUFjLGdCQUFsQyxFQUFvRDtBQUNoRCxvQkFBSSxRQUFKLENBQWEsZ0JBQWI7QUFDSCxhQUZELE1BRU87QUFDSDtBQUNIO0FBQ0osU0FQTyxDQUFSOzs7QUFVQSxZQUFJLEdBQUosQ0FBUSxJQUFJLE1BQVo7OztBQUdBLFlBQUksR0FBSixDQUFRLHFCQUFXLFNBQVgsRUFBUjs7O0FBR0EsWUFBSSxHQUFKLENBQVEscUJBQVcsT0FBWCxFQUFSO0FBQ0gsS0F0QkQ7OztBQTBCQSxRQUFJLGNBQUosR0FBcUIsVUFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixPQUFwQixFQUE2QixRQUE3QixFQUF1QztBQUN4RCxZQUFJLENBQUMsUUFBTCxFQUFlLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFYO0FBQ2YsaUJBQVMsR0FBVDtBQUNBLGlCQUFTLE9BQVQ7QUFDSCxLQUpEOzs7QUFPQSwrQkFBWSxHQUFaOzs7QUFHQSwyQkFBUSxHQUFSOzs7QUFHQSxRQUFJLGFBQUosR0FBb0IsYUFBcEI7OztBQUdBLFFBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBWTs7QUFFekIsVUFBRSxHQUFGLENBQU0sWUFBWSxzQkFBbEIsRUFBMEMsVUFBVSxJQUFWLEVBQWdCO0FBQ3RELGdCQUFJLGtCQUFrQixFQUFFLHlCQUFGLENBQXRCO0FBQ0EsNEJBQWdCLElBQWhCLENBQXFCLElBQXJCO0FBQ0gsU0FIRDtBQUlBLFVBQUUsR0FBRixDQUFNLFlBQVkseUJBQWxCLEVBQTZDLFVBQVUsSUFBVixFQUFnQjtBQUN6RCxnQkFBSSxxQkFBcUIsRUFBRSw0QkFBRixDQUF6QjtBQUNBLCtCQUFtQixJQUFuQixDQUF3QixJQUF4QjtBQUNILFNBSEQ7O0FBS0EsVUFBRSxPQUFGLEVBQVcsSUFBWCxDQUFnQixJQUFJLE9BQUosQ0FBWSxTQUE1Qjs7QUFFQSxtQkFBVyxZQUFZO0FBQ25CLGNBQUUsTUFBRixFQUFVLENBQVYsRUFBYSxlQUFiLENBQTZCLFNBQTdCO0FBQ0EsY0FBRSxvQkFBRixFQUF3QixJQUF4QixDQUE2QixPQUE3QixFQUFzQyxFQUF0QztBQUNILFNBSEQsRUFHRyxhQUhIO0FBS0gsS0FsQkQsRTs7c0JBb0JlLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsbGlwdGljYWwgZnJvbSAnLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuaW1wb3J0IHN0YXJ0dXAgZnJvbSAnLi9zdGFydHVwJztcbmltcG9ydCBtZW51SGlzdG9yeSBmcm9tICcuL21vZHVsZXMvbWVudUhpc3RvcnknO1xuXG4vL2NyZWF0ZSB0aGUgYXBwXG52YXIgYXBwID0gZWxsaXB0aWNhbCgpOyBcblxudmFyIFBSRUxPQURfREVMQVkgPSAwO1xudmFyIFByb2dyZXNzID0gbnVsbDtcbmFwcC5jb250ZXh0LnNpdGVUaXRsZSA9ICdNeSBEYXNoYm9hcmQnO1xuYXBwLmNvbnRleHQuZGlzcGxheVRpdGxlID0gJyc7Ly8vPT09J2hpZGUnLCB0byBoaWRlXG5hcHAuY29udGV4dC5kaXNhYmxlRGFzaGJvYXJkID0gJyc7IC8vLz09J2Rpc2FibGVkJywgdG8gZGlzYWJsZVxuYXBwLmNvbnRleHQuZmFiSGlkZSA9ICcnOyAvLy89PSdoaWRlJywgdG8gaGlkZVxuXG4vLy0tLS0tLS1jb25maWd1cmF0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy92aWV3cyByb290XG52YXIgdmlld3NSb290ID0gJy9hcHAvdmlld3MnO1xudmFyICRUZW1wbGF0ZSA9IGVsbGlwdGljYWwuJFRlbXBsYXRlOyAvLy90ZW1wbGF0ZSBwcm92aWRlclxuJFRlbXBsYXRlLnNldFJvb3Qodmlld3NSb290KTsgIC8vL3NldCB2aWV3cyByb290XG52YXIgVmlldz1lbGxpcHRpY2FsLlZpZXc7XG5WaWV3LiRwcm92aWRlcj0kVGVtcGxhdGU7XG5cblxuYXBwLmNvbmZpZ3VyZSgncHJvZHVjdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBQUkVMT0FEX0RFTEFZID0gMzUwMDtcbn0pO1xuXG5hcHAuY29uZmlndXJlKGZ1bmN0aW9uICgpIHtcbiAgICAvL3VzZSBoYXNoVGFncyBmb3IgdXJsIHJvdXRpbmdcbiAgICBhcHAuaGFzaFRhZyA9IHRydWU7XG4gICAgXG4gICAgLy8vZ2xvYmFsIGNhbGxiYWNrIHRvIGhhbmRsZSByb3V0ZSBhdXRoZW50aWNhdGlvblxuICAgIGFwcC51c2UoZWxsaXB0aWNhbC5nbG9iYWxDYWxsYmFjayhmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdmFyIHRva2VuQ29va2llID0gcmVxLmNvb2tpZXMudG9rZW47XG4gICAgICAgIGlmICghdG9rZW5Db29raWUgJiYgcmVxLnJvdXRlICE9PSAnL3Byb2ZpbGUvbG9naW4nKSB7XG4gICAgICAgICAgICByZXMucmVkaXJlY3QoJy9Qcm9maWxlL0xvZ2luJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9KSk7XG5cbiAgICAvL2FwcC5yb3V0ZXJcbiAgICBhcHAudXNlKGFwcC5yb3V0ZXIpO1xuXG4gICAgLy9lcnJvclxuICAgIGFwcC51c2UoZWxsaXB0aWNhbC5odHRwRXJyb3IoKSk7XG5cbiAgICAvL2h0dHAgNDA0XG4gICAgYXBwLnVzZShlbGxpcHRpY2FsLmh0dHA0MDQoKSk7XG59KTtcblxuXG4vL2dsb2JhbCBWaWV3IG9uQmVmb3JlUmVuZGVyIGNhbGxiYWNrXG5hcHAub25CZWZvcmVSZW5kZXIgPSBmdW5jdGlvbiAocmVxLCByZXMsIGNvbnRleHQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFQcm9ncmVzcykgUHJvZ3Jlc3MgPSBjb250YWluZXIuZ2V0VHlwZSgnUHJvZ3Jlc3MnKTtcbiAgICBQcm9ncmVzcy5lbmQoKTtcbiAgICBjYWxsYmFjayhjb250ZXh0KTtcbn07XG5cbi8vZW5hYmxlIG1lbnUgaGlzdG9yeVxubWVudUhpc3RvcnkoYXBwKTtcblxuLy9iaW5kIHN0YXJ0dXAocm91dGVzKVxuc3RhcnR1cChhcHApO1xuXG4vLy0tLS0tLS1sb2FkIHRvb2xiYXJzLG1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLlBSRUxPQURfREVMQVkgPSBQUkVMT0FEX0RFTEFZO1xuXG4vKiBsaXN0ZW4gKi9cbmFwcC5saXN0ZW4odHJ1ZSwgZnVuY3Rpb24gKCkge1xuICAgIC8vbG9hZCBpbiB0aGUgbWVudSBhbmQgdG9vbGJhciBpbnRvIHRoZSBnbG9iYWwgbGF5b3V0IG9uIHBhZ2UgbG9hZFxuICAgICQuZ2V0KHZpZXdzUm9vdCArICcvc2hhcmVkL21kLW1lbnUuaHRtbCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBtZW51UGxhY2Vob2xkZXIgPSAkKCdbZGF0YS1tZW51LXBsYWNlaG9sZGVyXScpO1xuICAgICAgICBtZW51UGxhY2Vob2xkZXIuaHRtbChkYXRhKTtcbiAgICB9KTtcbiAgICAkLmdldCh2aWV3c1Jvb3QgKyAnL3NoYXJlZC9tZC10b29sYmFyLmh0bWwnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgdG9vbGJhclBsYWNlaG9sZGVyID0gJCgnW2RhdGEtdG9vbGJhci1wbGFjZWhvbGRlcl0nKTtcbiAgICAgICAgdG9vbGJhclBsYWNlaG9sZGVyLmh0bWwoZGF0YSk7XG4gICAgfSk7XG4gICAgLy9zZXQgc2l0ZSB0aXRsZSBpbiB0aXRsZSB0YWdcbiAgICAkKCd0aXRsZScpLmh0bWwoYXBwLmNvbnRleHQuc2l0ZVRpdGxlKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JylbMF0ucmVtb3ZlQXR0cmlidXRlKCdwcmVsb2FkJyk7XG4gICAgICAgICQoJ3BhcGVyLWRyYXdlci1wYW5lbCcpLmF0dHIoJ3N0eWxlJywgJycpO1xuICAgIH0sIFBSRUxPQURfREVMQVkpO1xuXG59KTsgLy9zaW5nbGUgcGFnZSBhcHBcblxuZXhwb3J0IGRlZmF1bHQgYXBwOyJdfQ==