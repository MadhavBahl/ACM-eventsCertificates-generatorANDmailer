var nodemailer = require('nodemailer');
var fs = require('fs');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'outreach.acmvit@gmail.com',
    pass: '*********'
  }
});

fs.readFile('participants.json',(err,data) => {
  if(err) return console.log(err);
  else {
    var dataObj = JSON.parse(data);
    var len = dataObj.length;
    console.log(len);


    for(var i=0; i<len; i++) {

      let currentObj = dataObj[i];
      console.log(currentObj);

      if(currentObj.emailSent === "No")
      {

      var send = `Dear ${currentObj.Name} (${currentObj.RegNo}),

Thank you for participating in ACM Workshop.
You can find your participation certificate at http://___EnterYourUrlHere___/Out${i}.jpg
Greetings from ACM VIT!
Regards,
Hardika Goyal
(Managing Director, ACM VITU)
http://acmvit.in`;

      var mailOptions = {
        from: 'outreach.acmvit@gmail.com',
        to: currentObj.email,
        subject: 'Workshop Certificate',
        text: send
      };

      transporter.sendMail(mailOptions,(err,info) => {
        if(err){
          return console.log('Error!!', err);
        } else {
          dataObj[i].emailSent = 'Yes';
          fs.writeFile('participants.json', JSON.stringify(dataObj,undefined,2), function (err) {
            if (err) return console.log('Data not saved!!!!!');
            console.log('Data was saved!!');
          });
          console.log('Mail was sent to',info);
        }
      });

      }

      else console.log('Email was already sent to: ',currentObj.Name);
    }
  }
});
