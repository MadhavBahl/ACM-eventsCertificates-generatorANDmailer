var Jimp = require("jimp");
const fs = require('fs');

var x = 310;
var lgX = 283;
var xlX = 250;
var xxlX = 235;
var smX = 355;
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
    Jimp.read("base.png", function (err, image) {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // load font from .fnt file
        if(printObj[i].length < 14 && printObj[i].length > 6){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, x, y, printS).write("./certificates/op"+ i + ".jpg");        // print a message on an image
        }
        else if(printObj[i].length >= 20){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, xxlX , y, printS).write("./certificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length >= 16 && printObj[i].length < 20){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, xlX , y, printS).write("./certificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length >= 14 && printObj[i].length < 16){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, lgX , y, printS).write("./certificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length <= 6){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, smX , y, printS).write("./certificates/op"+ i + ".jpg");
        }

      });
    });
  }

});
