const fs = require("fs");
let file = fs.readFileSync("A1Ques2.txt", "utf8");
let arr = file.split(/\r?\n/);

arr.forEach((line, idx,x)=> {
//  let count=0;
  //for(i=0;i<arr.length;i++)
    if(line.includes("Hi")){
      //if(x==arr[i])
      //  count++;
        //return count
    console.log((idx+1)+':'+ line);
    }
    //console.log(arr);
});
