const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'zena.kiehn56@ethereal.email',
      pass: '8uAyHWkAmAN3Cud4fM',
    },
  });

  const info = await transporter.sendMail({
    from: '"FlavorUp " <flavorUp@gmail.com>', // sender address
    to: 'vinaykumarkajjapu, vinaykumarkajjapu2311@gmail.com', // list of receivers
    subject: 'Order Received', // Subject line
    text: 'You order have been received & Will reach you soon. Tq for ordering at FlavorUp?', // plain text body
    html: '<b>Order Received</b>', // html body
  });
  res.json(info);
};

module.exports = sendMail;
