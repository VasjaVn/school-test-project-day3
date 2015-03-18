"use strict";


var http = require('http'),
    url = require('url');

var routes = require('./routes');

function requestHandler( request, response ) {

    var requestUrl = url.parse( request.url, true );
    var method = request.method;

    if ( routes[method][requestUrl.pathname] ) {
        routes[method][requestUrl.pathname]( request, response );

    } else {
        response.statusCode = 404;
        response.end("Page not found");
    }
}

var server = http.createServer( requestHandler );

server.listen(8081);