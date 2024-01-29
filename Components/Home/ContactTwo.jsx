import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Sparkles from '../../Animation/Sparkel'; // Assuming you have this animation component
import kvlTirelogo from '../../Assets/Images/KvlTiresLogo.png';
import Image from 'next/image'; // Assuming you have the 'next/image' import
import useMediaQuery from '../../Hooks/CustomMediaQuery'; // Assuming you have this hook
import mainimage from '../../Assets/Images/Whatweoffer/Contactform/mainimage.png'; // Assuming you have this image
import { motion } from 'framer-motion'; // Assuming you have the framer-motion import
import { handleInput } from "../../HelpFunctions/PhoneNoFormatter";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [zip, setZip] = useState(''); // Assuming you have zip state
  const [success, setSuccess] = useState(false);
  const [phoneno, setPhoneno] = useState('');
  const [error, setError] = useState(false);

  const resetForm = () => {
    setName('');
    setPhoneno('');
    setEmail('');
    setMessage('');
    setZip('');
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        site: 'kalgroup',
        name,
        email,
        phoneno,
        message,
        zip,
      };

      const response = await emailjs.send(
        'service_cp5i6vi', // Replace with your Email.js service ID
        'template_a72yzud', // Replace with your Email.js template ID
        templateParams,
        'wAyhkbQYM_6pVPBxS' // Replace with your Email.js user ID
      );

      console.log('Email sent successfully:', response);
      setSuccess(true);
      resetForm();
    } catch (error) {
      console.error('Email failed to send:', error);
      setSuccess(false);
      setError(true);
    }
  };

  const isDesktop = useMediaQuery('(min-width:1148px)'); // Assuming you have this hook

  return (
    <div id="maincontactform" className="justify-between lg:flex">
      <div className="md:p-0 p-4 bg-red-600 2xl:w-1/2 xl:w-9/12 flex justify-center items-center">
        {success ? (
          <motion.div
            className="flex flex-center justify-center items-center "
            animate={{ scale: [0.5, 1] }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex bg-white flex-col justify-center items-center pt-2 pb-20">
              <div className="w-max">
                <Image
                  loading="lazy"
                  className="pb-8"
                  src={kvlTirelogo}
                  width={140}
                  height={120}
                />
              </div>
              <div className="text-2xl font-bold  bg-white text-black w-full m-20 mt-3 text-center mb-16 font-Helvetica ">
                <Sparkles>
                  <div className="text-black flex flex-col">
                    <div className="text-5xl  pb-4 text-red-500">Thank you</div>
                    <div className="text-xl font-light text-gray-700">
                      Your submission has been received
                    </div>
                    <div className=" text-xl font-light text-gray-700">
                      We will contact You soon!
                    </div>
                  </div>
                </Sparkles>
              </div>
              <div
                className="text-xl font-normal text-white text-center  cursor-pointer mb-2"
                onClick={() => {
                  setSuccess(false);
                }}
              >
                <div
                  className="bg-blue-500 px-6 py-2"
                  animate={{ scale: [0.8, 1] }}
                  transition={{
                    ease: 'linear',
                    duration: 0.9,
                    repeat: Infinity,
                  }}
                >
                  Make a new request
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <form className="w-fit" onSubmit={handleSubmit}>
            <div className="lg:ml-20 ml-4">
              <div className="lg:text-left text-center">
                <div
                  id="contactnew"
                  className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12   "
                >
                  {/* Your form elements here */}
                  <div>
                    <h3 className="text-white md:text-5xl text-2xl font-bold text-left font-poppins">
                      Contact Us
                    </h3>
                    <p className="text-white pt-4  text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                      <span className="font-bold text-lg">
                        We are just one click away!
                        <span> </span>
                      </span>
                      Let’s grow your business together. Please provide your
                      details, and a KVL Tires expert will get in touch with you
                      shortly.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap  mb-6 md:mt-8 lg:mt-0 lg:mr-12 md:mr-8 mr-4">
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none font-Helvetica block w-full h-full placeholder-white bg-opacity-30 bg-red-600  text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    id="grid-first-name"
                    type="text"
                    value={name}
                    placeholder="Name"
                    required
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    type="tel"
                    maxLength="12"
                    minLength="10"
                    placeholder="Contact Number"
                    accept="number"
                    // Assuming you have phoneno and handleInput functions
                    value={phoneno}
                    className="appearance-none block w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                    onChange={(e) => handleInput(e, setPhoneno)}

                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
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
                <div
                  className="w-full flex justify-center items-center   mb-6 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setZip(e.target.value)}
                    className="appearance-none block w-full h-full bg-opacity-30  bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none "
                    id="grid-first-name"
                    type="text"
                    value={zip}
                    placeholder="ZIP Code"
                    maxLength="6"
                    required
                  />
                </div>
                <div
                  className="w-full flex justify-center items-center   mb-0 md:mb-0 md:pt-4"
                  id="input_placeholder"
                >
                  <input
                    onChange={(e) => setMessage(e.target.value)}
                    className="appearance-none outline-none font-Helvetica block w-full h-full bg-opacity-30 bg-red-600 placeholder-white text-white border rounded py-3 px-4 mb-0 leading-tight focus:outline-non"
                    id="grid-first-name"
                    type="text"
                    value={message}
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              {error && (
                <div className="font-bold font-Helvetica text-white">
                  Email failed to send. Please try again later.
                </div>
              )}
              <button
                className="text-black bg-white rounded h-12 p-4 w-48 mt-2 flex justify-center items-center font-Helvetica"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
      {isDesktop ? (
        <Image
          loading="lazy"
          src={mainimage}
          title="Contact at KVL Tires"
          alt="This image is belonging to Contact us. You can buy new tires with KVL Tires, and you can contact us for more information.  KVL Tires expert will get in touch with you shortly."
          objectFit="cover"
          className="grayscale"
        />
      ) : null}
    </div>
  );
};

export default ContactForm;
