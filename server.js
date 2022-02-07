const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(typeof req.query.num1)
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const add = (x, y) => {
    if ((x + y) > 10) return "sok";
    if ((x + y) < 0) return 0;
    return Math.floor(x + y);
};