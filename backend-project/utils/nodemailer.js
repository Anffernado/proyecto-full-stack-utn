import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anffernando01@gmail.com',  // tu correo electrónico
    pass: 'qrncgexylbxkrbcd'          // tu contraseña
  }
});

/*let mailOptions = {
  from: 'anffernando01@gmail.com',
  to: 'anffernando01@gmail.com',
  subject: 'TEST - SERVER FROM ANGEL',
  text: 'Esto es un test'
};*/

/*transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});*/

export {
  transporter,
}