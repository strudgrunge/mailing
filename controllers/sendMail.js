const nodemailer = require('nodemailer');
// `Message from ${req.body.name}: ${req.body.subject}`

exports.sendMail = (req, res) => {
    console.log('req.body', req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mailing.service.jv@gmail.com',
            pass: 'fqjaydaxzzsjwwgq',
        },
    });
    transporter.sendMail({
        from: `Consultas SM Seguridad - ${req.body.email}`, // sender address
        to: "smseguridadcba@gmail.com", // list of receivers
        subject: `Mensaje de: ${req.body.name}`, // Subject line
        html: `<h5>Asunto: ${req.body.subject} </h5>
        <h5> Mail: ${req.body.email}</h5>
        <p>${req.body.message}</p>
        `, // html body
        text: req.body.message, // plain text body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}