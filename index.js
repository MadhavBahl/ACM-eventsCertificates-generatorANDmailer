var Jimp = require("jimp");
const fs = require('fs');

fs.readFile('participants.json',(err,data) => {
  if(err) return console.log(err);
  var dataObj = JSON.parse(data);
  var len = dataObj.length;
  console.log(len);
  for(let i=0;i<len;i++) {
    console.log(dataObj[i].Name.split(" ")[0] + " " +  dataObj[i].Name.split(" ")[1]);
  }
});
