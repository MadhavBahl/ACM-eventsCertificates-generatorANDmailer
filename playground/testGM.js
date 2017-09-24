// var fs = require('fs')
//   , gm = require('gm').subClass({imageMagick: true});
//
//   gm('/base.jpg')
//   .flip()
//   .magnify()
//   .rotate('green', 45)
//   .blur(7, 3)
//   .crop(300, 300, 150, 130)
//   .edge(3)
//   .write('/crazy.jpg', function (err) {
//     if (!err) console.log('crazytown has arrived');
//     else console.log(err);
//   })

var Jimp = require("jimp");

// open a file called "lenna.png"
// Jimp.read("ai.png", function (err, lenna) {
//     if (err) throw err;
//     lenna.resize(800, 1200)            // resize
//          .write("aiOut.jpg"); // save
// });

var str = 'Madhav Bahl';
var x = 300;
var y = 487;

Jimp.read("./playground/ai.png", function (err, image) {
  Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { // load font from .fnt file
      image.print(font, x, y, str).write("./playground/aiOut.jpg");        // print a message on an image
  });
});

// Jimp.loadFont( path ).then(function (font) { // load font from .fnt file
//     image.print(font, x, y, str);        // print a message on an image
//     image.print(font, x, y, str, width); // print a message on an image with text wrapped at width
// });
