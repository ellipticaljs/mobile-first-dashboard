elliptical.module = (function (app) {
    var Service = elliptical.Service;
    var crypto=elliptical.crypto;
    var container = app.container;
    var Profile = Service.extend({
        "@resource": 'Profile',
        get: function(){
            var $Cookie=container.getType('$Cookie');
            return $Cookie.get('profile');
        },

        login: function (params,callback) {
            var notify=container.getType('Notify');
            this.$provider.post(params,'ProfileLogin',function(err,data){
                if(!err){
                    //success
                    var token=crypto.getBase64Token(params.username,params.password);
                    var $Cookie=container.getType('$Cookie');
                    $Cookie.set('token',token);
                    $Cookie.set('profile',data);
                    var Location=container.getType('Location');
                    var Event=container.getType('Event');
                    Event.emit('app.login',data);
                    notify.show('Login Successful');
                    Location.href='/';
                }else{
                    //failure
                    notify.show('Invalid Login');
                }
            });
        },

        logout:function(params,callback){
            var $Cookie=container.getType('$Cookie');
            $Cookie.delete('token');
            $Cookie.delete('profile');
            var Event=container.getType('Event');
            Event.emit('app.logout',null);
            if(callback){
                callback(null,{message:'You have been logged out from your account...'});
            }
        },

        authenticated:function(){
            var $Cookie=container.getType('$Cookie');
            var token=$Cookie.get('token');
            var profile=$Cookie.get('profile');
            return (token !==undefined && token) ? profile : null;
        }

    }, {});


    container.mapType('Profile',Profile, '$ProfileProvider');

    return app;
})(elliptical.module);