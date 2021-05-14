const express= require('express');
const app= express();
const port= process.env.PORT || 1337;
const moment= require('moment');
const today=moment();
app.get("/", function(req, res){
  res.send("Hello World!");
});
app.get('/time', function(req, res){
//  res.send("Current date and time: ");
  res.send("Today's date: "+ today.format('YYYY-MM-DD T HH-MM-SSZ'));
});
app.listen(1337);
