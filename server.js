// const nodemailer = require('nodemailer');
const express = require('express');
const sendMailRoutes = require('./routes/send')
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
// app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/contactform.html')
// })

// app.post('/', (req, res) => {
//     console.log('req.body', req.body);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'rurosurunironin1@gmail.com',
//             pass: 'potiynyuodeyhirw',
//         },
//     });
//     transporter.sendMail({
//         from: req.body.email, // sender address
//         to: "jvdesarrollo@gmail.com", // list of receivers
//         subject: `Message from ${req.body.name}: ${req.body.subject}`, // Subject line
//         text: req.body.message, // plain text body
//         // html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
//     }).then(info => {
//         console.log({ info });
//     }).catch(console.error);
// })

app.use('/send', sendMailRoutes)

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})

