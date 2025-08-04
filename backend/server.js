const nodemailer = require("nodemailer");

// Use your Brevo SMTP credentials
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: '93e200002@smtp-brevo.com', // Your Brevo SMTP user
    pass: 'TdaAG2PLgtbXCDUp',          // Your Brevo SMTP password
  },
});

// Replace Gmail sender with Brevo one
const mailOptionsUser = {
  from: '"Raghavendra from Query Responser" <93e200002@smtp-brevo.com>',
  to: formData.email,
  subject: 'Form Submission Confirmation',
  text: `Hello ${formData.name}, we received your submission.`,
};

const mailOptionsAdmin = {
  from: '"Query Responser Alert" <93e200002@smtp-brevo.com>',
  to: 'raghavendra0417k@gmail.com', // Replace with your admin email
  subject: 'New Form Submission Received',
  text: `
New submission received:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
College: ${formData.college}
Branch: ${formData.branch}
Year: ${formData.year}
Gender: ${formData.gender}
Project Domain: ${formData.domain}
Message: ${formData.message}
  `,
};