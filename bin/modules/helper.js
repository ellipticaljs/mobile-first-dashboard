(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.helper = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var helper = {
        getOrderNotesVisibility: orderResult => {
            if (!orderResult.notes) return 'hide';else return '';
        },
        promoCodes: data => {
            if (data.discount) {
                var promotion = {};
                var codes = '';
                var items = data.discountItems;
                var length = items.length;
                var max = length - 1;
                for (var i = 0; i < length; i++) {
                    codes += items[i].code;
                    if (i < max) codes += ', ';
                }
                promotion.codes = codes;
                return promotion;
            } else return null;
        },
        getUserType: data => {
            if (data.isAuthenticatedUser) return 'Registered User';else return 'Anonymous User';
        },
        getAddress: address => {
            return address.street + ", " + address.city + ", " + address.state + " " + address.zipCode;
        }
    };

    exports.default = helper;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZXMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsUUFBSSxTQUFPO0FBQ1AsaUNBQXlCLFdBQUQsSUFBZTtBQUNuQyxnQkFBRyxDQUFDLFlBQVksS0FBaEIsRUFBdUIsT0FBTyxNQUFQLENBQXZCLEtBQ0ssT0FBTyxFQUFQO0FBQ1IsU0FKTTtBQUtQLG9CQUFZLElBQUQsSUFBUTtBQUNmLGdCQUFHLEtBQUssUUFBUixFQUFpQjtBQUNiLG9CQUFJLFlBQVUsRUFBZDtBQUNBLG9CQUFJLFFBQU0sRUFBVjtBQUNBLG9CQUFJLFFBQU0sS0FBSyxhQUFmO0FBQ0Esb0JBQUksU0FBTyxNQUFNLE1BQWpCO0FBQ0Esb0JBQUksTUFBSSxTQUFPLENBQWY7QUFDQSxxQkFBSSxJQUFJLElBQUUsQ0FBVixFQUFZLElBQUUsTUFBZCxFQUFxQixHQUFyQixFQUF5QjtBQUNyQiw2QkFBTyxNQUFNLENBQU4sRUFBUyxJQUFoQjtBQUNBLHdCQUFHLElBQUUsR0FBTCxFQUFVLFNBQVEsSUFBUjtBQUNiO0FBQ0QsMEJBQVUsS0FBVixHQUFnQixLQUFoQjtBQUNBLHVCQUFPLFNBQVA7QUFDSCxhQVpELE1BWU0sT0FBTyxJQUFQO0FBQ1QsU0FuQk07QUFvQlAscUJBQWEsSUFBRCxJQUFRO0FBQ2hCLGdCQUFHLEtBQUssbUJBQVIsRUFBNkIsT0FBTyxpQkFBUCxDQUE3QixLQUNLLE9BQU8sZ0JBQVA7QUFDUixTQXZCTTtBQXdCUCxvQkFBWSxPQUFELElBQVc7QUFDbEIsbUJBQU8sUUFBUSxNQUFSLEdBQWlCLElBQWpCLEdBQXdCLFFBQVEsSUFBaEMsR0FBdUMsSUFBdkMsR0FBOEMsUUFBUSxLQUF0RCxHQUE4RCxHQUE5RCxHQUFvRSxRQUFRLE9BQW5GO0FBQ0g7QUExQk0sS0FBWDs7c0JBNkJlLE0iLCJmaWxlIjoibW9kdWxlcy9oZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudmFyIGhlbHBlcj17XG4gICAgZ2V0T3JkZXJOb3Rlc1Zpc2liaWxpdHk6KG9yZGVyUmVzdWx0KT0+e1xuICAgICAgICBpZighb3JkZXJSZXN1bHQubm90ZXMpIHJldHVybiAnaGlkZSc7XG4gICAgICAgIGVsc2UgcmV0dXJuICcnO1xuICAgIH0sXG4gICAgcHJvbW9Db2RlczooZGF0YSk9PntcbiAgICAgICAgaWYoZGF0YS5kaXNjb3VudCl7XG4gICAgICAgICAgICB2YXIgcHJvbW90aW9uPXt9O1xuICAgICAgICAgICAgdmFyIGNvZGVzPScnO1xuICAgICAgICAgICAgdmFyIGl0ZW1zPWRhdGEuZGlzY291bnRJdGVtcztcbiAgICAgICAgICAgIHZhciBsZW5ndGg9aXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIG1heD1sZW5ndGgtMTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8bGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgY29kZXMrPWl0ZW1zW2ldLmNvZGU7XG4gICAgICAgICAgICAgICAgaWYoaTxtYXgpIGNvZGVzICs9JywgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21vdGlvbi5jb2Rlcz1jb2RlcztcbiAgICAgICAgICAgIHJldHVybiBwcm9tb3Rpb247XG4gICAgICAgIH1lbHNlIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgZ2V0VXNlclR5cGU6KGRhdGEpPT57XG4gICAgICAgIGlmKGRhdGEuaXNBdXRoZW50aWNhdGVkVXNlcikgcmV0dXJuICdSZWdpc3RlcmVkIFVzZXInO1xuICAgICAgICBlbHNlIHJldHVybiAnQW5vbnltb3VzIFVzZXInO1xuICAgIH0sXG4gICAgZ2V0QWRkcmVzczooYWRkcmVzcyk9PntcbiAgICAgICAgcmV0dXJuIGFkZHJlc3Muc3RyZWV0ICsgXCIsIFwiICsgYWRkcmVzcy5jaXR5ICsgXCIsIFwiICsgYWRkcmVzcy5zdGF0ZSArIFwiIFwiICsgYWRkcmVzcy56aXBDb2RlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlbHBlcjtcbiJdfQ==