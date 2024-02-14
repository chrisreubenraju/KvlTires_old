// pages/api/fetchPdf.js
import getConfig from "next/config";
  const { publicRuntimeConfig } = getConfig();

export default async function handler(req, res) {
  try {
    // Fetch the PDF document from wherever it's stored
    const pdfUrl = `${publicRuntimeConfig.BASE_URL}/Documents/Tires&PartsCreditApplication.pdf`; // Adjust the URL accordingly
    const response = await fetch(pdfUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch PDF");
    }

    const pdfBuffer = await response.buffer();
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error fetching PDF:", error);
    res.status(500).json({ error: "Failed to fetch PDF" });
  }
}
