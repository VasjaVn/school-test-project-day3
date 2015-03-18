
module.exports = {

    "GET": {
        "/users": require('./../usersController').getAction
    },

    "POST": {
        "/users": require('./../usersController').postAction
    }
};
