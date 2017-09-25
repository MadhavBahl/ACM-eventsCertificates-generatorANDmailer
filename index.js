var Jimp = require("jimp");
const fs = require('fs');

var x = 310;
var lgX = 283;
var xlX = 250;
var smX = 345;
var y = 487;

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
    Jimp.read("ai.png", function (err, image) {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // load font from .fnt file
        if(printObj[i].length < 14 && printObj[i].length > 6){
          console.log(printObj[i].length);
          image.print(font, x, y, printObj[i]).write("./certificates/aiOut"+ i + ".jpg");        // print a message on an image
        }
        else if(printObj[i].length >= 20){
          console.log(printObj[i].length);
          image.print(font, xlX , y, printObj[i]).write("./certificates/aiOut"+ i + ".jpg");
        }
        else if(printObj[i].length >= 14 && printObj[i].length < 20){
          console.log(printObj[i].length);
          image.print(font, lgX , y, printObj[i]).write("./certificates/aiOut"+ i + ".jpg");
        }
        else if(printObj[i].length <= 6){
          console.log(printObj[i].length);
          image.print(font, smX , y, printObj[i]).write("./certificates/aiOut"+ i + ".jpg");
        }

      });
    });
  }

});
