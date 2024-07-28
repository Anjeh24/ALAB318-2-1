//Building and testing sever

const express = require("express");
const app = express();
const port = 3000;
//const download = require("download");

//adding and rendering template views , in this case, pug
app.set("view engine", "pug");



//creating middlewarer 'app.use with 3 argument which are req, res, next / noe to self, error handling midware take 4 arguments
const theMidWare = function (req, res, next){
    console.log('This middleware works');
    next();
};
app.use(theMidWare); //Tested it with the about route and yup, it works! Potion well mixed and tasted I mean test right!
app.use(express.static('./forstatic')); //Serving static files and it works good. Can be accessed at port. localhost:3000/renderstat.html

//creating routes with parameters using ':'

app.get('/', (req, res) => { //rendering template views. In this case, pug. IT works happy dance!
    res.render("index.pug");
});
app.get('/About', (req, res) => {
   res.send ('I am called Anjeh and aspire to become a code wiz, oh I mean code witch, specifically a MERN HIGH PRIESTESS. \n Currently practicing how to write potions.');
});
app.get('/About/:studentID/summary', (req, res) => {
  res.send(`Go to my about page to figure out where I learnt to code; ${req.params.studentID} `);
})

app.get('/downloadimage', (req, res) => {
    res.download("../images/pexels-xenyia-kovaleva-89812116-11199295.jpg");
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}.`);
});