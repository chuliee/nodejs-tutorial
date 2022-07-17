var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var current_url = request.url;
    var query_data = url.parse(current_url, true).query;
    // console.log(current_url);
    // console.log(query_data.id);
    if(current_url == '/'){
        title = 'Welcome';
    }
    if(current_url == '/favicon.ico'){
        return response.writeHead(404);;
    }
    response.writeHead(200);
    var title = query_data.id
    fs.readFile(`data/${title}`, 'utf-8', function(err, description){
        var template = `
            <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">${title}</a></h1>
                    <ol>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ol>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
            </html>
        `;
        console.log(err)
        response.end(template)
    });
});
app.listen(3000);