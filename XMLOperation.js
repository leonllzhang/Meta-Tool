var fs = require('fs');
var xml2js=require('xml2js') ;
var path = require('path');



xmlFileToJs('./Metadata-Settings.config', function (err, obj) {
    if (err) throw (err);
    console.dir(JSON.stringify(obj));
    jsToXmlFile('./Metadata-Settings.js', obj, function (err) {
        if (err) console.log(err);
    })
});
// -----------------------------------------------------------------------
// readFile to JS
exports.xmlFileToJs = function (filename, cb) {
    var filepath = path.normalize(path.join(__dirname, filename));
    fs.readFile(filepath, 'utf8', function (err, xmlStr) {
        if (err) throw (err);
        xml2js.parseString(xmlStr, {}, cb);
    });    
}
// write obj to config
exports.jsToXmlFile = function(filename, obj, cb) {
    var filepath = path.normalize(path.join(__dirname, filename));
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);
    fs.writeFile(filepath, xml, cb);
}



// var parser = new xml2js.Parser();
// fs.readFile("./Metadata-Settings.config",function(e,v)
// {
//     console.log('源xml--->',e, v.toString()) ; //打印读取出来的xml
//     //解析xml
//     parser.parseString(v, function (err, result) {
//         console.dir(result);
//         console.log("niefengjun->",result.niefengjun);
//         console.log("niefengjun->cn",result.niefengjun.cn[0]);
//         console.log("niefengjun->welcome",result.niefengjun.welcome[0]);
//         console.log('Done');
//     });
// }
// )