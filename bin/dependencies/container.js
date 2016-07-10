(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../references/elliptical'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../references/elliptical'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.elliptical);
        global.container = mod.exports;
    }
})(this, function (exports, _elliptical) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _elliptical2 = _interopRequireDefault(_elliptical);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var container = _elliptical2.default.container;

    var http = _elliptical2.default.http;
    var Service = _elliptical2.default.Service;
    var Location = _elliptical2.default.Location;
    var Event = _elliptical2.default.Event;
    var $Cookie = _elliptical2.default.$Cookie;
    var $Session = _elliptical2.default.$Session;
    var Sort = _elliptical2.default.Sort;
    var $Sort = _elliptical2.default.$Sort;
    var DomEvent = _elliptical2.default.DomEvent;
    var $Rest = _elliptical2.default.$Rest;
    var $Pagination = _elliptical2.default.$Pagination;

    //set Rest endpoint props
    $Rest.protocol = 'http';
    $Rest.host = '';
    $Rest.path = '/api';
    $Rest.port = 80;

    var $rest = new $Rest();

    //Google Rest
    var $googleRest = new $Rest({
        protocol: 'https',
        path: '/maps/api/geocode/json',
        port: 443,
        host: 'maps.googleapis.com'
    });

    class GeoService extends Service {}

    //define onSend handler to set basic authorization for requests
    $rest.onSend = function (options, entity, callback) {
        var token = $Cookie.get('token');
        options.authorization = http.encodeBasicToken(token);
        callback.call(this, null, options);
    };

    //asp.net OData prop settings for pagination
    Service.$paginationProvider = $Pagination;
    Service.$paginationProvider.count = 'count';
    Service.$paginationProvider.data = 'items';

    //registrations
    container.mapType('Service', Service, $rest);
    container.mapType('GeoService', GeoService, $googleRest);
    container.mapType('Sort', Sort, $Sort);
    container.mapType('Notify', _elliptical2.default.Notify, _elliptical2.default.$Notify);
    container.registerType('$Rest', $Rest);
    container.registerType('Location', Location);
    container.registerType('Event', Event);
    container.registerType('$Local', _elliptical2.default.$Local);
    container.registerType('$Cookie', $Cookie);
    container.registerType('$Session', $Session);
    container.registerType('DomEvent', DomEvent);
    container.registerType('$ViewData', _elliptical2.default.$ViewData);
    container.registerType('Search', _elliptical2.default.Search);
    container.registerType('crypto', _elliptical2.default.crypto);
    container.registerType('Store', _elliptical2.default.Store);

    exports.default = container;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcGVuZGVuY2llcy9jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsUUFBSSxZQUFVLHFCQUFXLFNBQXpCOztBQUVBLFFBQUksT0FBTyxxQkFBVyxJQUF0QjtBQUNBLFFBQUksVUFBVSxxQkFBVyxPQUF6QjtBQUNBLFFBQUksV0FBVyxxQkFBVyxRQUExQjtBQUNBLFFBQUksUUFBUSxxQkFBVyxLQUF2QjtBQUNBLFFBQUksVUFBVSxxQkFBVyxPQUF6QjtBQUNBLFFBQUksV0FBVyxxQkFBVyxRQUExQjtBQUNBLFFBQUksT0FBTyxxQkFBVyxJQUF0QjtBQUNBLFFBQUksUUFBUSxxQkFBVyxLQUF2QjtBQUNBLFFBQUksV0FBVyxxQkFBVyxRQUExQjtBQUNBLFFBQUksUUFBUSxxQkFBVyxLQUF2QjtBQUNBLFFBQUksY0FBYyxxQkFBVyxXQUE3Qjs7O0FBR0EsVUFBTSxRQUFOLEdBQWlCLE1BQWpCO0FBQ0EsVUFBTSxJQUFOLEdBQWEsRUFBYjtBQUNBLFVBQU0sSUFBTixHQUFhLE1BQWI7QUFDQSxVQUFNLElBQU4sR0FBYSxFQUFiOztBQUVBLFFBQUksUUFBUSxJQUFJLEtBQUosRUFBWjs7O0FBSUEsUUFBSSxjQUFjLElBQUksS0FBSixDQUFVO0FBQ3hCLGtCQUFVLE9BRGM7QUFFeEIsY0FBTSx3QkFGa0I7QUFHeEIsY0FBTSxHQUhrQjtBQUl4QixjQUFNO0FBSmtCLEtBQVYsQ0FBbEI7O0FBUUEsVUFBTSxVQUFOLFNBQXlCLE9BQXpCLENBQWlDOzs7QUFJakMsVUFBTSxNQUFOLEdBQWUsVUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCLFFBQTNCLEVBQXFDO0FBQ2hELFlBQUksUUFBUSxRQUFRLEdBQVIsQ0FBWSxPQUFaLENBQVo7QUFDQSxnQkFBUSxhQUFSLEdBQXdCLEtBQUssZ0JBQUwsQ0FBc0IsS0FBdEIsQ0FBeEI7QUFDQSxpQkFBUyxJQUFULENBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUExQjtBQUNILEtBSkQ7OztBQU9BLFlBQVEsbUJBQVIsR0FBOEIsV0FBOUI7QUFDQSxZQUFRLG1CQUFSLENBQTRCLEtBQTVCLEdBQW9DLE9BQXBDO0FBQ0EsWUFBUSxtQkFBUixDQUE0QixJQUE1QixHQUFtQyxPQUFuQzs7O0FBR0EsY0FBVSxPQUFWLENBQWtCLFNBQWxCLEVBQTZCLE9BQTdCLEVBQXNDLEtBQXRDO0FBQ0EsY0FBVSxPQUFWLENBQWtCLFlBQWxCLEVBQWdDLFVBQWhDLEVBQTRDLFdBQTVDO0FBQ0EsY0FBVSxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLElBQTFCLEVBQWdDLEtBQWhDO0FBQ0EsY0FBVSxPQUFWLENBQWtCLFFBQWxCLEVBQTRCLHFCQUFXLE1BQXZDLEVBQStDLHFCQUFXLE9BQTFEO0FBQ0EsY0FBVSxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLEtBQWhDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLFFBQW5DO0FBQ0EsY0FBVSxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLEtBQWhDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFFBQXZCLEVBQWlDLHFCQUFXLE1BQTVDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFNBQXZCLEVBQWtDLE9BQWxDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLFFBQW5DO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFVBQXZCLEVBQW1DLFFBQW5DO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFdBQXZCLEVBQW9DLHFCQUFXLFNBQS9DO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFFBQXZCLEVBQWlDLHFCQUFXLE1BQTVDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLFFBQXZCLEVBQWlDLHFCQUFXLE1BQTVDO0FBQ0EsY0FBVSxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLHFCQUFXLEtBQTNDOztzQkFHZSxTIiwiZmlsZSI6ImRlcGVuZGVuY2llcy9jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5cbnZhciBjb250YWluZXI9ZWxsaXB0aWNhbC5jb250YWluZXI7XG5cbnZhciBodHRwID0gZWxsaXB0aWNhbC5odHRwO1xudmFyIFNlcnZpY2UgPSBlbGxpcHRpY2FsLlNlcnZpY2U7XG52YXIgTG9jYXRpb24gPSBlbGxpcHRpY2FsLkxvY2F0aW9uO1xudmFyIEV2ZW50ID0gZWxsaXB0aWNhbC5FdmVudDtcbnZhciAkQ29va2llID0gZWxsaXB0aWNhbC4kQ29va2llO1xudmFyICRTZXNzaW9uID0gZWxsaXB0aWNhbC4kU2Vzc2lvbjtcbnZhciBTb3J0ID0gZWxsaXB0aWNhbC5Tb3J0O1xudmFyICRTb3J0ID0gZWxsaXB0aWNhbC4kU29ydDtcbnZhciBEb21FdmVudCA9IGVsbGlwdGljYWwuRG9tRXZlbnQ7XG52YXIgJFJlc3QgPSBlbGxpcHRpY2FsLiRSZXN0O1xudmFyICRQYWdpbmF0aW9uID0gZWxsaXB0aWNhbC4kUGFnaW5hdGlvbjtcblxuLy9zZXQgUmVzdCBlbmRwb2ludCBwcm9wc1xuJFJlc3QucHJvdG9jb2wgPSAnaHR0cCc7XG4kUmVzdC5ob3N0ID0gJyc7XG4kUmVzdC5wYXRoID0gJy9hcGknO1xuJFJlc3QucG9ydCA9IDgwO1xuXG52YXIgJHJlc3QgPSBuZXcgJFJlc3QoKTtcblxuXG4vL0dvb2dsZSBSZXN0XG52YXIgJGdvb2dsZVJlc3QgPSBuZXcgJFJlc3Qoe1xuICAgIHByb3RvY29sOiAnaHR0cHMnLFxuICAgIHBhdGg6ICcvbWFwcy9hcGkvZ2VvY29kZS9qc29uJyxcbiAgICBwb3J0OiA0NDMsXG4gICAgaG9zdDogJ21hcHMuZ29vZ2xlYXBpcy5jb20nXG59KTtcblxuXG5jbGFzcyBHZW9TZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG59XG5cbi8vZGVmaW5lIG9uU2VuZCBoYW5kbGVyIHRvIHNldCBiYXNpYyBhdXRob3JpemF0aW9uIGZvciByZXF1ZXN0c1xuJHJlc3Qub25TZW5kID0gZnVuY3Rpb24gKG9wdGlvbnMsIGVudGl0eSwgY2FsbGJhY2spIHtcbiAgICB2YXIgdG9rZW4gPSAkQ29va2llLmdldCgndG9rZW4nKTtcbiAgICBvcHRpb25zLmF1dGhvcml6YXRpb24gPSBodHRwLmVuY29kZUJhc2ljVG9rZW4odG9rZW4pO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgbnVsbCwgb3B0aW9ucyk7XG59O1xuXG4vL2FzcC5uZXQgT0RhdGEgcHJvcCBzZXR0aW5ncyBmb3IgcGFnaW5hdGlvblxuU2VydmljZS4kcGFnaW5hdGlvblByb3ZpZGVyID0gJFBhZ2luYXRpb247XG5TZXJ2aWNlLiRwYWdpbmF0aW9uUHJvdmlkZXIuY291bnQgPSAnY291bnQnO1xuU2VydmljZS4kcGFnaW5hdGlvblByb3ZpZGVyLmRhdGEgPSAnaXRlbXMnO1xuXG4vL3JlZ2lzdHJhdGlvbnNcbmNvbnRhaW5lci5tYXBUeXBlKCdTZXJ2aWNlJywgU2VydmljZSwgJHJlc3QpO1xuY29udGFpbmVyLm1hcFR5cGUoJ0dlb1NlcnZpY2UnLCBHZW9TZXJ2aWNlLCAkZ29vZ2xlUmVzdCk7XG5jb250YWluZXIubWFwVHlwZSgnU29ydCcsIFNvcnQsICRTb3J0KTtcbmNvbnRhaW5lci5tYXBUeXBlKCdOb3RpZnknLCBlbGxpcHRpY2FsLk5vdGlmeSwgZWxsaXB0aWNhbC4kTm90aWZ5KTtcbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRSZXN0JywgJFJlc3QpO1xuY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnTG9jYXRpb24nLCBMb2NhdGlvbik7XG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCdFdmVudCcsIEV2ZW50KTtcbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRMb2NhbCcsIGVsbGlwdGljYWwuJExvY2FsKTtcbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRDb29raWUnLCAkQ29va2llKTtcbmNvbnRhaW5lci5yZWdpc3RlclR5cGUoJyRTZXNzaW9uJywgJFNlc3Npb24pO1xuY29udGFpbmVyLnJlZ2lzdGVyVHlwZSgnRG9tRXZlbnQnLCBEb21FdmVudCk7XG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCckVmlld0RhdGEnLCBlbGxpcHRpY2FsLiRWaWV3RGF0YSk7XG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCdTZWFyY2gnLCBlbGxpcHRpY2FsLlNlYXJjaCk7XG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCdjcnlwdG8nLCBlbGxpcHRpY2FsLmNyeXB0byk7XG5jb250YWluZXIucmVnaXN0ZXJUeXBlKCdTdG9yZScsIGVsbGlwdGljYWwuU3RvcmUpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhaW5lcjtcbiJdfQ==