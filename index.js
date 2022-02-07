const fileSystem = require("fs");
const http = require("http");
const url = require("url");

const add = (x, y) => {
    if ((x + y) > 10) return "sok";
    if ((x + y) < 0) return 0;
    return Math.floor(x + y);
};

// fileSystem.writeFileSync("./myFile.txt", result.toString()); //myFile.txt-t létrehoz, beleírja az eredményt

//create a server object:
http
    .createServer(function (req, res) {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        const result = add(queryObject.num1, queryObject.num2);
        res.write(result.toString()); //write a response to the client
        res.end(); //end the response
    })
    .listen(8080); //the server object listens on port 8080
// http://localhost:8080/?num1=2&num2=5 ezt akarjuk elküldeni (query), hogyan? const queryObject... sorral kezdünk
// ha így futtatom először böngészőben fentit, akkor itt kiírja terminalba a dolgokat, ott meg hogy "sok", mert a 2 számot stringként kapja