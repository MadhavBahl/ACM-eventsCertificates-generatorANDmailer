const fs = require('fs');

// var data = {
//   name: 'Madhav Bahl',
//   age: 19
// }

// fs.appendFile('./playground/test.txt',JSON.stringify(data),(err) => {
//   if(err) return console.log(err);
//   console.log(JSON.stringify(data,undefined,2));
// });

fs.readFile('participants.json',(err,data) => {
  if(err) return console.log(err);
  var dataObj = JSON.parse(data);
  var printObj =[];
  var len = dataObj.length;
  console.log(len);
  for(let i=0;i<len;i++) {
    if(dataObj[i].Name.split(" ")[1]){
      printObj.push(dataObj[i].Name.split(" ")[0] + " " +  dataObj[i].Name.split(" ")[1]);
      console.log(printObj[i]);
    }
    else {
      printObj.push(dataObj[i].Name.split(" ")[0]);
      console.log(printObj[i]);
    }
  }
});
