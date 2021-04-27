var http = require("http");
const path = require("path");

/*path.join(__dirname, "test", "test.html", (req, res) => {
  res.write("Wasup?");
});*/

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
