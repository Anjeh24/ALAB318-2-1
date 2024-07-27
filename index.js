//Building and testing sever

const express = require("express");
const app = express();
const port = 3000;

//creating routes with parameters using ':'

app.get('/', (req, res) => {
    res.send("This girl can code mehnnnn!!!!");
});
app.get('/About', (req, res) => {
   res.send ('I am called Anjeh and aspire to become a code wiz, oh I mean code witch, specifically a MERN HIGH PRIESTESS. \n Currently practicing how to write potions.');
});
app.get('/About/:studentID/summary', (req, res) => {
  res.send(`Go to my about page to figure out where I learnt to code; ${req.params.studentID} `);
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}.`);
});