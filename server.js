require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Billing Form Submission
app.post('/submit/billing', (req, res) => {
    const formData = req.body;  // Form data from the billing form

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'billing@fdgmso.com, info@fdgmso.com, ediaz@fdgmso.com',
        subject: 'Billing Questionnaire Submitted',
        text: JSON.stringify(formData)  // The form data will be sent as a plain text string
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error " + err);
            res.status(500).send();
        } else {
            console.log("Email sent successfully");
            res.status(200).send();
        }
    });
});
//End of Billing Form

// Coding Form Submission
app.post('/submit/coding', (req, res) => {
  const formData = req.body;  // Form data from the billing form

  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
      }
  });

  let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'billing@fdgmso.com, info@fdgmso.com, ediaz@fdgmso.com',
      subject: 'Billing Questionnaire Submitted',
      text: JSON.stringify(formData)  // The form data will be sent as a plain text string
  };

  transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
          console.log("Error " + err);
          res.status(500).send();
      } else {
          console.log("Email sent successfully");
          res.status(200).send();
      }
  });
});
//End of Coding Form

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));