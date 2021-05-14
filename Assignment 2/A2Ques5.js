const express= require('express');
const bodyParser= require('body-parser');
const app= express();
app.set("view engine",'ejs');
var urlencodedParser=bodyParser.urlencoded({extended: false});
app.get('/', function(req, res){
  res.render("This is the form page");
});
app.get('/form',function(req, res){
  res.sendFile(__dirname+'/forms.html');
})
app.post('/form',urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('form',{qs: req.query});
  res.send(req.body.str.split('').reverse().join(''));
});
app.listen(3000);
