const nodemailer = require('nodemailer');
// `Message from ${req.body.name}: ${req.body.subject}`

exports.sendMail = (req, res) => {
    console.log('req.body', req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rurosurunironin1@gmail.com',
            pass: 'potiynyuodeyhirw',
        },
    });
    transporter.sendMail({
        from: `Consultas SM Seguridad - ${req.body.email}`, // sender address
        to: "jvdesarrollo@gmail.com", // list of receivers
        subject: `Message from ${req.body.name}: ${req.body.subject}`, // Subject line
        text: req.body.message, // plain text body
        // html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}