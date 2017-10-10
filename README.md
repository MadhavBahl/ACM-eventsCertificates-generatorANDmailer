Chapter Events Certificate Generator and Mailer
-----------------------------------------------
A node script to print names of all participants on a certificate template,
and mail them to students using nodemailer.

Basic info

	Jimp.read("./path/to/image.jpg", function (err, image) {
   	 // do stuff with the image (if no exception)
	});

		Writing text

		Jimp.loadFont( path ).then(function (font) { // load font from .fnt file
	    	  image.print(font, x, y, str);        // print a message on an image
	    	  image.print(font, x, y, str, width); // print a message on an image with text wrapped at width
		});

How To Use?

1. Install the required node modules using " npm install "
2. Keep the certificate template as "base.png" (preferably, 800x1200) and participants list as participants.json with Name and email fields in the root directory.

// ======= If not (800x1200) run node resize.js ======= //

3. Run index script using >> node index.js
4. The certificates will be generated in /certificates/
5. Host the certificates on a shared hosting to get url
6. Replace the url with the url where the certificates are hosted
7. Run email.js using >> node email.js and mail will be sent to the participants.
8. DONE :)
