// function sum(a,b){
//     return a+b;
// }

// console.log('sum = '+ sum(1,2));

var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000);

/*
protocol    host(domain)     port  path     query_string

http :// opentutorials.org : 3000/ main ? id=HTML&page=12

*/

// http://localhost/?id=HTML

App 파일을 이용해 본문구현