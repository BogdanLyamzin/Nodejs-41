const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
    to: "bogdan@gmail.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новое письмо с сайта",
    html: "<p>Вам новое письмо с сайта</p>"
}

sgMail.send(mail)
    .then(()=> console.log("Mail send"))
    .catch(error => console.log(error.message))