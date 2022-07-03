const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'couucouubeach@gmail.com',
        pass: 'coucou@123'
    }
});

// transporter.use('compile' , hbs({
//     viewEngine: 'express-handlebars' ,
//     viewPath: '../public/views/'
// }))

exports.sendEmail = (content) => {
    let mailOptions = {
        from: 'couucouubeach@gmail.com',
        to: "bilelmek@gmail.com",
        // replyTo: 'couucouubeach@gmail.com',
        subject: "Test",
        html: content
    };
    transporter.sendMail(mailOptions , function (err, info) {
        if(err){
            console.log(err)
        }

    });
};
