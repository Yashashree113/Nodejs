var fs = require('fs');
const path = require('path');
const filePath = path.join("C:\Users\windows\Downloads\YASHU\Node-Assignments\A1Ques4.txt");
console.log('Reading the file ' + filePath+ '..');
fs.readFile(filePath, 'utf8', function(err, contentFile) {
    if (err) throw err;
    console.log('Returning the values of the file as a array:');
    var aContentFile = contentFile.split(' ');
    console.log(aContentFile);
});
