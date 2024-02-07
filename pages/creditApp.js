import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import credbg from "../Assets/Images/Home/credbg.jpg";
import { PDFDocument, rgb } from "pdf-lib";
import getConfig from "next/config";


const CreditApp = () => {
  const [modifiedPdfBlob, setModifiedPdfBlob] = useState("");
  const [kvlrep, setKvlRep] = useState("");
  const [kvlTiresAmount, setKvlTiresAmount] = useState("");
  const [kalPartzAmount, setKalPartzAmount] = useState("");
  const [others, setOthers] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [legalName, setLegalName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [businessStreet, setBusinessStreet] = useState("");
  const [businessCounty, setBusinessCounty] = useState("");
  const [businessCity, setBusinessCity] = useState("");
  const [businessState, setBusinessState] = useState("");
  const [businessZip, setBusinessZip] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [businessFax, setBusinessFax] = useState("");
  const [businessCellPhone, setBusinessCellPhone] = useState("");
  const [businessMail, setBusinessMail] = useState("");
  const [billingContact, setBillingContact] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingCounty, setBillingCounty] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");
  const [billingPhone, setBillingPhone] = useState("");
  const [billingMail, setBillingMail] = useState("");
  const [stateBusiness, setStateBusiness] = useState("");
  const [businessId, setBuisnessId] = useState("");
  const [typeOfBusiness, setTypeOfBusiness] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [parentCompany, setParentCompany] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [applicantTitle, setApplicantTitle] = useState("");
  const [applicantOwnership, setApplicantOwnership] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [applicantMail, setApplicantMail] = useState("");
  const [applicantStreet, setApplicantStreet] = useState("");
  const [applicantCounty, setApplicantCounty] = useState("");
  const [applicantCity, setApplicantCity] = useState("");
  const [applicantState, setApplicantState] = useState("");
  const [applicantZip, setApplicantZip] = useState("");
  const [yesExplain, setYesExplain] = useState("");
  const [referenceBank, setReferenceBank] = useState("");
  const [referenceContact, setReferenceContact] = useState("");
  const [referencePhone, setReferencePhone] = useState("");
  const [referenceMail, setReferenceMail] = useState("");
  const [referenceAccNum, setReferenceAccNum] = useState("");
  const [referenceBankTwo, setReferenceBankTwo] = useState("");
  const [referenceContactTwo, setReferenceContactTwo] = useState("");
  const [referencePhoneTwo, setReferencePhoneTwo] = useState("");
  const [referenceMailTwo, setReferenceMailTwo] = useState("");
  const [referenceAccNumTwo, setReferenceAccNumTwo] = useState("");
  const [signatureTitleOne, setSignatureTitleOne] = useState("");
  const [signatureDateOne, setSignatureDateOne] = useState("");
  const [signatureTitleTwo, setSignatureTitleTwo] = useState("");
  const [signatureDateTwo, setSignatureDateTwo] = useState("");
  const signatureCanvasOne = useRef(null);
  const signatureCanvasTwo = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [selectedOptionOne, setSelectedOptionOne] = useState("");
  const [selectedOptionTwo, setSelectedOptionTwo] = useState("");
  const [selectedOptionThree, setSelectedOptionThree] = useState("");
  const [selectedOptionFour, setSelectedOptionFour] = useState("");
  const [selectedOptionFive, setSelectedOptionFive] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [buttonText, setButtonText] = useState("Submit");

  const resetForm = () => {
    // Reset all form fields here
    setKvlRep("");
    setKvlTiresAmount("");
    setKalPartzAmount("");
    setOthers("");
    setLegalName("");
    setTradeName("");
    setTaxId("");
    setDateOfBirth("");
    setBusinessStreet("");
    setBusinessCounty("");
    setBusinessCity("");
    setBusinessZip("");
    setBusinessState("");
    setBusinessPhone("");
    setBusinessFax("");
    setBusinessCellPhone("");
    setBusinessMail("");
    setBillingContact("");
    setBillingAddress("");
    setBillingCounty("");
    setBillingCity("");
    setBillingState("");
    setBillingZip("");
    setBillingPhone("");
    setBillingMail("");
    setStateBusiness("");
    setBuisnessId("");
    setYearsInBusiness("");
    setParentCompany("");
    setApplicantName("");
    setApplicantTitle("");
    setApplicantOwnership("");
    setSocialSecurityNumber("");
    setBirthdate("");
    setApplicantMail("");
    setApplicantStreet("");
    setApplicantCity("");
    setApplicantState("");
    setApplicantZip("");
    setYesExplain("");
    setReferenceBank("");
    setReferenceContact("");
    setReferencePhone("");
    setReferenceMail("");
    setReferenceAccNum("");
    setReferenceBankTwo("");
    setReferenceContactTwo("");
    setReferencePhoneTwo("");
    setReferenceMailTwo("");
    setReferenceAccNumTwo("");
    setSignatureTitleOne("");
    setSignatureDateOne("");
    setSignatureTitleTwo("");
    setSignatureDateTwo("");
    setSelectedOptionOne("");
    setSelectedOptionTwo("");
    setSelectedOptionThree("");
    setSelectedOptionFour("");
    setSelectedOptionFive("");
    signatureCanvasOne("");
    signatureCanvasTwo("");
    setError(false);
    setButtonText("Submit");
    setSuccess(false);
  };

  // Prepare your data for submission
  const data = {
    kvlrep,
    kvlTiresAmount,
    kalPartzAmount,
    others,
    legalName,
    tradeName,
    taxId,
    dateOfBirth,
    businessStreet,
    businessCounty,
    businessCity,
    businessState,
    businessZip,
    businessPhone,
    businessFax,
    businessCellPhone,
    billingContact,
    billingAddress,
    billingCounty,
    billingCity,
    billingState,
    billingZip,
    billingPhone,
    billingMail,
    stateBusiness,
    businessId,
    typeOfBusiness,
    yearsInBusiness,
    parentCompany,
    applicantName,
    applicantTitle,
    applicantOwnership,
    socialSecurityNumber,
    birthdate,
    applicantMail,
    applicantStreet,
    applicantCounty,
    applicantCity,
    applicantState,
    applicantZip,
    yesExplain,
    referenceBank,
    referenceContact,
    referencePhone,
    referenceMail,
    referenceAccNum,
    referenceBankTwo,
    referenceContactTwo,
    referencePhoneTwo,
    referenceMailTwo,
    referenceAccNumTwo,
    signatureTitleOne,
    signatureDateOne,
    signatureTitleTwo,
    signatureDateTwo,
    signatureCanvasOne,
    signatureCanvasTwo,
    error,
    selectedOptionOne,
    selectedOptionTwo,
    selectedOptionThree,
    selectedOptionFour,
    selectedOptionFive,
  };

  const handleClearSignatureOne = () => {
    signatureCanvasOne.current.clear();
  };

  const handleClearSignatureTwo = () => {
    signatureCanvasTwo.current.clear();
  };

  const { publicRuntimeConfig } = getConfig();

  const handleGenerateModifiedPdf = async () => {
    try {
      // Fetch the PDF file
      const pdfUrl = `${publicRuntimeConfig.BASE_URL}/Documents/Tires&PartsCreditApplication.pdf`;
      const response = await fetch(pdfUrl);

      // Check if the fetch was successful
      if (!response.ok) {
        console.error("Error fetching original PDF:", response.statusText);
        alert("Error fetching original PDF. Please try again.");
        return;
      }

      const existingPdfBytes = await response.arrayBuffer();

      const loadedPdfDoc = await PDFDocument.load(existingPdfBytes);
      setPdfDoc(loadedPdfDoc); // Set pdfDoc in state

      // Load existing PDF
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Access the first page
      const page = pdfDoc.getPage(0); // Adjust the page number accordingly

      if (selectedOptionOne === "kvltires") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 146,
          y: 683,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }
      page.drawText(`${kvlTiresAmount}`, {
        x: 255,
        y: 689,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });

      if (selectedOptionOne === "kalpartz") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 351,
          y: 683,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      page.drawText(`${kalPartzAmount}`, {
        x: 470,
        y: 689,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });

      if (selectedOptionOne === "cod") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 146,
          y: 660,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "corporation") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 100,
          y: 630,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "limitedLiabComp") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 226,
          y: 630,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "trust") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 526,
          y: 630,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "generalPartnership") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 377,
          y: 630,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "soleProprietor") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 100,
          y: 620,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "limitedPartnership") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 226,
          y: 620,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "municipality") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 377,
          y: 620,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionTwo === "others") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 524,
          y: 621,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }
      // Add text to the page
      page.drawText(`${others}`, {
        x: 90,
        y: 647,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });

      if (selectedOptionThree === "pono") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 129,
          y: 610,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionThree === "poyes") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 172,
          y: 610,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionFour === "teno") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 341,
          y: 610,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionFour === "teyes") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 377,
          y: 610,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      // Add text to the page
      page.drawText(`${legalName}`, {
        x: 90,
        y: 578,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${tradeName}`, {
        x: 110,
        y: 563,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${taxId}`, {
        x: 470,
        y: 578,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${dateOfBirth}`, {
        x: 350,
        y: 578,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessStreet}`, {
        x: 80,
        y: 551,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessCounty}`, {
        x: 307,
        y: 551,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessCity}`, {
        x: 388,
        y: 551,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessState}`, {
        x: 488,
        y: 551,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessZip}`, {
        x: 540,
        y: 551,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessPhone}`, {
        x: 69,
        y: 538,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessFax}`, {
        x: 165,
        y: 538,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessCellPhone}`, {
        x: 275,
        y: 538,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessMail}`, {
        x: 392,
        y: 538,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingContact}`, {
        x: 105,
        y: 513,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingAddress}`, {
        x: 105,
        y: 525,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingCounty}`, {
        x: 307,
        y: 525,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingCity}`, {
        x: 388,
        y: 525,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingState}`, {
        x: 484,
        y: 525,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingZip}`, {
        x: 540,
        y: 525,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingPhone}`, {
        x: 307,
        y: 513,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${billingMail}`, {
        x: 392,
        y: 513,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${stateBusiness}`, {
        x: 190,
        y: 500,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${businessId}`, {
        x: 500,
        y: 500,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${typeOfBusiness}`, {
        x: 105,
        y: 488,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${yearsInBusiness}`, {
        x: 438,
        y: 487,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${parentCompany}`, {
        x: 172,
        y: 475,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantName}`, {
        x: 182,
        y: 445,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantTitle}`, {
        x: 420,
        y: 445,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantOwnership}`, {
        x: 550,
        y: 445,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${socialSecurityNumber}`, {
        x: 115,
        y: 431,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${birthdate}`, {
        x: 249,
        y: 431,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantMail}`, {
        x: 335,
        y: 432,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantStreet}`, {
        x: 70,
        y: 419,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantCounty}`, {
        x: 310,
        y: 419,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantCity}`, {
        x: 386,
        y: 419,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantState}`, {
        x: 487,
        y: 419,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${applicantZip}`, {
        x: 537,
        y: 419,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });

      if (selectedOptionFive === "brno") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 525,
          y: 369,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }

      if (selectedOptionFive === "bryes") {
        const tickMark = "\u2022"; // Unicode character for a tick mark
        page.drawText(tickMark, {
          x: 326,
          y: 369,
          tickMark,
          size: 30,
          fontColor: rgb(0, 0, 0),
        });
      }
      page.drawText(`${yesExplain}`, {
        x: 386,
        y: 376,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceBank}`, {
        x: 40,
        y: 327,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceContact}`, {
        x: 190,
        y: 327,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referencePhone}`, {
        x: 295,
        y: 327,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceMail}`, {
        x: 378,
        y: 327,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceAccNum}`, {
        x: 475,
        y: 327,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceBankTwo}`, {
        x: 40,
        y: 314,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceContactTwo}`, {
        x: 190,
        y: 314,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referencePhoneTwo}`, {
        x: 295,
        y: 314,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceMailTwo}`, {
        x: 378,
        y: 314,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${referenceAccNumTwo}`, {
        x: 475,
        y: 314,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${signatureTitleOne}`, {
        x: 355,
        y: 124,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${signatureDateOne}`, {
        x: 520,
        y: 124,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${signatureTitleTwo}`, {
        x: 355,
        y: 105,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });
      page.drawText(`${signatureDateTwo}`, {
        x: 520,
        y: 105,
        size: 9,
        fontColor: rgb(0, 0, 0),
      });

      // Add signature image to the page
      const signatureImageOne = await pdfDoc.embedPng(
        signatureCanvasOne.current.toDataURL("image/png")
      );

      const signatureImageTwo = await pdfDoc.embedPng(
        signatureCanvasTwo.current.toDataURL("image/png")
      );

      // Assuming 'page' is a reference to a pdf-lib page object
      page.drawImage(signatureImageOne, {
        x: 120,
        y: 124,
        width: 100,
        height: 25,
      });
      page.drawImage(signatureImageTwo, {
        x: 120,
        y: 102,
        width: 100,
        height: 25,
      });

      // const handleFileUpload = (e) => {
      //   // Your file upload logic goes here
      //   const file = e.target.files[0];
      //   setUploadedFile(file);
      // };

      const modifiedPdfBytes = await pdfDoc.save();
      console.log("Modified PDF bytes:", modifiedPdfBytes);

      if (!modifiedPdfBytes) {
        console.error("Modified PDF bytes are null.");
        // Handle this case accordingly
        return;
      }


      const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
        type: "application/pdf",
      });

      setModifiedPdfBlob(modifiedPdfBlob);

      // Open the modified PDF in a new tab
      window.open(URL.createObjectURL(modifiedPdfBlob), "_blank");
    } catch (error) {
      console.error("Error generating modified PDF:", error);
      alert("Error generating modified PDF. Please try again.");
    }
};

    const handleSubmit = async (e) => {
  e.preventDefault();
  setButtonText("Saving PDF...");

  try {
    if (!pdfDoc) {
      console.error("PDF document not initialized.");
      setButtonText("Submit");
      return;
    }

    // Check if the modified PDF is already generated
    if (!modifiedPdfBlob) {
      // Generate modified PDF and set Blob if not already generated
      const modifiedPdfBytes = await pdfDoc.save();
      console.log("Modified PDF bytes:", modifiedPdfBytes);

      if (!modifiedPdfBytes) {
        console.error("Modified PDF bytes are null.");
        setButtonText("Submit");
        return;
      }

       
      const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
        type: "application/pdf",
      });

      setModifiedPdfBlob(modifiedPdfBlob);
    }

 // Show a confirmation dialog
      const userConfirmed = window.confirm("Do you want to submit the form?");
      if (!userConfirmed) {
        setButtonText("Submit");
        return;
      }


    // Use FileReader to convert the Blob to base64
    const reader = new FileReader();

    // Define a promise to wait for the base64 data to be read
    const readBase64Data = () => {
      return new Promise((resolve) => {
        reader.onloadend = () => {
          const base64Data = reader.result.split(",")[1];
          // Log the base64 data
          console.log("Base64 Data:", base64Data);
          resolve(base64Data);
        };
      });
    };

    // Start reading the Blob as data URL
    reader.readAsDataURL(modifiedPdfBlob);

    // Wait for the base64 data to be read
    const base64Data = await readBase64Data();

    // Send data to the backend
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        modifiedPdfData: base64Data,
      }),
    };

    const response = await fetch("/api/savePdf", requestOptions);
    const result = await response.json();

    if (result.success) {
      console.log("PDF saved and email sent successfully");
    } else {
      console.error("Error saving PDF:", result.message);
    }

    setButtonText("Submit"); // Reset button text
  } catch (error) {
    console.error("Error saving PDF:", error);
    setButtonText("Submit"); // Reset button text in case of an error
  }
};

  

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setButtonText("Saving PDF..."); // Set the button text accordingly

        try {
          await handleGenerateModifiedPdf(e); // Wait for handleGenerateModifiedPdf to complete
          await handleSubmit(e); // Call handleSubmit after handleGenerateModifiedPdf

          // Additional logic or actions after both functions are executed
        } catch (error) {
          console.error("Error during form submission:", error);
        } finally {
          setButtonText("Submit"); // Reset button text regardless of success or failure
        }
      }}
      className="w-full md:p-8 p-4 lg:flex flex justify-center items-center font-Helvetica"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage: `url(${credbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(5px)",
      }}
    >
      <h2 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
        Credit Application
      </h2>
      <div
        className="w-full lg:w-2/3  md:p-8 p-4 grid-section"
        style={{ border: "solid 2px black" }}
      >
        {/* <label>
          KVL Rep:
          <input
            type="text"
            value={kvlrep}
            onChange={(e) => setKvlRep(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br> */}
        <div>
          <div>
            <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
              Requesting Credit With:
            </h3>
          </div>

          <div className="w-full lg:w-2/3 md:p-8 p-4 grid-section">
            <div>
              <input
                type="radio"
                value="kvltires"
                id="kvltires"
                name="kvltires"
                checked={selectedOptionOne === "kvltires"}
                onChange={() => setSelectedOptionOne("kvltires")}
              />
              <label htmlFor="kvltires">
                KVL TIRES: Amount $
                <input
                  type="text"
                  value={kvlTiresAmount}
                  onChange={(e) => setKvlTiresAmount(e.target.value)}
                  className="underlined-input"
                />
              </label>
              <input
                type="radio"
                value="kalpartz"
                id="kalpartz"
                name="kalpartz"
                checked={selectedOptionOne === "kalpartz"}
                onChange={() => setSelectedOptionOne("kalpartz")}
              />
              <label htmlFor="kalpartz">
                KAL PARTZ: Amount $
                <input
                  type="text"
                  value={kalPartzAmount}
                  onChange={(e) => setKalPartzAmount(e.target.value)}
                  className="underlined-input"
                />
              </label>
              <input
                type="radio"
                value="cod"
                id="cod"
                name="cod"
                checked={selectedOptionOne === "cod"}
                onChange={() => setSelectedOptionOne("cod")}
              />
              <label>COD</label>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-full  md:p-8 p-4 grid-section">
          <div>
            <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
              Applyin As:
            </h3>
          </div>
          <br></br>
          <div className="w-full lg:w-full md:p-8 p-4 grid-section-radio">
            <div>
              <input
                type="radio"
                value="corporation"
                id="corporation"
                name="applyingAs"
                checked={selectedOptionTwo === "corporation"}
                onChange={() => setSelectedOptionTwo("corporation")}
              />
              <label htmlFor="corporation">CORPORATION</label>
            </div>
            <div>
              <input
                type="radio"
                value="limitedLiabComp"
                id="limitedLiabComp"
                name="applyingAs"
                checked={selectedOptionTwo === "limitedLiabComp"}
                onChange={() => setSelectedOptionTwo("limitedLiabComp")}
              />
              <label htmlFor="limitedLiabComp">LIMITED LIABILITY COMPANY</label>
            </div>
            <div>
              <input
                type="radio"
                value="trust"
                id="trust"
                name="applyingAs"
                checked={selectedOptionTwo === "trust"}
                onChange={() => setSelectedOptionTwo("trust")}
              />
              <label htmlFor="trust">TRUST</label>
            </div>
            <div>
              <input
                type="radio"
                value="generalPartnership"
                id="generalPartnership"
                name="applyingAs"
                checked={selectedOptionTwo === "generalPartnership"}
                onChange={() => setSelectedOptionTwo("generalPartnership")}
              />
              <label htmlFor="generalPartnership">GENERAL PARTNERSHIP </label>
            </div>
            <div>
              <input
                type="radio"
                value="soleProprietor"
                id="soleProprietor"
                name="applyingAs"
                checked={selectedOptionTwo === "soleProprietor"}
                onChange={() => setSelectedOptionTwo("soleProprietor")}
              />
              <label htmlFor="soleProprietor">SOLE PROPRIETOR</label>
            </div>
            <div>
              <input
                type="radio"
                value="limitedPartnership"
                id="limitedPartnership"
                name="applyingAs"
                checked={selectedOptionTwo === "limitedPartnership"}
                onChange={() => setSelectedOptionTwo("limitedPartnership")}
              />
              <label htmlFor="limitedPartnership">LIMITED PARTNERSHIP</label>
            </div>
            <div>
              <input
                type="radio"
                value="municipality"
                id="municipality"
                name="applyingAs"
                checked={selectedOptionTwo === "municipality"}
                onChange={() => setSelectedOptionTwo("municipality")}
              />
              <label htmlFor="municipality">MUNICIPALITY</label>
            </div>
            <div>
              <input
                type="radio"
                value="others"
                id="others"
                name="applyingAs"
                checked={selectedOptionTwo === "others"}
                onChange={() => setSelectedOptionTwo("others")}
              />
              <label htmlFor="others">OTHER</label>
              <input
                type="text"
                value={others}
                onChange={(e) => setOthers(e.target.value)}
                className="underlined-input"
              />
            </div>
          </div>
          <div className="w-full lg:w-full grid-section">
            <div>
              <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
                P.O. Required?
              </h3>
            </div>
            <br></br>
            <div className="w-full lg:w-full md:p-8 p-4">
              <div>
                <input
                  type="radio"
                  value="pono"
                  id="pono"
                  name="porequired"
                  checked={selectedOptionThree === "pono"}
                  onChange={() => setSelectedOptionThree("pono")}
                />
                <label htmlFor="porequired">NO</label>
              </div>
            </div>
            <div className="w-full lg:w-full md:p-8 p-4">
              <div>
                <input
                  type="radio"
                  value="poyes"
                  id="poyes"
                  name="porequired"
                  checked={selectedOptionThree === "poyes"}
                  onChange={() => setSelectedOptionThree("poyes")}
                />
                <label htmlFor="porequired">YES</label>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-full grid-section">
            <div>
              <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
                Tax Exempt?
              </h3>
            </div>
            <br></br>
            <div className="w-full lg:w-full md:p-8 p-4">
              <div>
                <input
                  type="radio"
                  value="teno"
                  id="teno"
                  name="taxExempt"
                  checked={selectedOptionFour === "teno"}
                  onChange={() => setSelectedOptionFour("teno")}
                />
                <label htmlFor="taxExempt">NO</label>
              </div>
            </div>
            <div className="w-full lg:w-full md:p-8 p-4">
              <div>
                <input
                  type="radio"
                  value="teyes"
                  id="teyes"
                  name="taxExempt"
                  checked={selectedOptionFour === "teyes"}
                  onChange={() => {
                    setSelectedOptionFour("teyes");
                    setUploadedFile(null); // Clear uploaded file when 'fleet' is selected
                  }}
                />
                <label htmlFor="teyes">
                  YES (Attach Exemption Certificate)
                </label>
              </div>

              {/* {selectedOptionFour === "teyes" && (
                <div>
                  <label htmlFor="fileUpload">
                    Upload Exemption Certificate (PDF)
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </div>
              )} */}
            </div>
          </div>
        </div>

        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Full Legal Business Name and Address of Corporation, LLC,
            Partnership, Trust, Sole Proprietor, or Municipality (*Required if
            Individual)
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Legal Name:
          <input
            type="text"
            value={legalName}
            onChange={(e) => setLegalName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Trade Name:
          <input
            type="text"
            value={tradeName}
            onChange={(e) => setTradeName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Federal Tax ID#:
          <input
            type="number"
            value={taxId}
            onChange={(e) => setTaxId(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Date Of Birth:
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            value={businessStreet}
            onChange={(e) => setBusinessStreet(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          County:
          <input
            type="text"
            value={businessCounty}
            onChange={(e) => setBusinessCounty(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={businessCity}
            onChange={(e) => setBusinessCity(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={businessState}
            onChange={(e) => setBusinessState(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Zip:
          <input
            type="number"
            value={businessZip}
            onChange={(e) => setBusinessZip(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={businessPhone}
            onChange={(e) => setBusinessPhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Fax:
          <input
            type="number"
            value={businessFax}
            onChange={(e) => setBusinessFax(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Cell Phone:
          <input
            type="number"
            value={businessCellPhone}
            onChange={(e) => setBusinessCellPhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={businessMail}
            onChange={(e) => setBusinessMail(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>

        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Billing Address
          </h3>{" "}
        </div>
        <br></br>
        <label>
          Billing Contact Name:
          <input
            type="text"
            value={billingContact}
            onChange={(e) => setBillingContact(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          County:
          <input
            type="text"
            value={billingCounty}
            onChange={(e) => setBillingCounty(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={billingCity}
            onChange={(e) => setBillingCity(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={billingState}
            onChange={(e) => setBillingState(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Zip:
          <input
            type="number"
            value={billingZip}
            onChange={(e) => setBillingZip(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={billingPhone}
            onChange={(e) => setBillingPhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={billingMail}
            onChange={(e) => setBillingMail(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          State Business Incorporated or Registered:
          <input
            type="text"
            value={stateBusiness}
            onChange={(e) => setStateBusiness(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Business ID (Registration) Number:
          <input
            type="text"
            value={businessId}
            onChange={(e) => setBuisnessId(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Type of Business:
          <input
            type="text"
            value={typeOfBusiness}
            onChange={(e) => setTypeOfBusiness(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Years in Business:
          <input
            type="number"
            value={yearsInBusiness}
            onChange={(e) => setYearsInBusiness(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Parent Company Name and Address:
          <input
            type="text"
            value={parentCompany}
            onChange={(e) => setParentCompany(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>
        <div>
          <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
            Applicant(s) Legal Name and Information – Personal, Officer,
            Partner, Member or Municipal Contact Information (*Required if
            Individual)
          </h3>{" "}
        </div>
        <br></br>
        <br></br>
        <label>
          Full Legal Name - *First, *Middle, *Last:
          <input
            type="text"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={applicantTitle}
            onChange={(e) => setApplicantTitle(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Ownership:
          <input
            type="number"
            value={applicantOwnership}
            onChange={(e) => setApplicantOwnership(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Social Security #:
          <input
            type="number"
            value={socialSecurityNumber}
            onChange={(e) => setSocialSecurityNumber(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={applicantMail}
            onChange={(e) => setApplicantMail(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            value={applicantStreet}
            onChange={(e) => setApplicantStreet(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          County:
          <input
            type="tex"
            value={applicantCounty}
            onChange={(e) => setApplicantCounty(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={applicantCity}
            onChange={(e) => setApplicantCity(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={applicantState}
            onChange={(e) => setApplicantState(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Zip:
          <input
            type="text"
            value={applicantZip}
            onChange={(e) => setApplicantZip(e.target.value)}
            className="underlined-input"
          />
        </label>

        <br></br>
        <div className="w-full lg:w-full grid-section">
          <div>
            <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
              Any Prior Bankruptcy or Active Liens/Judgments?
            </h3>
          </div>
          <br></br>
          <div className="w-full lg:w-full md:p-8 p-4 grid-section-radio">
            <div>
              <input
                type="radio"
                value="brno"
                id="brno"
                name="bankruptcy"
                checked={selectedOptionFive === "brno"}
                onChange={() => setSelectedOptionFive("brno")}
              />
              <label htmlFor="brno">NO</label>
            </div>
          </div>
          <div className="w-full lg:w-full md:p-8 p-4 grid-section-radio">
            <div>
              <input
                type="radio"
                value="bryes"
                id="bryes"
                name="bankruptcy"
                checked={selectedOptionFive === "bryes"}
                onChange={() => setSelectedOptionFive("bryes")}
              />
              <label htmlFor="bryes">YES (Explain)</label>
              <input
                type="text"
                value={yesExplain}
                onChange={(e) => setYesExplain(e.target.value)}
                className="underlined-input"
              />
            </div>
          </div>
        </div>

        <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
          General Information and References (All Applicants Except Governmental
          Agencies)
        </h3>
        <br></br>
        <h3 className="lg:text-xl text-md font-bold font-poppins text-left pt-8 text-black">
          First Person
        </h3>
        <br></br>
        <label>
          REQUIRED *Bank and Trade:
          <input
            type="text"
            value={referenceBank}
            onChange={(e) => setReferenceBank(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={referenceContact}
            onChange={(e) => setReferenceContact(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={referencePhone}
            onChange={(e) => setReferencePhone(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={referenceMail}
            onChange={(e) => setReferenceMail(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Account Numbers:
          <input
            type="number"
            value={referenceAccNum}
            onChange={(e) => setReferenceAccNum(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>
        <h3 className="lg:text-xl text-md font-bold font-poppins text-left pt-8 text-black">
          Second Person
        </h3>
        <br></br>
        <label>
          REQUIRED *Bank and Trade:
          <input
            type="text"
            value={referenceBankTwo}
            onChange={(e) => setReferenceBankTwo(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            value={referenceContactTwo}
            onChange={(e) => setReferenceContactTwo(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={referencePhoneTwo}
            onChange={(e) => setReferencePhoneTwo(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={referenceMailTwo}
            onChange={(e) => setReferenceMailTwo(e.target.value)}
            className="underlined-input"
          />
        </label>
        <label>
          Account Numbers:
          <input
            type="text"
            value={referenceAccNumTwo}
            onChange={(e) => setReferenceAccNumTwo(e.target.value)}
            className="underlined-input"
          />
        </label>
        <br></br>
        <h3 className="lg:text-xl text-lg font-bold font-poppins text-left pt-8 text-black">
          Terms of Agreement; Net 30.
        </h3>
        <div className="w-full lg:w-full  md:p-8 p-4 grid-section">
          <p>
            Terms are net 30 days from the invoice (unless otherwise agreed). A
            1.5% service charge applies to accounts over 30 days. The person
            signing on behalf of the applicant individually and personally
            warrants Kal Partz Inc. and/or KVL Tires Inc. that he/she is
            authorized to execute this application, and that the information is
            accurate and complete. Applicant agrees to pay reasonable attorney’s
            fees and costs for any legal action to enforce collection on
            applicant’s account. The applicant agrees to pay $35 for each check
            issued by the applicant to Kal Partz Inc. and/or KVL Tires Inc. or
            the legal entities doing business as Kal Partz Inc. and/or KVL Tires
            Inc., which is returned unpaid or marked NSF. The applicant agrees
            to pay its obligations to Kal Partz Inc. and/or KVL Tires Inc. as
            they may become due and this agreement is affirmed with each
            purchase by applicant of Kal Partz Inc. and/or KVL Tires Inc. The
            terms of this credit application may not be changed except by
            written agreement of Kal Partz Inc. and/or KVL Tires Inc. By signing
            this application, the applicant agrees to all these terms and
            conditions and grants permission for credit information to be
            verified by companies and financial institutions that are specified
            in the application or that Kal Partz Inc. and/or KVL Tires Inc.
            learns about during the credit review process and from time to time
            thereafter. The buyer agrees to notify Kal Partz Inc. and/or KVL
            Tires Inc. within 10 days in writing of receipt of monthly statement
            of any discrepancies in billing. Failure to notify Kal Partz Inc.
            and/or KVL Tires Inc. signifies total acceptance and responsibility
            for prompt payment in full. The buyer agrees that no refund will be
            granted unless merchandise is returned within 30 days with the
            invoice to Kal Partz Inc. and/or KVL Tires Inc. and in original
            sales conditions. Kal Partz Inc. and/or KVL Tires Inc. reserves the
            right to send out “Notice To Owners” and file liens on past due
            accounts and use any legal means available to force collection if
            necessary.<br></br>
            <br></br>
            CALIFORNIA RESIDENTS: Each applicant, if married, may apply for a
            separate account.
          </p>
        </div>

        <div className="w-full lg:full md:p-8 p-4 grid-section">
          <div className="item1">
            <label>AUTHORIZED SIGNATURE 1:</label>
            <SignatureCanvas
              ref={signatureCanvasOne} // Use signatureCanvasOneRef here
              penColor="black"
              style={{ cursor: "crosshair" }}
              canvasProps={{
                className: "signature-canvas",
                width: 500,
                height: 100,
                className: "border border-black mt-2",
              }}
            />
            <button
              className="text-black bg-red rounded h-6 w-28 font-Helvetica"
              type="button"
              onClick={handleClearSignatureOne}
            >
              Clear Signature
            </button>
          </div>
          <br />
          <div>
            <label>
              TITLE:
              <input
                type="text"
                value={signatureTitleOne}
                onChange={(e) => setSignatureTitleOne(e.target.value)}
                className="underlined-input"
              />
            </label>
          </div>
          <div>
            <label>
              DATE:
              <input
                type="date"
                value={signatureDateOne}
                onChange={(e) => setSignatureDateOne(e.target.value)}
                className="underlined-input"
              />
            </label>
          </div>
        </div>
        <div className="w-full lg:w-full md:p-8 p-4 grid-section">
          <div className="item1">
            <label>AUTHORIZED SIGNATURE 2:</label>
            <SignatureCanvas
              ref={signatureCanvasTwo} // Use signatureCanvasTwoRef here
              penColor="black"
              style={{ cursor: "crosshair" }}
              canvasProps={{
                className: "signature-canvas",
                width: 500,
                height: 100,
                className: "border border-black mt-2",
              }}
            />
            <button
              className="text-black bg-red rounded h-6 w-28 font-Helvetica"
              type="button"
              onClick={handleClearSignatureTwo}
            >
              Clear Signature
            </button>
          </div>
          <br />
          <div>
            <label>
              TITLE:
              <input
                type="text"
                value={signatureTitleTwo}
                onChange={(e) => setSignatureTitleTwo(e.target.value)}
                className="underlined-input"
              />
            </label>
          </div>
          <div>
            <label>
              DATE:
              <input
                type="date"
                value={signatureDateTwo}
                onChange={(e) => setSignatureDateTwo(e.target.value)}
                className="underlined-input"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="text-white bg-red-500 rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
          type="submit"
          id="submitmain"
        >
          {buttonText}
        </button>
      </div>
      <style jsx>{`
        h3 {
          color: Red;
        }

        .justify-content-center {
          display: flex;
          justify-content: center;
        }

        .grid-form {
          display: grid;
          grid-template-columns: auto auto;
          padding: 20px;
          column-gap: 20px;
        }

        .grid-section {
          grid-column: span 2;
          display: grid;
          grid-template-columns: auto auto; /* Two columns */
          column-gap: 20px;
          row-gap: 20px;
        }

        .item1 {
          grid-row: 1 / 4;
        }

        .grid-section-radio {
          grid-column: span 4;
          display: grid;
          grid-template-columns: auto auto auto auto; /* Two columns */
          column-gap: 30px;
          row-gap: 20px;
        }

        .underlined-input {
          border: none;
          border-bottom: 1px solid black;
          outline: none;
          width: 100%;
        }

        .underlined-input:focus {
          border-bottom: 2px solid red;
        }
      `}</style>
    </form>
  );
};

export default CreditApp;
