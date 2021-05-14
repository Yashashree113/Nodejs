var fs = require("fs");

/*var createStream = fs.createWriteStream("A1Ques4.txt");
createStream.end();*/
var writeStream = fs.createWriteStream("A1Ques4.txt");
writeStream.write("hey ho! Let's go.");
writeStream.end();
