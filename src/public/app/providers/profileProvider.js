import container from '../dependencies/container';

var profile = {
  id: 1,
  username: 'admin',
  password: 'admin',
  name: 'Admin'
};

class ProfileProvider{
  post(params, resource, callback){
    if (params.username === profile.username && params.password === profile.password) {
      callback(null, profile);
    } else {
      callback({statusCode: 401, message: 'Invalid Login'}, null);
    }
  }
}

container.registerType('$ProfileProvider', new ProfileProvider());
