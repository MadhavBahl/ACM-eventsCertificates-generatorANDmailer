ACM Events Certificates AI and GAE
----------------------------------
A node script to print names of all participants on a certificate template, 
ACM event's artificial intelligence, and Google App Engine.

-- Install JIMP on the using npm install jimp


Basic usage

	Jimp.read("./path/to/image.jpg", function (err, image) {
   	 // do stuff with the image (if no exception) 
	});

Writing text

	Jimp.loadFont( path ).then(function (font) { // load font from .fnt file 
    	  image.print(font, x, y, str);        // print a message on an image 
    	  image.print(font, x, y, str, width); // print a message on an image with text wrapped at width 
	});
