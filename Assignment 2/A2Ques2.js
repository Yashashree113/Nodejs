const express = require('express');
const app = express();
const port = 3000;
let ts = Date.now();
let date_ob = new Date(ts);
let year = date_ob.getFullYear();
let age=
let dob= year.getFullYear()-
app.get('/', (req, res) => {
  res.send('You were born in '+)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost/year?age=22:${port}`)
})
