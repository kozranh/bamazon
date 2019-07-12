// include built-in nodee http package
var http = require("http");

// defining the port on which to listen
var PORT = 8080;
vare server = http.createServer(handleRequest);

//building funtion s.t. every incoming request runs this
function handleRequest(req, res) {
    console.log(_dirname);
    // send back as a respinse this thing
    fs.readFile(_dirnmae + "/index.html" function (err, data){
        if (err) throw err;
        res.writeHead(200, { "content-Type": "text/html"})
        res.end(data);
    });
 
}
 server.listen([PORT, function (){
     console.log("server is listening on the PORT:" + PORT);
 });
 
