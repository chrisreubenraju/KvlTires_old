import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

export default async function handler(req, res) {
  const { to, subject, modifiedPdfData } = req.body;
  console.log("Received modifiedPdfData:", modifiedPdfData);

  

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to,
    subject,
    text: "Check out the modified PDF file attached.",
    attachments: [
      {
        filename: "modified-document.pdf",
        content: modifiedPdfData,
        encoding: "base64",
        contentType: "application/pdf",
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
