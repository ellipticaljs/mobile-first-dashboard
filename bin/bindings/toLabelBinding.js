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
        global.toLabelBinding = mod.exports;
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

    /// updates pagination labels on list/grid deletions


    var EVT_CHANNEL = 'list.change';

    _elliptical2.default.binding('to-label', function (node) {
        var Event = _container2.default.getType('Event');
        var count = {
            _value: null,
            get value() {
                if (this._value) return this._value;else {
                    this._value = parseInt($(node).text());
                    return this._value;
                }
            },

            set value(val) {
                this._value = val;
            }
        };

        var listen = Event.on(EVT_CHANNEL, onChange);

        function onChange(data) {
            var _count = count.value;
            _count = data.removed ? _count - data.removed : _count + data.added;
            $(node).text(_count);
            count.value = _count;
        }

        this.dispose = () => {
            Event.off(listen);
        };
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL3RvTGFiZWxCaW5kaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxRQUFJLGNBQWMsYUFBbEI7O0FBRUEseUJBQVcsT0FBWCxDQUFtQixVQUFuQixFQUErQixVQUFVLElBQVYsRUFBZ0I7QUFDM0MsWUFBSSxRQUFRLG9CQUFVLE9BQVYsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBLFlBQUksUUFBUTtBQUNSLG9CQUFRLElBREE7QUFFUixnQkFBSSxLQUFKLEdBQVk7QUFDUixvQkFBSSxLQUFLLE1BQVQsRUFBaUIsT0FBTyxLQUFLLE1BQVosQ0FBakIsS0FDSztBQUNELHlCQUFLLE1BQUwsR0FBYyxTQUFTLEVBQUUsSUFBRixFQUFRLElBQVIsRUFBVCxDQUFkO0FBQ0EsMkJBQU8sS0FBSyxNQUFaO0FBQ0g7QUFDSixhQVJPOztBQVVSLGdCQUFJLEtBQUosQ0FBVSxHQUFWLEVBQWU7QUFDWCxxQkFBSyxNQUFMLEdBQWMsR0FBZDtBQUNIO0FBWk8sU0FBWjs7QUFlQSxZQUFJLFNBQVMsTUFBTSxFQUFOLENBQVMsV0FBVCxFQUFzQixRQUF0QixDQUFiOztBQUVBLGlCQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0I7QUFDcEIsZ0JBQUksU0FBUyxNQUFNLEtBQW5CO0FBQ0EscUJBQVUsS0FBSyxPQUFOLEdBQWlCLFNBQVMsS0FBSyxPQUEvQixHQUF5QyxTQUFTLEtBQUssS0FBaEU7QUFDQSxjQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYjtBQUNBLGtCQUFNLEtBQU4sR0FBYyxNQUFkO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLEdBQWUsTUFBSztBQUNoQixrQkFBTSxHQUFOLENBQVUsTUFBVjtBQUNILFNBRkQ7QUFJSCxLQTlCRCIsImZpbGUiOiJiaW5kaW5ncy90b0xhYmVsQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyB1cGRhdGVzIHBhZ2luYXRpb24gbGFiZWxzIG9uIGxpc3QvZ3JpZCBkZWxldGlvbnNcbmltcG9ydCBlbGxpcHRpY2FsIGZyb20gJy4uL3JlZmVyZW5jZXMvZWxsaXB0aWNhbCc7XG5pbXBvcnQgY29udGFpbmVyIGZyb20gJy4uL2RlcGVuZGVuY2llcy9jb250YWluZXInO1xuXG5cbnZhciBFVlRfQ0hBTk5FTCA9ICdsaXN0LmNoYW5nZSc7XG5cbmVsbGlwdGljYWwuYmluZGluZygndG8tbGFiZWwnLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBFdmVudCA9IGNvbnRhaW5lci5nZXRUeXBlKCdFdmVudCcpO1xuICAgIHZhciBjb3VudCA9IHtcbiAgICAgICAgX3ZhbHVlOiBudWxsLFxuICAgICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VJbnQoJChub2RlKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgdmFsdWUodmFsKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbGlzdGVuID0gRXZlbnQub24oRVZUX0NIQU5ORUwsIG9uQ2hhbmdlKTtcblxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdmFyIF9jb3VudCA9IGNvdW50LnZhbHVlO1xuICAgICAgICBfY291bnQgPSAoZGF0YS5yZW1vdmVkKSA/IF9jb3VudCAtIGRhdGEucmVtb3ZlZCA6IF9jb3VudCArIGRhdGEuYWRkZWQ7XG4gICAgICAgICQobm9kZSkudGV4dChfY291bnQpO1xuICAgICAgICBjb3VudC52YWx1ZSA9IF9jb3VudDtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSAoKT0+IHtcbiAgICAgICAgRXZlbnQub2ZmKGxpc3Rlbik7XG4gICAgfTtcblxufSk7XG5cblxuICAiXX0=