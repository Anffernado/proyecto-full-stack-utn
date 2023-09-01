import { Router } from "express";
import { transporter } from "../utils/nodemailer.js"

const router = Router();

router.post('/', (req, res) => {
  console.log('Mail')
  const { name, fromEmail, subject, message } = req.body;

  const mailOptions = {
    from: fromEmail, // Origen del correo. Esto es el correo del usuario que llena el formulario
    to: 'anffernando01@gmail.com', // Tu dirección de correo donde quieres recibir las consultas
    subject: `${subject} - Mensaje de ${name}`,
    text: `De: ${name} (${fromEmail}) ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ success: false, msg: 'Error al enviar el correo' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send({ success: true, msg: 'Correo enviado correctamente' });
    }
  });

});

export default router;