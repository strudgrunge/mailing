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

app.use('/send', sendMailRoutes)

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})

