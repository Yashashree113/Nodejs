let ts = Date.now();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let date_ob = new Date(ts);
var day = date_ob.getDay();
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

console.log("Today is: "+daylist[day]+","+year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
