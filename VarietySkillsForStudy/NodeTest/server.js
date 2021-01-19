// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Tyoe': 'text/plain'});
//     response.write('Hello nodeJS');
//     response.end();
// }).listen(8888);


// -----------------
var http = require('http');
function onRequest(request, response){
    response.writeHead(200, {'Content-Tyoe': 'text/plain'});
    response.write('Hello nodeJS');
    response.end();
}

http.createServer(onRequest).listen(8888);

// -----------------

var http = require('http');


// https://opentutorials.org/course/3332/21032