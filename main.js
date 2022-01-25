//send email by mail function
function sendEmail(email,subject,message) {
      var mailOptions = {
            from: '"MyApp" <
            '+email+'>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: message, // plaintext body
            html: message // html body
      };
      // send mail with defined transport object
      transport.sendMail(mailOptions, function(error, response) {
            if (error) {
                  console.log(error);
            } else {
                  console.log("Message sent: " + response.message);
            }
      }
      );
}
