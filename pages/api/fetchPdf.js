// pages/api/fetchPdf.js

import fetch from "node-fetch";
import getConfig from "next/config";


export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Fetch the PDF file from the external URL
const { publicRuntimeConfig } = getConfig();


      const pdfUrl = `${publicRuntimeConfig.BASE_URL}/Documents/Tires&PartsCreditApplication.pdf`;
      const response = await fetch(pdfUrl);

      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error("Failed to fetch PDF file");
      }

      // Convert the response to a buffer
      const pdfBuffer = await response.buffer();

      // Set the content type header
      res.setHeader("Content-Type", "application/pdf");

      // Serve the PDF file
      res.status(200).send(pdfBuffer);
    } catch (error) {
      console.error("Error fetching or serving PDF:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
