import express from "express";
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors = require('cors');

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use('/', express.static('build'));
app.post('/sendemail', async (req, res) => {
 
    if (!req.body.name || !req.body.email || !req.body.message || !req.body.lang) {
        res.status(400).send('The form is not complete');
        return;
    }

    let transporter = nodemailer.createTransport({
        host: "BLABLA",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "info@uptoedge.com", // generated ethereal user
          pass: "BLABLA", // generated ethereal password
        },
      });
      try {
        let info = await transporter.sendMail({
            from: '"'+req.body.name+'" <'+req.body.email+'>', // sender address
            to: "info@uptoedge.com", // list of receivers
            subject: "Form Contact from Portfolio", // Subject line
            text: req.body.message, // plain text body
          });
        if (req.body.lang == "en"){
            let info2 = await transporter.sendMail({
                from: '"Uptoedge" <info@uptoedge.com>', // sender address
                to: req.body.email, // list of receivers
                subject: "Message submission (automatic response)", // Subject line
                text: 
`Hi ${req.body.name},

Thank you for having taken the time to contact me/
I'm feeling pretty lucky that you chose us.
I will answer you as soon as possible.

Best,
Vincent.
    `
              });   
        } else {
            let info2 = await transporter.sendMail({
                from: '"Uptoedge" <info@uptoedge.com>', // sender address
                to: req.body.email, // list of receivers
                subject: "Message Soumis (réponse automatique)", // Subject line
                text: 
`Bonjour ${req.body.name},

Merci pour avoir pris le temps de me contacter.
Je vous reponderais dans les plus bref délai.

Bonne journée,
Vincent.
    `
              });   
        }

          console.log(`Message to ${req.body.email} sent`)
          res.send('success');    
      } catch (error) {
            res.status(400).send('error')
      }
      // send mail with defined transport object

    

});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));