const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'couucouubeach@gmail.com',
        pass: 'coucou@123'
    }
});

transporter.use('compile' , hbs({
    viewEngine: 'express-handlebars' ,
    viewPath: '../public/views/'
}))

module.exports = (mailOptions) => {
    transporter.sendMail(mailOptions);
};
