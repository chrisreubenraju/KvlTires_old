import React, { useState } from "react";
import emailjs from "emailjs-com";
import Head from "next/head";

const departments = [
  "Management",
  "Warehouse",
  "Sales",
  "Delivery Drivers",
  "Service Technicians",
];

const Resume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [department, setDepartment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Email.js service ID, template ID, and user ID
    const serviceId = "service_cp5i6vi";
    const templateId = "template_iaq6wkj";
    const userId = "wAyhkbQYM_6pVPBxS";

    try {
      const templateParams = {
        name,
        email,
        experience,
        department,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log("Email sent successfully:", response);

      // Assuming submission is successful, you can update state accordingly
      setIsSubmitted(true);
    } catch (error) {
      console.error("Email failed to send:", error);

      // Handle error state accordingly
    }
  };

  return (
    <div id="maincontactform" className="justify-between lg:flex">
      <div className="md:p-0 p-4 bg-red-600 w-full flex justify-center items-center">
        {isSubmitted ? (
          <div>
            <p className="font-bold font-Helvetica text-white">
              Thank you for submitting your job application!
            </p>
          </div>
        ) : (
          <form
            className="w-full lg:w-2/3 md:ml-20 ml-4 md:p-8 p-4"
            onSubmit={handleSubmit}
          >
            <div>
              {/* Form fields go here */}
              <div className="w-full flex justify-center items-center mb-6 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none font-Helvetica block w-full h-full placeholder-white bg-opacity-30 bg-red-600 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  value={name}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full flex justify-center items-center mb-6 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block font-Helvetica w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                  id="emailValidate"
                  type="email"
                  value={email}
                  placeholder="Email Id"
                  required
                  pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                />
              </div>
              <div className="w-full flex justify-center items-center mb-6 md:mb-0 md:pt-4">
                <input
                  onChange={(e) => setExperience(e.target.value)}
                  className="appearance-none block w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  type="text"
                  value={experience}
                  placeholder="Years of Experience"
                  required
                />
              </div>
              <div className="w-full flex justify-center items-center mb-6 md:mb-0 md:pt-4">
                <select
                  onChange={(e) => setDepartment(e.target.value)}
                  className="appearance-none block w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="grid-first-name"
                  value={department}
                  required
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
                type="submit"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Resume;
