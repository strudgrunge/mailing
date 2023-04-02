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
        to: "sergiomusri@gmail.com", // list of receivers
        subject: `<h4>Mensaje de: ${req.body.name}</h4>
        <h5>Nombre: ${req.body.subject} </h5>
        <h5> Mail: ${req.body.email}</h5>
        `, // Subject line
        text: req.body.message, // plain text body
        // html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
    }).then(info => {
        console.log({ info });
    }).catch(console.error);
}