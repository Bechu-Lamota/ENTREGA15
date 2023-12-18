const nodemailer = require('nodemailer')
const settings = require('../command/commander')

const MAIL = settings.nodemailer_user

const sendMail = async (subject, body) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
      user: MAIL,
      pass: settings.nodemailer_password
    }
  })

  const mailOptions = {
    from: 'Servidor AS',
    to: toEmail || MAIL,
    subject: subject,
    html: body
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw error;
  }
}

const purchaseMailReject = (userEmail) => ({
  from: `Shop Server AS <${settings.emailUser}>`,
  to: userEmail,
  subject: 'Purchase Reject Order',
  html: `<div>
           <h1>Lo sentimos ${userEmail}</h1>
           <p>No se pudo procesar su compra</p>
         </div>`,
  attachments: [],
})

module.exports = {
  sendMail,
  purchaseMailReject
}
