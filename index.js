var Jimp = require("jimp");
const fs = require('fs');

var x = 279;
var lgX = 265;
var xlX = 220;
var xxlX = 205;
var smX = 375;
var y = 535;

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
    Jimp.read("base.jpg", function (err, image) {
      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // load font from .fnt file
        if(printObj[i].length < 14 && printObj[i].length > 6){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, x, y, printS).write("./GAEcertificates/op"+ i + ".jpg");        // print a message on an image
        }
        else if(printObj[i].length >= 20){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, xxlX , y, printS).write("./GAEcertificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length >= 16 && printObj[i].length < 20){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, xlX , y, printS).write("./GAEcertificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length >= 14 && printObj[i].length < 16){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, lgX , y, printS).write("./GAEcertificates/op"+ i + ".jpg");
        }
        else if(printObj[i].length <= 6){
          console.log(printObj[i].length);
          let printS = printObj[i].toString().toUpperCase();
          image.print(font, smX , y, printS).write("./GAEcertificates/op"+ i + ".jpg");
        }

      });
    });
  }

});
