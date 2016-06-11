import container from '../dependencies/container';

var crypto = container.getType('crypto');
var $Cookie = container.getType('$Cookie');
var notify = container.getType('Notify');
var Event = container.getType('Event');

class Profile{
    get(){
        return $Cookie.get('profile'); 
    }
    
    login(params,callback){
        this.$provider.post(params, 'ProfileLogin', function (err, data) {
            if (!err) {
                //success
                var token = crypto.getBase64Token(params.username, params.password);
                var $Cookie = container.getType('$Cookie');
                $Cookie.set('token', token);
                $Cookie.set('profile', data);
                var Location = container.getType('Location');
                var Event = container.getType('Event');
                Event.emit('app.login', data);
                notify.show('Login Successful');
                Location.href = '/';
            } else {
                //failure
                notify.show('Invalid Login');
            }
        });    
    }
    
    logout(params,callback){
        $Cookie.delete('token');
        $Cookie.delete('profile');

        Event.emit('app.logout', null);
        if (callback) {
            callback(null, {message: 'You have been logged out from your account...'});
        }
    }
    
    authenticated(){
        var token = $Cookie.get('token');
        var profile = $Cookie.get('profile');
        return (token !== undefined && token) ? profile : null;
    }
}


container.mapType('Profile', Profile, '$ProfileProvider');

   