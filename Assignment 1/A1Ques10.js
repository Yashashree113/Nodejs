var fs = require("fs");
var createStream = fs.createWriteStream("myText.txt");
createStream.end();
fs.writeFile("myText.txt", "hey ho! Let's go", function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});
/*var writeStream = fs.createWriteStream("myText.txt");
writeStream.write("hey ho! Let's go.");
writeStream.end();*/
