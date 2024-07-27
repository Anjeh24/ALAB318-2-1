//Building and testing sever

const express = require("express");
const app = express();
const port = 3000;

//creating routes

app.get('/', (req, res) => {
    res.send("This girl can code mehnnnn!!!!");
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}.`);
});