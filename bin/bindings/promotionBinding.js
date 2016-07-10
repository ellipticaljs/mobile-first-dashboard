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
        global.promotionBinding = mod.exports;
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

    _elliptical2.default.binding('promotion', function (node) {
        var DiscountValidate = _container2.default.getType('DiscountValidate');
        var $ViewData = _container2.default.getType('$ViewData');
        var Location = _container2.default.getType('Location');
        var DomEvent = _container2.default.getType('DomEvent');
        var dom = new DomEvent(node, this);
        dom.event('md.checkbox.change', onCheckboxChange);
        dom.event('md.select.change', onSelectChange);
        dom.event('md.input.validate', onValidation);

        var datepicker = node.querySelector('md-datepicker');
        var discounts = dom.find('[data-discount]');
        var validate = node.querySelector('md-input-validate');

        function onCheckboxChange(event, data) {
            if (data.checked) datepicker.enable();else {
                datepicker.disable();
                datepicker.clear();
            }
        }

        function onSelectChange(event, data) {
            var value = data.value;
            discounts.addClass('hide');
            dom.find('[data-selection="' + value + '"]').removeClass('hide');
        }

        function onValidation(event, data) {
            var code = data.value;
            DiscountValidate.get({ code }, (err, data) => {
                if (err) validate.show('error');else validate.showSuccess();
            });
        }

        function bindDetail() {
            var route = Location.path;
            if (route.indexOf('/Detail') < 0) return;
            var element;
            var entity = $ViewData.get('promotion');
            if (entity.amount > 0) element = node.querySelector('[data-selection="DollarDiscount"]');else if (entity.percentage > 0) element = node.querySelector('[data-selection="PercentageDiscount"]');
            element.classList.remove('hide');
        }

        this.dispose = () => {
            dom.unbind();
        };

        bindDetail();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL3Byb21vdGlvbkJpbmRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlCQUFXLE9BQVgsQ0FBbUIsV0FBbkIsRUFBZ0MsVUFBVSxJQUFWLEVBQWdCO0FBQzVDLFlBQUksbUJBQW1CLG9CQUFVLE9BQVYsQ0FBa0Isa0JBQWxCLENBQXZCO0FBQ0EsWUFBSSxZQUFZLG9CQUFVLE9BQVYsQ0FBa0IsV0FBbEIsQ0FBaEI7QUFDQSxZQUFJLFdBQVcsb0JBQVUsT0FBVixDQUFrQixVQUFsQixDQUFmO0FBQ0EsWUFBSSxXQUFXLG9CQUFVLE9BQVYsQ0FBa0IsVUFBbEIsQ0FBZjtBQUNBLFlBQUksTUFBTSxJQUFJLFFBQUosQ0FBYSxJQUFiLEVBQW1CLElBQW5CLENBQVY7QUFDQSxZQUFJLEtBQUosQ0FBVSxvQkFBVixFQUFnQyxnQkFBaEM7QUFDQSxZQUFJLEtBQUosQ0FBVSxrQkFBVixFQUE4QixjQUE5QjtBQUNBLFlBQUksS0FBSixDQUFVLG1CQUFWLEVBQStCLFlBQS9COztBQUVBLFlBQUksYUFBYSxLQUFLLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBakI7QUFDQSxZQUFJLFlBQVksSUFBSSxJQUFKLENBQVMsaUJBQVQsQ0FBaEI7QUFDQSxZQUFJLFdBQVcsS0FBSyxhQUFMLENBQW1CLG1CQUFuQixDQUFmOztBQUVBLGlCQUFTLGdCQUFULENBQTBCLEtBQTFCLEVBQWlDLElBQWpDLEVBQXVDO0FBQ25DLGdCQUFJLEtBQUssT0FBVCxFQUFrQixXQUFXLE1BQVgsR0FBbEIsS0FDSztBQUNELDJCQUFXLE9BQVg7QUFDQSwyQkFBVyxLQUFYO0FBQ0g7QUFDSjs7QUFFRCxpQkFBUyxjQUFULENBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDO0FBQ2pDLGdCQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLHNCQUFVLFFBQVYsQ0FBbUIsTUFBbkI7QUFDQSxnQkFBSSxJQUFKLENBQVMsc0JBQXNCLEtBQXRCLEdBQThCLElBQXZDLEVBQTZDLFdBQTdDLENBQXlELE1BQXpEO0FBQ0g7O0FBRUQsaUJBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixJQUE3QixFQUFtQztBQUMvQixnQkFBSSxPQUFPLEtBQUssS0FBaEI7QUFDQSw2QkFBaUIsR0FBakIsQ0FBcUIsRUFBQyxJQUFELEVBQXJCLEVBQTZCLENBQUMsR0FBRCxFQUFNLElBQU4sS0FBYztBQUN2QyxvQkFBSSxHQUFKLEVBQVUsU0FBUyxJQUFULENBQWMsT0FBZCxFQUFWLEtBQ0ssU0FBUyxXQUFUO0FBQ1IsYUFIRDtBQUlIOztBQUVELGlCQUFTLFVBQVQsR0FBc0I7QUFDbEIsZ0JBQUksUUFBUSxTQUFTLElBQXJCO0FBQ0EsZ0JBQUksTUFBTSxPQUFOLENBQWMsU0FBZCxJQUEyQixDQUEvQixFQUFrQztBQUNsQyxnQkFBSSxPQUFKO0FBQ0EsZ0JBQUksU0FBUyxVQUFVLEdBQVYsQ0FBYyxXQUFkLENBQWI7QUFDQSxnQkFBSSxPQUFPLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUIsVUFBVSxLQUFLLGFBQUwsQ0FBbUIsbUNBQW5CLENBQVYsQ0FBdkIsS0FDSyxJQUFJLE9BQU8sVUFBUCxHQUFvQixDQUF4QixFQUEyQixVQUFVLEtBQUssYUFBTCxDQUFtQix1Q0FBbkIsQ0FBVjtBQUNoQyxvQkFBUSxTQUFSLENBQWtCLE1BQWxCLENBQXlCLE1BQXpCO0FBQ0g7O0FBRUQsYUFBSyxPQUFMLEdBQWUsTUFBSztBQUNoQixnQkFBSSxNQUFKO0FBQ0gsU0FGRDs7QUFJQTtBQUVILEtBcEREIiwiZmlsZSI6ImJpbmRpbmdzL3Byb21vdGlvbkJpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWxsaXB0aWNhbCBmcm9tICcuLi9yZWZlcmVuY2VzL2VsbGlwdGljYWwnO1xuaW1wb3J0IGNvbnRhaW5lciBmcm9tICcuLi9kZXBlbmRlbmNpZXMvY29udGFpbmVyJztcblxuXG5lbGxpcHRpY2FsLmJpbmRpbmcoJ3Byb21vdGlvbicsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIERpc2NvdW50VmFsaWRhdGUgPSBjb250YWluZXIuZ2V0VHlwZSgnRGlzY291bnRWYWxpZGF0ZScpO1xuICAgIHZhciAkVmlld0RhdGEgPSBjb250YWluZXIuZ2V0VHlwZSgnJFZpZXdEYXRhJyk7XG4gICAgdmFyIExvY2F0aW9uID0gY29udGFpbmVyLmdldFR5cGUoJ0xvY2F0aW9uJyk7XG4gICAgdmFyIERvbUV2ZW50ID0gY29udGFpbmVyLmdldFR5cGUoJ0RvbUV2ZW50Jyk7XG4gICAgdmFyIGRvbSA9IG5ldyBEb21FdmVudChub2RlLCB0aGlzKTtcbiAgICBkb20uZXZlbnQoJ21kLmNoZWNrYm94LmNoYW5nZScsIG9uQ2hlY2tib3hDaGFuZ2UpO1xuICAgIGRvbS5ldmVudCgnbWQuc2VsZWN0LmNoYW5nZScsIG9uU2VsZWN0Q2hhbmdlKTtcbiAgICBkb20uZXZlbnQoJ21kLmlucHV0LnZhbGlkYXRlJywgb25WYWxpZGF0aW9uKTtcblxuICAgIHZhciBkYXRlcGlja2VyID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdtZC1kYXRlcGlja2VyJyk7XG4gICAgdmFyIGRpc2NvdW50cyA9IGRvbS5maW5kKCdbZGF0YS1kaXNjb3VudF0nKTtcbiAgICB2YXIgdmFsaWRhdGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ21kLWlucHV0LXZhbGlkYXRlJyk7XG5cbiAgICBmdW5jdGlvbiBvbkNoZWNrYm94Q2hhbmdlKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLmNoZWNrZWQpIGRhdGVwaWNrZXIuZW5hYmxlKCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0ZXBpY2tlci5kaXNhYmxlKCk7XG4gICAgICAgICAgICBkYXRlcGlja2VyLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlbGVjdENoYW5nZShldmVudCwgZGF0YSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICBkaXNjb3VudHMuYWRkQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgZG9tLmZpbmQoJ1tkYXRhLXNlbGVjdGlvbj1cIicgKyB2YWx1ZSArICdcIl0nKS5yZW1vdmVDbGFzcygnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVmFsaWRhdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICB2YXIgY29kZSA9IGRhdGEudmFsdWU7XG4gICAgICAgIERpc2NvdW50VmFsaWRhdGUuZ2V0KHtjb2RlfSwgKGVyciwgZGF0YSk9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSAgdmFsaWRhdGUuc2hvdygnZXJyb3InKTtcbiAgICAgICAgICAgIGVsc2UgdmFsaWRhdGUuc2hvd1N1Y2Nlc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmluZERldGFpbCgpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gTG9jYXRpb24ucGF0aDtcbiAgICAgICAgaWYgKHJvdXRlLmluZGV4T2YoJy9EZXRhaWwnKSA8IDApIHJldHVybjtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG4gICAgICAgIHZhciBlbnRpdHkgPSAkVmlld0RhdGEuZ2V0KCdwcm9tb3Rpb24nKTtcbiAgICAgICAgaWYgKGVudGl0eS5hbW91bnQgPiAwKSBlbGVtZW50ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3Rpb249XCJEb2xsYXJEaXNjb3VudFwiXScpO1xuICAgICAgICBlbHNlIGlmIChlbnRpdHkucGVyY2VudGFnZSA+IDApIGVsZW1lbnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNlbGVjdGlvbj1cIlBlcmNlbnRhZ2VEaXNjb3VudFwiXScpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3Bvc2UgPSAoKT0+IHtcbiAgICAgICAgZG9tLnVuYmluZCgpO1xuICAgIH07XG5cbiAgICBiaW5kRGV0YWlsKCk7XG5cbn0pO1xuXG4gIl19