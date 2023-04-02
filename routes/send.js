const express = require('express');


const sendMailController = require('../controllers/sendMail')

const router = express.Router();


router.post(
    "/mail",
    sendMailController.sendMail
);
module.exports = router;