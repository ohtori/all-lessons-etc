const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//body parser midd
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.render('contact', {layout: false});
});

app.post('/send', async (req, res) => {
  const output = `
    <p>You have new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name ${req.body.name}</li>
      <li>Company ${req.body.company}</li>
      <li>Email ${req.body.email}</li>
      <li>Phone ${req.body.phone}</li>
    </ul>
    <h3>Message: </h3>
    <p>${req.body.message}</p>
  `;
  async function main() {

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'ohtoriaketi@gmail.com', // generated ethereal user
        pass: '461895300677', // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Node mailer message" <ohtoriaketi@gmail.com>', // sender address
      to: "ohtori@mail.ru", // list of receivers
      subject: "Nodemailer request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    });
    res.render('contact', {msg: 'Email has ben sent', layout: false});
  }
  
  main().catch(console.error);
});

app.listen(PORT, () => {
  console.log('Server started on port:', PORT);
});