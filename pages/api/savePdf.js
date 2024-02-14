// pages/api/savePdf.js

import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const saveDirectory = "pages/modDocs/";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { modifiedPdfData } = req.body;

    try {
      // Convert the base64 string to a Buffer
      const pdfBuffer = Buffer.from(modifiedPdfData, "base64");

      if (!fs.existsSync(saveDirectory)) {
        fs.mkdirSync(saveDirectory, { recursive: true });
      }

      const fileName = "Credit_Application.pdf";
      const filePath = path.join(saveDirectory, fileName);

      fs.writeFileSync(filePath, pdfBuffer);

      // Send email with the saved PDF attached
      try {
        const transporter = nodemailer.createTransport({
          // Configure your email transport options (SMTP, etc.)
          // For example, using a Gmail account:
          service: "outlook",
          auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.NEXT_PUBLIC_EMAIL,
          to: "crraju@kalfreight.com", 
          subject: "Credit Application from KvlTires",
          text: "Please find the attached PDF file for Credit Application.",
          attachments: [
            {
              filename: fileName,
              path: filePath,
            },
          ],
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        // Delete the saved PDF file after sending the email
        fs.unlinkSync(filePath);
        console.log("PDF file deleted successfully");
      } catch (emailError) {
        console.error("Error sending email:", emailError);
        res.status(500).json({
          success: false,
          message: "Error sending email",
        });
        return;
      }

      res.status(200).json({
        success: true,
        message: "PDF saved, email sent, and file deleted successfully",
      });
    } catch (error) {
      console.error("Error saving PDF:", error);
      res.status(500).json({
        success: false,
        message: `Internal Server Error: ${error.message}`,
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
