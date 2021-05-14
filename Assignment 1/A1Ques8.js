const fs = require("fs");
let file = fs.readFileSync("A1Ques8.txt", "utf8");
let arr = file.split(/\r?\n/).map(Number);
function getArraySum(arr){
    var total=0;
    for(let i in arr) {
        total=total+arr[i];
    }
    return total;
}
var sum=getArraySum(arr);
console.log(sum);
/*let sum = 0;
for (let i = 1; i <=arr.length ; i++) {
    sum += arr[i];
  }
  */
console.log(arr);

//console.log('The sum of natural numbers:'+ sum);
