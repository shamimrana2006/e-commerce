const nodemailer = require("nodemailer");
const { error_res } = require("./responsed_handlling");

const email_sender = async ({ email, subject_txt, userName, data }) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail", // You can use any service like Yahoo, Outlook, etc.
      auth: {
        user: "shamimranaprofessional@gmail.com", // Your email
        pass: "wlzl lceu apwh rume", // Your email password
      },
    });
    let mailOptions = {
      from: '"e-commerce Verification" <shamimranaprofessional@gmail.com>', // Sender address
      to: email, // List of receivers
      subject: subject_txt, // Subject line
      text: "verifications", // Plain text body
      html: `
      <h1>Verification</h1>
      <h2>Hello ${userName}</h2>
      <h2>Your OTP code is ${data.otp}</h2>

    <form action="http://localhost:3000/api/user/registar/verify" method="post">
        <input style="display: none;" type="text" name="token" value="${data.token}">
        <input style="display: none;" type="text" name="shamim" value="shamim love you ">
        <button type="submit">verify</button>
    </form>
            `,
    };
    return (info = await transporter.sendMail(mailOptions));
  } catch (error) {
    throw new Error("faild to send email :", error);
  }
};

module.exports = { email_sender };
