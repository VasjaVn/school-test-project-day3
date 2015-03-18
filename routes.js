
module.exports = {

    "GET": {
        "/users": require('./../usersController').getAction
    },

    "post": {
        "/users": require('./../usersController').postAction
    }
};
