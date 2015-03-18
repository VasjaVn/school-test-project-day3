
module.exports = {

    "GET": {
        "/users": require('./lib/usersController').getAction
    },

    "POST": {
        "/users": require('./lib/usersController').postAction
    }
};
