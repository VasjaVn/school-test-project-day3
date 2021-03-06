var Users = require('./../users').Users;
var User  = require('./../users').User;

var users = new Users();

module.exports = {

    getAction: function( request, response ) {

        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.end( users.getAll() );
    },

    postAction: function( request, response ) {

        var dataPost = '';

        request.on('data', function (data) {
            dataPost += data;
        });

        request.on('end', function () {

            var isJsonFormat = true;

            try {
                JSON.parse(dataPost);

                var userData = eval( '(' + dataPost + ')' );
                var newUser = new User();

                newUser.setName( userData['name'] );
                newUser.setEmail( userData['email'] );
                newUser.setDescription( userData['description'] );
                newUser.setAge( userData['age'] );

                users.add( newUser );

            } catch ( e ) {
                isJsonFormat = false;
            }


            response.setHeader("Content-Type", "text/html");

            if ( isJsonFormat ) {
                response.statusCode = 200;
                response.end("post");

            } else {
                response.statusCode = 200; // ?!
                response.end("This is not JSON format of data.Please enter JSON format of date!");

            }

        });

    }
};


