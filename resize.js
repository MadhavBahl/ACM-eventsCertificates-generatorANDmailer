var Jimp = require("jimp");
const fs = require('fs');

Jimp.read("ENTER_YOUR_IMAGE_TO_RESIZE.png", function (err, lenna) {
    if (err) throw err;
    lenna.resize(800, 1200)            // resize
         .write("base.jpg"); // save
});
