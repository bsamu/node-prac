const fileSystem = require("fs");
const http = require("http");

const add = (x, y) => {
    if ((x + y) > 10) return "sok";
    if ((x + y) < 0) return 0;
    return Math.floor(x + y);
};

const result = add(2, 3);
fileSystem.writeFileSync("./myFile.txt", result.toString());

//create a server object:
http
    .createServer(function (req, res) {
        res.write(result.toString()); //write a response to the client
        res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080
