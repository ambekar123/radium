const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const midGlb= function (req, res, next) {
    //let today = new
    //console.log("Hi I am a GLOBAL middleware");
    //logic
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let Ip = req.ip;
    let Route = req.originalUrl;
    let dateTimeIpRoute = date+' '+time+' '+Ip+' '+Route;
    console.log(dateTimeIpRoute)
    next()    
}

app.use(midGlb)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user-open-to-all:hiPassword123@cluster0.xgk0k.mongodb.net/Tarun_H_Ambekar-database?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});