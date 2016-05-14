var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World\n');
}).listen(3000, "127.0.0.1");

var xmlop =  require('./XMLOperation');
xmlop.xmlFileToJs('./Metadata-Settings.config', function (err, obj) {
    if (err) throw (err);
    console.dir(JSON.stringify(obj));
    jsToXmlFile('./Metadata-Settings.js', obj, function (err) {
        if (err) console.log(err);
    })
});